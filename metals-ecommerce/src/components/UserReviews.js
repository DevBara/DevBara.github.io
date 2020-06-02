import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import axios from 'axios'
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';



export default class UserReviews extends Component {
    

    constructor(props){
        super(props);

        this.state={
            comments: '',
            ratings:[],
            reviews:[],
        }

        this.removeComments = this.removeComments.bind(this);
    }

    componentDidMount(){
        this.setState({
            isLoading:true});

            fetch('http://localhost:8090/metals_api/v1/reviews')
                .then(response => response.json())
                .then(data => this.setState({
                    reviews: data,
                    
            }))

        }

        handleChange(event) {
            const target = event.target;
            const value = target.value;
            const name = target.name;
            let item = {...this.state.item};
            item[name] = value;
            this.setState({item});
          }


        async removeComments(id) {
            axios.delete(`metals_api/v1/reviews/${id}`) 
            .then(function (response) {
              console.log(response);
            })
            .catch(function (error) {
              console.log(error);
            });
        }

        async editComments(id) {
            axios.put(`/metals_api/v1/reviews/${id}`) 
            .then(function (response) {
              console.log(response);
            })
            .catch(function (error) {
              console.log(error);
            });
        }


      


    render() {
        const {reviews} = this.state;
        const {item} = this.state;

        const reviewsList=reviews.map(reviews => {
            return <div key={reviews.id}>
                <h4>Rated {reviews.rating} out of 5 stars</h4>
                <div>{reviews.comments}</div>            
            </div>

        });
        
        return (
            <div className="reviewWrapper" onChange={this.handleChange}>
                <div className="leaveButton"> 
                    <NavLink to="/leavereview">Leave a Review</NavLink>
                </div>
                <div className="reviewContainer">
                    <div className="cardReview" id="reviewsList" >
                        <div className="reviewsList">{reviewsList[0]}</div>
                        <button onClick={this.editComments}>Edit</button>
                    </div>
                    <div className="cardReview" >
                        <div className="reviewsList">{reviewsList[1]}</div>
                    </div>
                    <div className="cardReview" >
                        <div className="reviewsList">{reviewsList[2]}</div>
                    </div>
                    <div className="cardReview" >
                        <div className="reviewsList">{reviewsList[3]}</div>
                    </div>
                    <div className="cardReview" >
                        <div className="reviewsList">{reviewsList[4]}</div>
                    </div>
                    <div className="cardReview" >
                        <div className="reviewsList">{reviewsList[5]}</div>
                    </div>
                    <div className="cardReview" >
                        <div className="reviewsList">{reviewsList[6]}</div>
                    </div>
                </div>
            </div>
        )
    }
}

