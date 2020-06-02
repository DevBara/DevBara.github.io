import React, { Component } from 'react'


export default class StockAPI extends Component {

    constructor(props) {
        super(props);
        
        let array = new Array(20);
        let NewsObject = {
          name:[],
          marketCapitalization:[],
          ticker:[]
        };
        array.fill(NewsObject);
        this.state = {
          isLoaded: false,
          data: array
        }
      }
    
      componentDidMount() {

        fetch(`https://finnhub.io/api/v1/stock/profile2?symbol=DOW&token=braskbvrh5rbo6o6t0c0`)
          .then(response => response.json()) 
          .then(
            result => {
             
             
              let newsArray=[];
              let newNewsObject;
 
              for(let i =0;i<20;i++){
                newNewsObject = {
                  name:result.name,
                  marketCapitalization:result.marketCapitalization,
                  ticker: result.ticker
                  
                };
                newsArray.push(newNewsObject);
              }
            
              this.setState({
                isLoaded: true,
                data: newsArray
              })
    
             
            }
          ).catch(e => console.log("there's a error", e))
      }
    

      render() {
        return (
          <div className="cardNews">
            <div className="">
                <div className="row">
                    <ul>
                        <li className="newsTitle">{this.state.data.name}</li>
                    </ul>
                </div>
                <div className="row">
                    <ul>
                        <li className="newsTitle">{this.state.data.marketCapitalization}</li>
                    </ul>
                </div>
                <div className="row">
                    <ul>
                        <li className="newsTitle">{this.state.data.ticker}</li>
                    </ul>
                </div>
          {/* <div className="row">
            <ul>
              <li className="newsTitle">{this.state.data[1].title}</li>
              <br></br>
              <li><a href={this.state.data[1].url} target="_blank">Read More</a></li>
            </ul>
          </div>
          <div className="row">
            <ul>
              <li className="newsTitle">{this.state.data[2].title}</li>
              <br></br>
              <li><a href={this.state.data[2].url} target="_blank">Read More</a></li>
            </ul>
          </div> */}
            </div>
          </div>
        )
      }
    }