import { Link } from "react-router-dom";
import "/workspace/erpformelements/erp/src/pages/orders.css"
import React, { useState, useEffect } from 'react';
import db from "/workspace/erpformelements/erp/src/pages/db.js";
import { setDoc, doc, getDocs, collection } from "firebase/firestore";
import { uuidv4 } from "@firebase/util";

export default function Orders(){

  const [orders,setOrders]=useState([])
  const[id, setId] = useState()

  useEffect(() => {
    fetchDocs();
  }, [])

  const fetchDocs=async()=>{
    const data=await getDocs(collection(db, "PRODUCTS"));
    data.forEach((item)=>{
      // console.log(item.id ,'=>', item.data())
      setId(item.id)
      console.log(item.id)
      setOrders(orders => [...orders,item.data()])

    })
};
return (
  
  <tbody>
      <tr>
          <th>User Id</th>
          <th>Id</th>
          <th>Title</th>
          <th>Description</th>
      </tr>
      {orders.map((order) => (
          <tr key={id}>
              <td>{order.pend}</td>
              <td>{order.rate}</td>
          </tr>
      ))}
  </tbody>
  // <div>
  //       <Link to="/orderform">
  //           <button>Create orders </button>
  //           </Link>
  //       </div>

);
}
