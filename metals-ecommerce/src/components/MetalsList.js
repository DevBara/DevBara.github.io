import React, { Component } from 'react'
import {Card, CardImg,CardHeader, CardText, CardBody, CardTitle, CardSubtitle, Button,Row,Col} from 'reactstrap';
import Sleekbeer from '../assets/Sleekbeer.jpg'


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

        async remove(id) {
            await fetch(`http://localhost:8090/metals_api/v1/metals${id}`, {
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
                    <td>{metals.name}</td>
                    <td>{metals.price}</td>
                    <td>{metals.quantity}</td>
               
                    <td> 
                        <Button>Edit</Button>
                        <Button onClick={() => this.remove(metals.id)}>Delete</Button>
                    </td>
                </tr>
            });

            return (
                <div className="currencyTitle">
                
                <div className="trackerContainer">
                <Row>
                    <Col sm="6">
                        <Card>
                            <CardHeader>
                                <CardTitle>Metal Name:</CardTitle>
                                <CardSubtitle>Price</CardSubtitle>
                            </CardHeader>
                            <CardImg width="20%" height="20%" src={Sleekbeer}/>
                            <CardBody >
                                <CardText>.999 Fine gold</CardText>
                                <Button>Add To Cart</Button>    
                            </CardBody>                   
                        </Card>
                    </Col>
                </Row>
                  
                  </div>
                </div>
            )
        }  
    }