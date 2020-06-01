import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import {Button}from 'react-bootstrap'
import axios from 'axios'


export default class UserReviews extends Component {

    emptyComment = {
        comments: '',
        ratings: [],
        reviews: []
      };

    constructor(props){
        super(props);

        this.state={
            comments: '',
            ratings:[],
            reviews:[],
            item: this.emptyComment,
            id: this.props.match.params.id
            
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


        async removeComments(id) {
            axios.delete(`metals_api/v1/reviews/16`) 
            .then(function (response) {
              console.log(response);
            })
            .catch(function (error) {
              console.log(error);
            });
        }


    render() {
        const {reviews} = this.state;

        const reviewsList=reviews.map(reviews => {
            return <div key={reviews.id}>
                <h4>Rated {reviews.rating} out of 5 stars</h4>
                <div>{reviews.comments}</div>            
            </div>

        });
        
        return (
            <div>
                <div> 
                    <NavLink className="button" to="/leavereview">Leave a Review</NavLink>
                </div>
                <div className="reviewContainer">
                    <div className="cardReview" id="reviewsList" >
                        <div className="reviewsList">{reviewsList[0]}</div>
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
                    <Button onClick={() => this.removeComments(reviews.id)}></Button>
                </div>
            </div>
        )
    }
}

