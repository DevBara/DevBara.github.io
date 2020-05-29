import React, {useState } from 'react'
import axios from 'axios'


export default function UserReviews() {

    const[reviews,setReviews] = useState(null);

    const apiUrl ='http://localhost:8090/metals_api/v1/reviews';

    const fetchData= async () =>{
        const response = await axios.get(apiUrl)

        setReviews(response.data)
    }


    return (
        <div className="userApp">
            <h1> User Reviews</h1>
            <h2>Dont let us tell you how great we are, see from our loyal customers</h2>
            <div>
                <button className="reviewButton" onClick={fetchData}>See Reviews</button>
            </div>
           
            </div>
         
    );
    
}