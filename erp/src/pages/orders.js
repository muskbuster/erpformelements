import { Link } from "react-router-dom";
import "/workspace/erpformelements/erp/src/pages/orders.css"
import React, { useState, useEffect } from 'react';
import db from "/workspace/erpformelements/erp/src/pages/db.js";
import { setDoc, doc, getDocs, collection } from "firebase/firestore";
import { uuidv4 } from "@firebase/util";

export default function Orders(){

  const [orders,setOrders]=useState([])
  useEffect(() => {
    fetchDocs();
  }, [])

  const fetchDocs=async()=>{
    const data=await getDocs(collection(db, "PRODUCTS"));
    data.forEach((item)=>{
      setOrders([...orders,item.data()])
    })
};
return (
  <>
  <h1>How to display JSON data to table in React JS</h1>
  <tbody>
      <tr>
          <th>User Id</th>
          <th>Id</th>
          <th>Title</th>
          <th>Description</th>
      </tr>
      {orders.map((order, i) => (
          <tr key={i}>
              <td>{order.pend}</td>
              <td>{order.rate}</td>
          </tr>
      ))}
  </tbody>
  <div>
        <Link to="/orderform">
            <button>Create orders </button>
            </Link>
        </div>
</>
);
}
