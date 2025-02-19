import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditCustomer(){

    let navigate=useNavigate()

    const {id}=useParams()

const [customer, setCustomer] = useState({
    custName:"",
    email:"",
    item:"",
    price:"",
    registrationDate:""
})    


const{custName, email,item, price, registrationDate}=customer

const onInputChange=(e)=>{

    setCustomer({...customer,[e.target.name] : e.target.value});

}

useEffect(()=>{

    loadCustomer()
}, );

const onSubmit=async (e)=>{
e.preventDefault();
await axios.put(`http://localhost:8080/customer/${id}`, customer)
navigate("/")

};

const loadCustomer = async ()=>{

    const result = await axios.get(`http://localhost:8080/customer/${id}`)
    setCustomer(result.data)
}

    return(

        <div className="container">
            
            <div className="row">
                <div className="col-md6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">Edit Customer</h2>
                    
                    <form onSubmit={(e)=>onSubmit(e)}> 
                    <div className="mb-3">
                        <label htmlfor="Name" className="form-label">
                            Customer Name
                        </label>
                        <input
                        type={"text"}
                        className="form-control"
                        placeholder="Enter customer name"
                        name="custName"
                        value={custName}
                        onChange={(e)=>onInputChange(e)}
                        >
                         
                        </input>
                    </div>
                    <div className="mb-3">
                        <label htmlfor="Email" className="form-label">
                        Username
                        </label>
                        <input
                        type={"text"}
                        className="form-control"
                        placeholder="Enter Email"
                        name="email"
                        value={email}
                        onChange={(e)=>onInputChange(e)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlfor="Item" className="form-label">
                           Item
                        </label>
                        <input
                        type={"text"}
                        className="form-control"
                        placeholder="item"
                        name="item"
                        value={item}
                        onChange={(e)=>onInputChange(e)}
                        />
                         
                        
                    </div>
                    <div className="mb-3">
                        <label htmlfor="Price" className="form-label">
                           Item
                        </label>
                        <input
                        type={"text"}
                        className="form-control"
                        placeholder="price"
                        name="price"
                        value={price}
                        onChange={(e)=>onInputChange(e)}
                        />
                         
                        
                    </div>
                    <div className="mb-3">
                        <label htmlfor="RegistrationDate" className="form-label">
                        Order Date
                        </label>
                        <input
                        type={"text"}
                        className="form-control"
                        placeholder="Order Date"
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