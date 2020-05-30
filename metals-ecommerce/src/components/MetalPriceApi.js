// import React, { Component } from 'react'
// import axios from 'axios'

// export default class MetalPriceApi extends Component {
//     constructor(props){
//         super(props);

//         this.state={
//             ratesList: []
//         }
//     }


//     componentDidMount(){
//         axios.get('https://metals-api.com/api/latest?access_key=dmq34ceggue0sri34iokre5rxcppv5s9e983jn98ivi5jfg545asqtegn5r0&base=USD&symbols=XAU,XAG,XPD,XPT,XRH')
//         .then(res => {
//             const tickers=res.data.rates;
//             console.log(tickers)

//             this.setState({
//                 ratesList:res.data.rates
//             });
//         });
//     }


//     render() {

//         const{ratesList} = this.state;

//         const rates = ratesList.map(ratesList => {
//             return <div key ={ratesList}>
//                 <h1>{ratesList}</h1>
//             </div>
//         })

//         return (
//             <div>
//                 {rates}
                
//             </div>
//         )
//     }
// }
