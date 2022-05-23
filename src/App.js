
import React, { Component, useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/navbar/header.js';
import Footer from './components/navbar/footer.js';
import Account from './components/Account/content.js';
import Giftvoucher from './components/giftvoucher/voucher.js';
import  History  from './components/History/history.js';
import Home from './components/Home/home.js';
import PartnerOverview from './components/partner-page/Home.js';
import Leftbar from './components/navbar/leftbar';
import Booking from './components/booking/booking.js';
import Info from './components/Info/info.js';
import Ticket from './components/Ticket/ticket.js';
import Point from './components/Point/point.js';
import Password from './components/Password/password.js';
import News from './components/News/news.js';

//đăng nhập đăng kí
import Register from './components/identification/register.js';
import Login from './components/identification/login.js';
import Authentication from './components/Authentication/login.jsx';
import './App.css';

function App(){
  const [UserName, setUser] = useState("");
  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
    }
  }, []);
  const tokenAccess = localStorage.getItem('token'); 
    const result = () => {
      return fetch(
      'http://localhost:8080/api/auth/verifyAccessToken', {
          method: "post",
          body: JSON.stringify({tokenAccess}),
          headers: {
            'Content-Type': 'application/json'
          },
      }).then((response) => response.json())
        .then(data => console.log(data.message))
        .then(data => localStorage.setItem('status',data.message))
        .catch ((error) => console.error(error));       
    // result = await result.json();
    // setToken(result.username);
    // localStorage.setItem('token', result.accessToken)
    // console.log(result.accessToken);       
    // const textFromStorage = localStorage.getItem('token');   
    // console.log(textFromStorage);
  }
  result();
    const [token, setToken] = useState(localStorage.getItem("token"));
    const status= localStorage.getItem('status')
    if(!token) {
      console.log(status)
      return <Authentication setToken={setToken} />
    }
    else
    console.log(token, "Dang nhap thanh cong", status);
      return (
      <div>
        <Header/>
        <div className="section-box-main">
        <Leftbar user={token}/>
        <div className="box-right">
        <Routes>
            <Route exact path="/home" element ={<Home/>}/>
             <Route exact path="/account" element= {<Account/>}/>
             <Route path="/login" element = {<Login/>}/>
             <Route path="/register" element = {<Register/>}/>
             <Route path="/reward" element = {<Point/>}/>
             <Route path="/voucher" element = {<Giftvoucher/>}/>
             <Route path="/history" element = {<History/>}/>
             <Route path="/my-booking" element = {<Booking/>}/>
             <Route path="/ticket-alert" element = {<Ticket/>}/>
             <Route path="/my-info" element = {<Info/>}/>
             <Route exact path="/partner/home" element ={<PartnerOverview/>}/>
             <Route path="/password" element = {<Password/>}/>
             <Route path="/news" element = {<News/>}/>
        </Routes>
        </div>
        </div>
        <Footer/>
      </div>
     );
     
  }


export default App;
