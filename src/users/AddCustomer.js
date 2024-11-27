import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function AddCustomer(){

    let navigate=useNavigate()

    const [date, set_edit_check_date] = useState();

const [customer, setCustomer] = useState({
    custName:"",
    email:"",
    item:"",
    price:"",
    registrationDate:date



})    

const{custName, email,item, price, registrationDate}=customer

const onInputChange=(e)=>{

    setCustomer({...customer,[e.target.name] : e.target.value})

};


   

const onSubmit=async (e)=>{
e.preventDefault();
await axios.post("http://localhost:8080/customer", customer)
navigate("/")

}

    return(

        <div className="container">
            
            <div className="row">
                <div className="col-md6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">Register Customer Details</h2>
                    
                    <form onSubmit={(e)=>onSubmit(e)}> 
                    <div className="mb-3">
                        <label htmlfor="Name" className="form-label">
                          
                        </label>
                        <input
                        type={"text"}
                        className="form-control"
                        placeholder="Enter Customer Name"
                        name="custName"
                        value={custName}
                        onChange={(e)=>onInputChange(e)}
                        >
                         
                        </input>
                    </div>

                    <div className="mb-3">
                        <label htmlfor="Email" className="form-label">
                            
                        </label>
                        <input
                        type={"text"}
                        className="form-control"
                        placeholder="Enter e-mail address"
                        name="email"
                        value={email}
                        onChange={(e)=>onInputChange(e)}
                        />
                         
                        
                    </div>
                    <div className="mb-3">
                        <label htmlfor="item" className="form-label">
                        
                        </label>
                        <input
                        type={"text"}
                        className="form-control"
                        placeholder="Enter Cloth Item"
                        name="item"
                        value={item}
                        onChange={(e)=>onInputChange(e)}
                        />
                    </div>
                   
                    <div className="mb-3">
                        <label htmlfor="Price" className="form-label">
                           
                        </label>
                        <input
                        type={"text"}
                        className="form-control"
                        placeholder="Enter Price"
                        name="price"
                        value={price}
                        onChange={(e)=>onInputChange(e)}
                        />
                         
                        
                    </div> Date

                    
                  
                    <div className="mb-3">
                    <label htmlfor="Order Date" className="form-label">
                           
                           </label>
                           <input
                           type={"datetime-local"}
                           className="form-control"
                           placeholder="Date"
                           name="registrationDate"
                           value={registrationDate}
                           onChange={(e)=>onInputChange(e)}
                           />
                            
                           
    </div>
                        
                    <button type="submit" className="btn btn-outline-primary">
                        Submit
                    </button>

                    <Link className="btn btn-outline-danger mx-2" to="/">
                        Cancel
                    </Link>
                    
                  </form>  
                </div>
            </div>

        </div>

    )

}