import React, { Component } from 'react'
import $ from 'jquery';
import jwt from 'jwt-decode';
import './style.css'
import { useState } from 'react'
import PropTypes from 'prop-types';

/*dialog import */
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Dialog from "@material-ui/core/Dialog";


function Authentication({ setToken }) {
    const [login, showSignin] = useState("form-wrapper  is-active");
    const [signup, showSignup] = useState("");
    const [username, setUserName] = useState("");
    const [password, setPW] = useState("");
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
          console.log(result.username);          
      }
      catch(err) {  
         console.log(err);
         handleClickToOpen();
      }
    }
    return (
        <div >          
             <section className="forms-section">
          <h1 className="section-title">CHào mừng bạn đến với Traveloka*</h1>
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
                <button type="submit" className="btn-login"onClick={handleOnSubmit}>Logưin</button>
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
                    <input id="signup-email" type="text" required />
                  </div>
                  <div className="input-block">
                    <label htmlFor="signup-username">Username</label>
                    <input id="signup-email" type="text" required />
                  </div>
                  <div className="input-block">
                    <label htmlFor="signup-email">E-mail</label>
                    <input id="signup-email" type="email" required />
                  </div>
                  <div className="input-block">
                    <label htmlFor="signup-phone">Số điện thoại</label>
                    <input id="signup-email" type="email" required />
                  </div>
                  <div className="input-block">
                    <label htmlFor="signup-password">Mật khẩu</label>
                    <input id="signup-password" type="password" required />
                  </div>
                </fieldset>
                <button type="submit" className="btn-signup">Đăng kí</button>
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
