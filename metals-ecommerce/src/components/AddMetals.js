import React, { Component } from 'react'
import axios from 'axios';

class AddMetals extends Component {
    constructor(props){
        super(props)

        this.state={
            name: '',
            price: '',
            quantity: ''
        }
    }

    changeHandler = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = e => {
       
       
        axios.post('metals_api/v1/metals',
            this.state)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
        
    }


    render() {
		const { name, price, quantity } = this.state
		return (
			<div>
				<form onSubmit={this.submitHandler}>
					<div>
						<input
							type="text"
							name="name"
							value={name}
							onChange={this.changeHandler}
						/>
					</div>
					<div>
						<input
							type="text"
							name="price"
							value={price}
							onChange={this.changeHandler}
						/>
					</div>
					<div>
						<input
							type="text"
							name="quantity"
							value={quantity}
							onChange={this.changeHandler}
						/>
					</div>
					<button type="submit">Add Metal</button>
				</form>
			</div>
		)
	}
}
export default AddMetals;
