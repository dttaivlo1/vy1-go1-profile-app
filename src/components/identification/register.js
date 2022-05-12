import React, { Component } from 'react';
import './style.css';
import {useState} from 'react';

function Register() {
   
   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [phone, setPhone] = useState("");
   const [password, setPass] = useState("");
   const [password_re, setRePass] = useState("");
   const handleOnSubmit = async (e) => {
      if (password === password_re)
      {
         e.preventDefault();
         let result = await fetch(
         'http://localhost:5000/register', {
            method: "post",
            body: JSON.stringify({ name, email, phone, password }),
            headers: {
               'Content-Type': 'application/json'
            }
         })
      
       result = await result.json();
       console.warn(result);
       if (result) {
           alert("Data saved succesfully");
           setEmail("");
           setName("");
           setPhone("");
           setPass("");
       }
      }
      else{
         alert("nhập lại mật khẩu")
      }
   }
       
        return (
            <div>
                <div className="card bg-light">
   <article className="card-body mx-auto" >
      <h4 className="card-title mt-3 text-center">Create Account</h4>
      <p className="text-center">Get started with your free account</p>
     
      <p className="divider-text">
         <span className="bg-light">OR</span>
      </p>
      <form>
         <div className="form-group input-group">
            <div className="input-group-prepend">
               <span className="input-group-text"> <i className="fa fa-user"></i> </span>
            </div>
            <input name="" className="form-control" placeholder="Họ Tên" type="text" value={name} onChange={(e) => setName(e.target.value)}/>
         </div>
      
         <div className="form-group input-group">
            <div className="input-group-prepend">
               <span className="input-group-text"> <i className="fa fa-envelope"></i> </span>
            </div>
            <input name="" className="form-control" placeholder="Đỉa chỉ Mail"  value={email} onChange={(e) => setEmail(e.target.value)} />
         </div>
       
         <div className="form-group input-group">
            <div className="input-group-prepend">
               <span className="input-group-text"> <i className="fa fa-phone"></i> </span>
            </div>
                
            <input name="" className="form-control" placeholder="SDT"  value={phone} onChange={(e) => setPhone(e.target.value)} />
         </div>
        
         <div className="form-group input-group">
            <div className="input-group-prepend">
               <span className="input-group-text"> <i className="fa fa-lock"></i> </span>
            </div>
            <input className="form-control" placeholder="Create password" type="password" value={password} onChange={(e) => setPass(e.target.value)}/>
         </div>
     
         <div className="form-group input-group">
            <div className="input-group-prepend">
               <span className="input-group-text"> <i className="fa fa-lock"></i> </span>
            </div>
            <input className="form-control" placeholder="Repeat password" type="password" value={password_re} onChange={(e) => setRePass(e.target.value)}/>
         </div>
                               
         <div className="form-group">
            <button type="submit" className="btn btn-primary btn-block" onClick={handleOnSubmit}> Create Account  </button>
         </div>
       
         <p className="text-center">Have an account? <a href="/login">Log In</a> </p>
      </form>
   </article>
</div>
            </div>
        );
    }


export default Register;
