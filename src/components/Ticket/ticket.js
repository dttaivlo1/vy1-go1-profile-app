import React, { Component } from 'react';
import './ticket.css';

class Ticket extends Component {
    render() {
        return (
            <div className="right-box">
            <div>
            <div className="banner">
            <img src="https://ik.imagekit.io/tvlk/image/imageResource/2019/02/11/1549862570294-0bd43afb15a66986be63505ec4e5afe7.svg?tr=q-75" alt=""/>
            </div>
            <div className="row">
                <div className="column col-60">
                    <h8>Thông báo giá vé máy bay</h8>
                </div>
                <div className="column col-40">
                    <a href="#" id="notification"><img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/7/70100d4a2047ac955124953dbc3351db.svg"></img>Thêm thông báo</a>
                </div>
               
            </div>
            <br></br>
            <div className="row">
                <div className="column col-60">
                    <h1>Bạn có muốn nhận thông báo trên máy tính?</h1>
                </div>
                <div className="column col-40">
                    <a href="#" id="allow">Cho phép gửi thông báo</a>
                </div>
                </div>
                <br></br>
                <div className="row">
                <div className="column col-30">
                    <img src="https://ik.imagekit.io/tvlk/image/imageResource/2018/12/12/1544601935390-f9c8c05797a24b0d2984266125ae209d.png?tr=q-75"></img>
                </div>
                <div className="column col-40">
                    <br></br>
                    <br></br>
                    <br></br>
                    <h7>Không tìm thấy thông báo</h7>
                    <h5>Tạo thông báo cập nhật mới nhất khi có!</h5>
                </div>
                </div>
            </div>   
            </div> 
                
        );
    }
}
export default Ticket;
