import React, { Component } from 'react'
// import Sleekbeer from '../assets/Sleekbeer.jpg'
import AddMetals from './AddMetals'



export default class MetalsList extends Component {
    constructor(props){
        super(props);

        this.state ={
            isLoading: true,
            metals: [],
           
        };

       
    }

    componentDidMount(){
        this.setState({
            isLoading:true});

            fetch('http://localhost:8090/metals_api/v1/metals')
                .then(response => response.json())
                .then(data => this.setState({
                    metals: data,
                    isLoading:false,
                    price: data

            }))


        }
        
        render() {
            const{metals,isLoading} = this.state;

            if(isLoading){
                return <p> Loading...</p>
            }

            const metalsList=metals.map(metals => {
                return <div key ={metals.id}>
                <div className="card">
                
                    <h1>{metals.name}</h1>
                    <p className="price">${metals.price}</p>
                    <p>Quantity
                        <select>{metals.quantity}
                            <option>-</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                        </select>
                    </p>
                    <p><button>Add to Cart</button></p>
                </div>            
                
                </div>
            });

            return (
                <div className="currencyTitle">
                    {metalsList}
                    <AddMetals />
                </div>
                
            )
        }  
    }