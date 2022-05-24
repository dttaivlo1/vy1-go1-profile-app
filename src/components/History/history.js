import React, { Component, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import Leftbar from './../navbar/leftbar'
//import './history.css'

function History() {
  const [history, setHistory] = useState();
  const handleOnSubmit = async (e) => {
   
    e.preventDefault();
    try{
     console.log("dădwad");
       let result = await fetch(
          'https://be-profile-app.herokuapp.com/api/transaction/getHistory', {
            method: "get",
            headers: {
               'Content-Type': 'application/json'
            },
    })         
    result = await result.json();
       console.log(result.trans)
      
       

       setHistory(result.trans);

      
      
        // TODO: redirect url
    }
    
    catch(err) {  
       console.log(err);
      
    }
  }
  const cellStyle = (params) => {
    const color = 'red';
    return {
     Color: color,
     FontWeight: 'bold'
    };
  };
    const [rowData] = useState(history);
    
      const [columnDefs] = useState([
       
        { field: 'AppID', width:'100px' },
        { field: 'ServiceID', width:'100px'},
        { field: 'totalBill', width:'100px', cellStyle:cellStyle },
        { field: 'date' , width:'200px'},
        {field: 'status', width:'150px'}
       
      ]);
    return (
      
        <div id="content" class="col">
        <h2 class="title">Lịch sử giao dịch</h2> <button onClick={handleOnSubmit} className="btn btn-primary">Cập nhật</button>
        <div className="ag-theme-alpine" style={{ height: "700px", width:" auto" }}>
          
      <AgGridReact rowData={history} columnDefs={columnDefs}></AgGridReact>
    </div>
        

    </div>
    )
  }

export default History
