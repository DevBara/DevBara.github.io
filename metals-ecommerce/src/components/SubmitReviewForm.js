import React, { Component } from 'react'
import {Form, Button}from 'react-bootstrap'
import axios from 'axios'

 
export default class SubmitReviewForm extends Component {
    constructor(props){
        super(props);

        this.state={
            comments: [],
            ratings: []
        }
    }

    changeHandler = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = e => {
        e.preventDefault()

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

        const{comments, ratings} = this.state
        return (
            <div>
                <form>
                    <div>
                        <p>Select Rating</p>
                        <select>
                        <option value="0">-</option>
                            <option value="1">1 star</option>
                            <option value="2">2 stars</option>
                            <option value="3">3 stars</option>
                            <option value="4">4 stars</option>
                        </select>
                    </div>
                    <textarea rows="9" cols="70" placeholder="Type Review Here..."></textarea>
                </form>
            </div>
        )
    }
}
