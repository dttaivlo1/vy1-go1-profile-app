import React, { Component } from 'react'
import './style/style.css';
const chuyendi = (e) =>{
 var a = document.getElementsByClassName('list-group-item list-group-item-action');
 console.log(a);
}
export default class leftbar extends Component {
  render() {
    return (
        
              <div className="box-left">
                <div className="container">
                  <div className="row">
                    <div className="col" >
                    <img class="adg-u-circle" src="https://api-private.atlassian.com/users/557058:edb08926-64d3-41b2-b733-59276a71c01f/avatar?initials=public" alt="Deleted user" width="15%"></img>
                    <h8 className="text-muted" id="div-name">Phạm Minh Khôi</h8>
                    <div className="list-group">
                      <a href="reward" className="list-group-item list-group-item-action active" id="item-point" onClick={chuyendi}><img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/5/5aee8aca6897d279a7cb105f7e167754.svg" />Điểm thưởng của tôi</a>
                      <a href="my-card" className="list-group-item list-group-item-action"id = "item-card" onClick={chuyendi}><img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/4/468b3a08ab94b440b4e09fb9130eee1e.svg"></img>Thẻ của tôi</a>
                      <br/>
                      <a href="my-booking" className="list-group-item list-group-item-action disabled"><img src="https://d1785e74lyxkqq.cloudfront.net/godwit/lib/_/_/node_modules/@traveloka/icon-kit-web/svg/blue/ic_user_booking_24px-e122f4f56ce1573ccc85faa381a35fc3.svg"></img>Đặt chỗ của tôi</a>
                      <a href="history" className="list-group-item list-group-item-action disabled" id="history-title"><img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/0/0965a06a63e873adb97d5ed7d7b92dbe.svg"></img>Danh sách giao dịch</a>
                      <a href="ticket-alert" className="list-group-item list-group-item-action disabled"><img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/7/70100d4a2047ac955124953dbc3351db.svg"></img>Thông báo giá vé</a>
                      <a href="my-info" className="list-group-item list-group-item-action disabled"><img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/1/18255ae77e4065bc95bc40cc28d4bbb3.svg"></img>Danh sách hành khách</a>
                      <br/>
                      <a href="/account" className="list-group-item list-group-item-action "><img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/f/f527ad371655ee5740f8b755d392823f.svg"></img>Tài khoản</a>
                      <a href="/login" className="list-group-item list-group-item-action "><img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/6/6464840154eb190d10525ea67e77648a.svg"></img>Đăng nhập</a>
                      </div>
</div>
</div>
</div>
      </div>
     
      
    


   

    
    )
  }
}
