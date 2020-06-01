import React, { Component } from 'react'
import axios from 'axios'


export default class MetalPriceApi extends Component {
    constructor(props){
        super(props);

        this.state={
            ratesList: ''
        }
    }


    componentDidMount(){
        axios.get('https://gold-price-live.p.rapidapi.com/get_metal_prices')
        .then(res => {
            this.setState({
                ratesList:res.data.rates
            });
            
        });
    }

    render() {
        
        if(this.state.ratesList === undefined || this.state.ratesList === []){
            
            return <div></div>
            
        }
        

        return (
            <div className="metalPrices">
                <div>
                    <iframe src="https://www.goldbroker.com/widget/live-price/XAU?currency=USD"></iframe>
                </div>
                <div>
                    <iframe src="https://www.goldbroker.com/widget/live-price/XAG?currency=USD"></iframe>
                </div>
                <div>
                    <iframe src="https://www.goldbroker.com/widget/live-price/XPD?currency=USD"></iframe>
                </div>
                <div>
                    <iframe src="https://www.goldbroker.com/widget/live-price/XPT?currency=USD"></iframe>
                </div>
            </div>
        )
    }
}
