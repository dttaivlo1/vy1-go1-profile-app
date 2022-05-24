import React, { Component } from 'react';
import './news.css';

export default function News() {
  return (
    <div className="right-box">
    <div id="content" class="col">
      <h4>Bản tin</h4>
				<header>
					<nav>
					<ul>
						<li><a href="./../Account">Thông tin tài khoản</a></li>
						<li><a href="./../Password">Mật khẩu và bảo mật</a></li>
						<li><a href="./../News">Bản tin và tin khuyến mãi</a></li>
					</ul>
				</nav>
				</header>
        <br></br>
        <h9>Quản lý đăng ký bản tin</h9>
        <div>Chọn loại nội dung bạn muốn nhận</div>
        <div className="course-2">
          <div className="course-preview-2">
            <div>Traveloka - Tin Khuyến Mãi</div>
            </div>
            <div id="wrapper-3">
              <input type="checkbox" className="switch-toggle"/>
         </div> 
         </div>  
         </div> 
         </div>
  )
}