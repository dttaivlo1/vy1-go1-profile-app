import React, { Component } from 'react';
import jwt from 'jwt-decode';
import './style.css';

import { useState } from 'react'
function Login() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const handleOnSubmit = async (e) => {
      console.log(name, email)
      e.preventDefault();
      try{
         let result = await fetch(
            'http://localhost:8080/api/auth/signin', {
               method: "post",
               body: JSON.stringify({ name, email }),
               headers: {
                  'Content-Type': 'application/json'
               },
            })
         
          result = await result.json();
          alert("Đăng nhập thành công");
          
      }
      catch(err) {
         console.error(err);
      }
    }

        return (
            <div>
                   
<div class="card">
   <article class="card-body">
      <a href="/register" class="float-right btn btn-outline-primary">Sign up</a>
      <h4 class="card-title mb-4 mt-1">Sign in</h4>
      <form>
         <div class="form-group">
            <label>Your email</label>
            <input  class="form-control" placeholder="Email" type="email" value={name} onChange={(e) => setName(e.target.value)}/>
         </div>
  
         <div class="form-group">
            <a class="float-right" href="#">Forgot?</a>
            <label>Your password</label>
            <input class="form-control" placeholder="******" type="password" value={email} onChange={(e) => setEmail(e.target.value)}/>
         </div>
       
         <div class="form-group">
            <div class="checkbox">
               <label> <input type="checkbox"/> Save password </label>
            </div>
            
         </div>
       
         <div class="form-group">
            <button type="submit" class="btn btn-primary btn-block" onClick={handleOnSubmit}> Login  </button>
         </div>
                                                       
      </form>
   </article>
</div>
            </div>
        );
    
   }


export default Login;
