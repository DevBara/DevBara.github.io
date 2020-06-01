import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';



export default class UserReviews extends Component {
    constructor(props){
        super(props);

        this.state={
            comments: '',
            ratings:[],
            reviews:[]
        }
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

 

    render() {
        const {reviews} = this.state;

        const reviewsList=reviews.map(reviews => {
            return <div key={reviews.id}>
                <h4>Rated {reviews.rating} out of 5 stars</h4>
                <div>{reviews.comments}</div>            
            </div>

        });
        
        return (
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
            </div>
        )
    }
}

// <div> 
// <NavLink className="button" to="/leavereview">Leave a Review</NavLink>
// </div>