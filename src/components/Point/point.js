import React, { Component, useState } from 'react';
import './point.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Point() {
   
      const [username, setUserName] = useState("");
      const [point, setPoint] = useState("");
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
            <h6>Điểm khả dụng</h6>
            <h2>{point} (VND)</h2>
            <a href="#">View all chapters <i className="fas fa-chevron-right" /></a>
          </div>
          <div className="course-info">
            <div className="progress-container">
              <button type="submit" className="btn-login"onClick={handleOnSubmit}>Cập nhật điểm</button>
            </div>
            <h6>Tiến trình tích điểm</h6>
            <button className="btn"><FontAwesomeIcon icon="fa-solid fa-arrow-right" /></button>
          </div>
        </div>
      </div>
            </div>
        );
    }

export default Point;
