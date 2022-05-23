
import React, { Component } from 'react'
import $ from 'jquery';
import './style.css'
import { useState } from 'react'
import PropTypes from 'prop-types';

/*dialog import */
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Dialog from "@material-ui/core/Dialog";
import { useSearchParams } from 'react-router-dom';
/* 
const params = useParams();
if(params === "")
*/
const serviceUrlMapping = {
  voucher: 'https://vy1-go1-profile-app-s3cic.ondigitalocean.app'
}

function Authentication({ setToken }) {

    const [login, showSignin] = useState("form-wrapper  is-active");
    const [signup, showSignup] = useState("");
    const [username, setUserName] = useState("");
    const [password, setPW] = useState("");
    /* signup*/
    const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [phone, setPhone] = useState("");
   const [password_re, setRePass] = useState("");

   const s = useSearchParams()
   const handleOnSignUp = async (e) => {
      if (password === password_re)
      {
         e.preventDefault();
         let result = await fetch(
         'https://be-profile-app.herokuapp.com/api/auth/signup', {
            method: "post",
            body: JSON.stringify({ username, name, email, password }),
            headers: {
               'Content-Type': 'application/json',
               'Access-Control-Allow-Origin': '*'
            }
         })
      
       result = await result.json();
       console.log(JSON.stringify({ username, name, email, password }));
       console.log(result);
       if (result) {
           alert("Data saved succesfully");
           setEmail("");
           setName("");
           setPhone("");
           setPW("");
       }
      }
      else{
         alert("nhập lại mật khẩu")
      }
    }
    /*dialog toggle*/
    const [open, setOpen] = React.useState(false);
  
    const handleClickToOpen = () => {
      setOpen(true);
    };
    
    const handleToClose = () => {
      setOpen(false);
    };

    const handleOnSubmit = async (e) => {
      console.log(username, password)
      e.preventDefault();
      try{
         let result = await fetch(
            'https://be-profile-app.herokuapp.com/api/auth/signin', {
               method: "post",
               body: JSON.stringify({ username, password }),
               headers: {
                  'Content-Type': 'application/json'
               },
            })         
          result = await result.json();
          setToken(result.username);
          localStorage.setItem('token', result.accessToken)
          localStorage.setItem('username', result.username)
          
          console.log(result.accessToken);       
          const textFromStorage = localStorage.getItem('token');   
          console.log(textFromStorage);
          const url= serviceUrlMapping[s.se]
          // TODO: redirect url
      }
      
      catch(err) {  
         console.log(err);
         handleClickToOpen();
      }
    }
    return (
        <div >          
             <section className="forms-section">
          <h1 className="section-title">Chào mừng bạn đến với Traveloka*</h1>
          <div className="forms">
            <div className={login}>
              <button type="button" className="switcher switcher-login" onClick={()=>{showSignin("form-wrapper  is-active"); showSignup("form-wrapper")}}>
                Đăng nhập
                
              </button>
              <form className="form form-login">
                <fieldset>
                  <legend>Vui lòng điền thông tin.</legend>
                  <div className="input-block">
                    <label htmlFor="login-email">Tên đăng nhập</label>
                    <input id="login-email" type="username"value={username} onChange={(e) => setUserName(e.target.value)} required />
                  </div>
                  <div className="input-block">
                    <label htmlFor="login-password">Password</label>
                    <input id="login-password" placeholder="Mật khẩu" type="password"value={password} onChange={(e) => setPW(e.target.value)} required />
                  </div>
                </fieldset>
                <button type="submit" className="btn-login"onClick={handleOnSubmit}>Đăng nhập</button>
              </form>
            </div>
            <div className= {signup}>
              <button type="button" className="switcher switcher-signup" 
              onClick={()=>{showSignin("form-wrapper"); showSignup("form-wrapper is-active")}}>
                Đăng kí
                
              </button>
              <form className="form form-signup">
                <fieldset>
                  <legend>Please, enter your email, password and password confirmation for sign up.</legend>
                  <div className="input-block">
                    <label htmlFor="signup-name">Họ Tên</label>
                    <input id="signup-email" type="text" value={name} onChange={(e) => setName(e.target.value)}required />
                  </div>
                  <div className="input-block">
                    <label htmlFor="signup-username">Username</label>
                    <input id="signup-email" type="text"value={username} onChange={(e) => setUserName(e.target.value)} required />
                  </div>
                  <div className="input-block">
                    <label htmlFor="signup-email">E-mail</label>
                    <input id="signup-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)}required />
                  </div>
                  <div className="input-block">
                    <label htmlFor="signup-phone">Số điện thoại</label>
                    <input id="signup-email" type="text" required />
                  </div>
                  <div className="input-block">
                    <label htmlFor="signup-password">Mật khẩu</label>
                    <input id="signup-password" type="password" value={password} onChange={(e) => setPW(e.target.value)}required />
                  </div>
                  <div className="input-block">
                    <label htmlFor="signup-password">Nhập lại mật khẩu</label>
                    <input id="signup-password" type="password" value={password_re} onChange={(e) => setRePass(e.target.value)}required />
                  </div>
                </fieldset>
                <button type="submit" className="btn-signup" onClick={handleOnSignUp}>Đăng kí</button>
              </form>
            </div>
          </div>
        </section>
        <Dialog open={open} onClose={handleToClose}>
        <DialogTitle>{"Lỗi đăng nhập"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Có lỗi từ phía máy chủ, vui lòng thử lại sau
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <button onClick={handleToClose} 
                  color="primary" autoFocus>
            Close
          </button>
        </DialogActions>
      </Dialog>
        </div>
      )
}

export default Authentication;
Authentication.propTypes = {
  setToken: PropTypes.func.isRequired
}
