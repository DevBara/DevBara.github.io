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
        axios.get('https://metals-api.com/api/latest?access_key=ur9qbagkj269riclrh2pn8d78y6ry5t5254mbst77vbi92nbkis6tenfu9t1&base=USD&symbols=XAU,XAG,XPD,XPT,XRH')
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
            <div>
                <div>
                    {Object.values(this.state.ratesList).map(key => (
                        <li key={key}>{[key].data}</li>
                    ))}
                </div>
            </div>
        )
    }
}
