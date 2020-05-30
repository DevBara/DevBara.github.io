import React, { Component } from 'react'
import {Form}from 'react-bootstrap'
import axios from 'axios'

 
export default class SubmitReviewForm extends Component {
    constructor(props){
        super(props);

        this.state={
            reviews: [],
            ratings: []
        }
    }


    submitHandler = e => {
        e.preventDefault()
        console.log(this.state);

        axios.post('metals_api/v1/metals/reviews',
            this.state)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
        
    }
    render() {
        return (
            <div>
                <Form>
                    <Form.Group className="ratingInput" controlId="exampleForm.ControlSelect1">
                        <Form.Label>Select Rating</Form.Label>
                        <Form.Control as="select">
                        <option></option>
                        <option>1 star</option>
                        <option>2 stars</option>
                        <option>3 stars</option>
                        <option>4 stars</option>
                        <option>5 stars</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Leave a Review:</Form.Label>
                        <Form.Control as="textarea" rows="9" />
                    </Form.Group>
                </Form>
            </div>
        )
    }
}
