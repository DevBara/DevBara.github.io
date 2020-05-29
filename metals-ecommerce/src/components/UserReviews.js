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
                <h4>Rating is:{reviews.rating} out of 5 stars</h4>
                <div>{reviews.comments}</div>            
            </div>

        });
        
        return (
            <div>
                <h1 className="reviewsTitle"> Dont take our word for it, see what others have to say!</h1>
                <h2 className="reviewsSubTitle">Customer Reviews</h2>
                <div className="reviewsList">{reviewsList}</div>
                <br></br>
                <br></br>
                <br></br>
                

                <div> 
                    <NavLink className="button" to="/leavereview">Leave a Review</NavLink>
                </div>
            </div>
        )
    }
}

