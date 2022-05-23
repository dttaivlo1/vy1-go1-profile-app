import React, { Component } from 'react';
import './password.css';

export default class password extends Component {
  render() {
  return (
    <div id="content" class="col">
      <h3>Settings</h3>
				<header>
					<nav>
					<ul>
						<li><a href="./../Account">Thông tin tài khoản</a></li>
						<li><a href="./../Password">Mật khẩu và bảo mật</a></li>
						<li><a href="./../News">Bản tin và tin khuyến mãi</a></li>
					</ul>
				</nav>
				</header>
        <form>
        <div className="form-row">
          <div className="col-md-4 mb-3">
            <label htmlFor="validationDefault01">Mật khẩu mới</label>
            <input type="password" className="form-control" id="validationDefault01" placeholder=""  required />
          </div>
          <div className="col-md-4 mb-3">
            <label htmlFor="validationDefault01">Nhập lại mật khẩu mới</label>
            <input type="password" className="form-control" id="validationDefault01" placeholder=""  required />
          </div>
          <div className="col-md-4 mb-3">
          <label htmlFor="validationDefault01">Nhập lại mật khẩu mới</label>
          <button type="submit" class="btn btn-primary"style={{width: "130px", margin: "auto"}} id="btn1"> Save </button>
          </div>
          
        </div>
        </form>
        <br></br>
        <h9>Xác thực</h9>
        <div className="course-2">
          <div className="course-preview-2">
            <div>Gửi mã OTP khi đăng nhập</div>
            <div>Gửi mã xác thực mới khi tài khoản của tôi được đăng nhập trên thiết bị mới</div>
            </div>
            <div id="wrapper-2">
              <input type="checkbox" className="switch-toggle"/>
         </div> 
         </div>  
         </div> 
  )
  }
}