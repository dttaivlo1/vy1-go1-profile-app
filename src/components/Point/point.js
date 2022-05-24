import React, { Component, useState } from 'react';
import './point.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Point() {
   
      const [username, setUserName] = useState("");
      const [point, setPoint] = useState(localStorage.getItem('point'));
      const handleOnSubmit = async (e) => {
        
        e.preventDefault();
        try{
          setUserName(localStorage.getItem("username"));
          console.log(username);
           let result = await fetch(
              'http://localhost:8080/api/test/getPoint', {
                 method: "post",
                 body: JSON.stringify({username}),
                 headers: {
                    'Content-Type': 'application/json'
                 },
              })         
            result = await result.json();
           
            localStorage.setItem('token', result.accessToken)
            setPoint(result);
            console.log(result);       
           
         
            
            // TODO: redirect url
        }
        
        catch(err) {  
           console.log(err);
           
        }
      }
      handleOnSubmit()
        return (
            <div>
                 <div className="courses-container">
        <div className="course">
          <div className="course-preview">
            <h10>Điểm khả dụng</h10>
            <h2>{point}  point</h2>
            <a href="#">1 điểm = 1,000.00 VND <i className="fas fa-chevron-right" /></a>
          </div>
          <div className="course-info">
            
            <h6>Tiến trình tích điểm</h6>
            <button className="btn"><FontAwesomeIcon icon="fa-solid fa-arrow-right" /></button>
          </div>
        </div>
      </div>
            </div>
        );
    }

export default Point;
