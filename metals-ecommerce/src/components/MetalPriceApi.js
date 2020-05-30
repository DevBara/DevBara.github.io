import React, { Component } from 'react'

export default class MetalPriceApi extends Component {


    constructor(props){
        super(props);

        this.state ={
           prices: '',
           
        };

       
    }

    componentDidMount(){
      

            fetch(`https://metals-api.com/api/latest?access_key=${process.env.REACT_APP_METALS}&base=USD&symbols=XAU,XAG,XPD,XPT,XRH`)
                .then(response => response.json())
                .then(data => this.setState({
                    prices: data
                    
            }))

        }
        
        render() {
            const{prices} = this.state;

            const priceTicker=prices.map(prices => {
                return <div key ={prices.rates}>
                   <div>{prices.rates}</div>          
                </div>
            });

            return (
                <div className="currencyTitle">
                    {priceTicker}
                 
                </div>
                
            )
        }  
    }

