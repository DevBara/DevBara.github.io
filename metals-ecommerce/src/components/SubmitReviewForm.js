import React, { Component } from 'react'
import {Form, Button}from 'react-bootstrap'
import axios from 'axios'

 
export default class SubmitReviewForm extends Component {
    constructor(props){
        super(props);

        this.state={
            comments: '',
            rating: ''
        }
    }

    changeHandler = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = e => {
        window.alert('Review has been submitted')

        axios.post('metals_api/v1/reviews',
            this.state)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
        
    }

    async componentDidMount() {
        if (this.props.match.params.id !== 'new') {
          const group = await (await fetch(`/metals_api/v1/reviews/${this.props.match.params.id}`)).json();
          this.setState({item: group});
        }
      }

    async remove(id) {
        await fetch(`/metals_api/v1/reviews`, {
          method: 'DELETE',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        }).then(() => {
          let updatedReviews = [...this.state.reviews].filter(i => i.id !== id);
          this.setState({currencies: updatedReviews});
        });
      }

    // deleteHandler = e =>{
    //     e.preventDefault()
    //     console.log(this.state)

    //     axios.delete(`metals_api/v1/reviews/${id}`, this.state)
    //         .then(response =>{
    //             console.log(response);
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         })
    //     }
    render() {

        const{comments, rating} = this.state
        return (
        <div>
                <form onSubmit={this.submitHandler}> 
                    <div>
                        <label for="rating">Select Rating</label>

                        <select name="rating" onChange={this.changeHandler} value={rating}>
                        <option value="0">-</option>
                            <option value="1">1 star</option>
                            <option value="2">2 stars</option>
                            <option value="3">3 stars</option>
                            <option value="4">4 stars</option>
                        </select>
                    </div>
                    <textarea
                        rows="9" cols="70" 
                        placeholder="Type Review Here..." 
                        value={comments}
                        onChange={this.changeHandler}
                        name="comments"
                    >
                    </textarea>
                    <button type="submit">Submit Review</button>
                    <button type="button" onClick={() => this.remove()}>Remove Review</button>
                </form>
            </div>
        )
    }
}
