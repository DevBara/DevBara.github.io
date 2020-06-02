import React, { Component } from 'react'

export default class StockAPI extends Component {
    constructor(props){
        super(props);

        this.state={
            data: [],
            isLoading:true,
            name:'',
            ticker:'',
            marketCapitalization: ''
        }
    }

    componentDidMount(){
        this.setState({
            isLoading:true});

            fetch('https://finnhub.io/api/v1/stock/profile2?symbol=DOW&token=braskbvrh5rbo6o6t0c0')
                .then(response => response.json())
                .then(data => this.setState({
                    data: data,
                    isLoading:false,

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
