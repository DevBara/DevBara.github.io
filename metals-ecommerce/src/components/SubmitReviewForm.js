import React, { Component } from 'react'
import {Button}from 'react-bootstrap'
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

 deleteHandler = e => {
     window.alert('Review has been deleted')

     axios.delete('metals_api/v1/reviews',
        this.state)
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
 }
    
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
                    <Button type="submit">Submit Review</Button>
                    <div onSubmit={this.deleteHandler}>
                        <button type="button" onChange={this.changeHandler}>Remove Review</button>
                    </div>
                    
                </form>
            </div>
        )
    }
}
