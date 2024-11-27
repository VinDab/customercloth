import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewCustomer(){

    const[customer, setCustomer] = useState({

    custName:"",
    email:"",
    item:"",
    price:"",
    registrationDate:"",


    })

   

    const {id} = useParams();

    useEffect(()=>{

        loadCustomer()

    }, )

    const loadCustomer = async ()=>{

     

        const result=await axios.get(`http://localhost:8080/customer/${id}`)
        setCustomer(result.data)
    }

    return (

        <div className="container">
            
            <div className="row">
                <div className="col-md6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">Customer Details</h2>
                        <div className="card">
                            <div className="card-header">
                                Details of user id : {customer.id}
                                <ul className="list-group list-group-flush">

                                    <li className="list-group-item">
                                          <b>Customer Name:</b>  
                                          {customer.custName}  
                                    </li>
                                    <li className="list-group-item">
                                          <b>Customer Email:</b>  
                                          {customer.email} 
                                    </li>
                                    <li className="list-group-item">
                                          <b>Cloth Item:</b>  
                                          {customer.item} 
                                    </li>
                                    <li className="list-group-item">
                                          <b>Price:</b>  
                                          {customer.price} 
                                    </li>
                                    <li className="list-group-item">
                                          <b>Order Date:</b>  
                                          {customer.registrationDate} 
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <Link className="btn btn-primary my-2" to={"/"}>Back to Home</Link>
                </div>
            </div>
        </div>
    )
}