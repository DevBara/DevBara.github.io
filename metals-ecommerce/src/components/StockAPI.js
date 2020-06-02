import React, { Component } from 'react'

export default class StockAPI extends Component {
    constructor(props){
        super(props);

        this.state={
            data: '',
            name:'',
            ticker:'',
            marketCapitalization: ''
        }
    }

    componentDidMount(){
        fetch('https://finnhub.io/api/v1/stock/profile2?symbol=DOW&token=braskbvrh5rbo6o6t0c0')
            .then(res => res.json())
            .then(json => this.setState({
                data:json

                
            }))
    }


    render() {
        return (
            <div>
                <ul> {this.state.data.map(data => (
                    <li>
                        {data.name}: {data.ticker}
                    </li>
                ))}
                    </ul>
                
            </div>
        )
    }
}
