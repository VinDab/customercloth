import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import moment from "moment";
export default function Home() {

    const [customers, setCustomers]=useState([])
    const {id} = useParams()
    const [totalPrice, setTotalPrice] = useState();
    useEffect(() => {

        loadCustomers();
     },[]);

     const  loadCustomers=async()=>{

       const result = await axios.get("http://localhost:8080/customers");
        setCustomers(result.data);
        

     };

    

     const getTotalPrice= async()=>{
      const result = await axios.get("http://localhost:8080/customersGetCount");
      setTotalPrice(result.data);
     }
     const deleteCustomer=async(id)=>{
      

        await axios.delete(`http://localhost:8080/customer/${id}`)
        loadCustomers()
        getTotalPrice()
     }
        return (

        <div className='container'> 
            <div className='py-4'>

            <div><button className="btn btn-danger mx-2" onClick={()=>getTotalPrice()}>Calculate</button></div>
            <div className="btn btn-light mx-2">{totalPrice!=0 ? totalPrice :''}</div>
            <table className="table border shadow">

  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Customer Name</th>
      <th scope="col">Email</th>
      <th scope="col">Item</th>
      <th scope="col">Price  </th>
      <th scope="col">Order Date</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {
        customers.map((customer, index)=> (
            
        <tr>
            <th scope="row" key={index}>
                {index+1}</th>
            <td>{customer.custName}</td>
            <td>{customer.email}</td>
            <td>{customer.item}</td>
            <td>{customer.price}</td>
            <td>{moment (customer.registrationDate).format('DD/MM/YYYY hh:mm')}</td>
            
            <td>
                
                <Link className="btn btn-outline-primary mx-2" to={`/viewcustomer/${customer.id}`}>View</Link>
                <Link className="btn btn-outline-primary mx-2" to={`/editcustomer/${customer.id}`}>Edit</Link>
                <button className="btn btn-danger mx-2"
                
                onClick={()=>deleteCustomer(customer.id)}

                >Delete</button>
            </td>
        </tr>  

        ))
    }
    
    
  </tbody>
</table>

            </div>
        
        </div>
    )
    
}