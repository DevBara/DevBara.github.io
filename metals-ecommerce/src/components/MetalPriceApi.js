import React, { Component } from 'react'

export default class MetalPriceApi extends Component {


    constructor(props){
        super(props);

        this.state ={
           prices: [],
           
        };

       
    }

    componentDidMount(){
        const Metals_Api= process.env.REACT_APP_METALS_API

            fetch(`https://metals-api.com/api/latest?access_key=${Metals_Api}&base=USD&symbols=XAU,XAG,XPD,XPT,XRH`)
                .then(response => response.json())
                .then(data => this.setState({
                    prices: data
                    
            }))

        }
        
        render() {
            const{prices} = this.state;

            const priceTicker=prices.map(prices => {
                return <div key ={prices.id}>
                   <div>{prices.USD}</div>          
                </div>
            });

            return (
                <div className="currencyTitle">
                    {priceTicker}
                 
                </div>
                
            )
        }  
    }

