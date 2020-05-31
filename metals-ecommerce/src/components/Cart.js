import React, { Component } from 'react'
import MetalsList from './MetalsList'

export default class Cart extends Component {
    constructor(props){
        super(props);

        this.state={
            MetalsList:[MetalsList],
            sum:0,
            productListSums: []
        }
    }

    AddShoppingList = () => {
        let MetalsList = this.state.MetalsList.concat(MetalsList);
        this.setState({
            MetalsList
        })
        console.log(this.state.MetalsList)
    }



    render() {
        return (
            <div>
                {this.props.children}
                
            </div>
        )
    }
}
