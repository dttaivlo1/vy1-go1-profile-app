
import React, { Component, useState } from 'react';
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
import Ticket from './components/Ticket/ticket.js';
import Point from './components/Point/point.js';

//đăng nhập đăng kí
import Register from './components/identification/register.js';
import Login from './components/identification/login.js';
import Authentication from './components/Authentication/login.jsx';
import './App.css';

function App(){
 
    const [token, setToken] = useState();
    if(!token) {
      return <Authentication setToken={setToken} />
    }
    else
    console.log(token, "dawdawd");
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
             <Route exact path="/partner/home" element ={<PartnerOverview/>}/>
        </Routes>
        </div>
        </div>
        <Footer/>
      </div>
     );
     
  }


export default App;