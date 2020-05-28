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
        e.preventDefault()
        console.log(this.state);

        axios.post('metals_api/v1/metals',
            this.state)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
        
    }

    deleteHandler = e =>{
        e.preventDefault()
        console.log(this.state)

        axios.delete('metals_api/v1/metals', this.state)
            .then(response =>{
                console.log(response);
            })
            .catch((err) => {
                console.log(err);
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
                    <button type="submit" onClick={this.deleteHandler}>Delete Metal</button>
				</form>
			</div>
		)
	}
}
export default AddMetals;



// name
// price
// quantity