import React, { Component } from 'react'
import axios from 'axios'
// import Sleekbeer from '../assets/Sleekbeer.jpg'


export default class MetalsList extends Component {
    constructor(props){
        super(props);

        this.state ={
            isLoading: true,
            metals: [],
           
        };

       
    }
    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        let item = {...this.state.item};
        item[name] = value;
        this.setState({item});
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
                return <tr key ={metals.id}>
                    <td>{metals.name}</td>
                    <td>{metals.price}</td>
                    <td>{metals.quantity}</td>               
                    {/* <td> 
                        <button onSubmit={this.submitHandler}>Delete</button>
                    </td>  */}
                </tr>
            });

            return (
                <div className="currencyTitle">
                    {metalsList}
                </div>
            )
        }  
    }