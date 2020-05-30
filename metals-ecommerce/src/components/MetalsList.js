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
                    isLoading:false

            }))


        }
        
        render() {
            const{metals,isLoading} = this.state;

            if(isLoading){
                return <p> Loading...</p>
            }

            const metalsList=metals.map(metals => {
                return <div key ={metals.id}>
                    <h1>{metals.name}</h1>
                    <h3>${metals.price}</h3>
                    <h3>Quantity
                        <select>{metals.quantity}</select>
                    </h3>
                    <button>Add to Cart</button>               
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