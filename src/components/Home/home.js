import React, { Component } from 'react';
import { initializeApp } from "firebase/app";
import "./home.css";

const firebaseConfig = {
    apiKey: "AIzaSyCmFTrmPl0o93krTEeeuQLKiLARZmYUKYE",
    authDomain: "vy1-g01.firebaseapp.com",
    databaseURL: "https://vy1-g01-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "vy1-g01",
    storageBucket: "vy1-g01.appspot.com",
    messagingSenderId: "652851167349",
    appId: "1:652851167349:web:5f1da3f7de872a9334783c"
  };
  function a(){
    
    (".list-group-item").click(function() {
          
        // Select all list items
     let   listItems = (".list-group-item");
          
        // Remove 'active' tag for all list items
        for (let i = 0; i < listItems.length; i++) {
            listItems[i].classList.remove("active");
        }
          
        // Add 'active' tag for currently selected item
        this.classList.add("active");
    });

  }
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
class SectionContact extends Component {
    render() {
        return ( 
           <div></div>
            
        );
    }
}

export default SectionContact;