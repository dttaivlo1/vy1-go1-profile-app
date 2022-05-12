import React, { Component } from 'react'
import './style/style.css';
const chuyendi = (e) =>{
 var a = document.getElementsByClassName('list-group-item list-group-item-action');
 console.log(a);
}
const leftbar = (props) =>{
  
    return (
        
              <div className="box-left">
                <div className="container">
                  <div className="row">
                    <div className="col" >
                       <h6 className="text-muted" id="div-name">{props.user}</h6> 
                    <div className="list-group">
                      <a href="reward" className="list-group-item list-group-item-action active" id="item-point" onClick={chuyendi}><img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/5/5aee8aca6897d279a7cb105f7e167754.svg" />Điểm thưởng của tôi</a>
                      <a href="my-card" className="list-group-item list-group-item-action"id = "item-card">Thẻ của tôi</a>
                      <br/>
                      <a href="my-booking" className="list-group-item list-group-item-action disabled">Đặt chỗ của tôi</a>
                      <a href="history" className="list-group-item list-group-item-action disabled" id="history-title">Danh sách giao dịch</a>
                      <a href="ticket-alert" className="list-group-item list-group-item-action disabled">Thông báo giá vé</a>
                      <a href="my-info" className="list-group-item list-group-item-action disabled">Danh sách hành khách</a>
                      <br/>
                      <a href="/account" className="list-group-item list-group-item-action ">Tài khoản</a>
                      <a href="/login" className="list-group-item list-group-item-action ">Đăng nhập</a>
                      </div>
</div>
</div>
</div>
      </div>

    )
  }
export default leftbar

