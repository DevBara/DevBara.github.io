import React, { Component } from 'react'
import { Button, Container, Form, FormGroup, Input, Label,Table } from 'reactstrap';


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

            fetch('/metals_api/v1/metals')
                .then(response => response.json())
                .then(data => this.setState({
                    metals: data,
                    isLoading:false
            }))
        }

        async remove(id) {
            await fetch(`/metals_api/v1/metals${id}`, {
              method: 'DELETE',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              }
            }).then(() => {
              let updatedMetals= [...this.state.metals].filter(i => i.id !== id);
              this.setState({metals: updatedMetals});
            });
          }
 
          

    
        render() {
            const{metals,isLoading} = this.state;

            if(isLoading){
                return <p> Loading...</p>
            }

            const metalsList=metals.map(metals => {
                return <tr key ={metals.id}>
                    <td>{metal.name}</td>
                    <td>{metal.price}</td>
                    <td>{metal.quantity}</td>
               
                    <td> 
                        <Button onClick={() => this.add()}>Edit</Button>
                        <Button onClick={() => this.remove(currency.id)}>Delete</Button>
                    </td>
                </tr>
            });

            return (
                <div className="currencyTitle">
                    <h2>Tracked Currencies</h2>
                
                <div className="trackerContainer">
                    <Table>
                        <thead>
                        <tr>
                            <th>Currency Name</th>
                            <th>Currency Code</th>
                            <th>Amount</th>
                            <th>Exchange Rate</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                            {currencyList}
                        </tbody>                               
                    </Table>
                  
                  </div>
                </div>
            )
        }  
    }