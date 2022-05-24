import React, { Component, useState } from 'react'
import DatePicker from 'react-datepicker'
import './content.css'

function Content() {
	
	const [startDate, setStartDate] = useState(new Date());
  const [name, setname ] = useState(localStorage.getItem("name"));
  const [email, setEmail] = useState(localStorage.getItem("email"));
  const [phone, setphone] = useState(localStorage.getItem("phone"));
	return (
		
    
	  <div className="right-box">
			<h4>Tài khoản của bạn</h4>
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
            <label htmlFor="validationDefault01">Họ Tên</label>
            <input type="text" className="form-control" id="validationDefault01" placeholder="Nhập tên của bạn" defaultValue={name} required />
          </div>
          <div className="col-md-4 mb-3">
            <label htmlFor="validationDefault02">Email</label>
            <input type="text" className="form-control" id="validationDefault02" placeholder="Last name" defaultValue={email} required />
          </div>
        </div>
        <div className="form-row">
          <div className="col-md-4 mb-3">
            <label htmlFor="validationDefault01">Số điện thoại</label>
            <input type="text" className="form-control" id="validationDefault01" placeholder="Nhập số điện thoại của bạn" defaultValue={phone} required />
          </div>
          
        </div>
		<div class="form-row">
		<div className="col-md-4 mb-3">
		<label for="exampleFormControlSelect1">Giới tính</label>
    <select class="form-control" id="exampleFormControlSelect1" style={{width:'100px'}}>
      <option select="selected">Nam</option>
      <option>Nữ</option>
    </select>
		</div>
		<div className="col-md-4 mb-3">
            <label htmlFor="validationDefault02">Ngày sinh</label>
            <input type="text" className="form-control" id="validationDefault02" placeholder="Last name" defaultValue="12/12/1999" required />
          </div>
  </div>
        <div className="form-row">
          <div className="col-md-6 mb-3">
            <label htmlFor="validationDefault03">City</label>
            <input type="text" className="form-control" id="validationDefault03" placeholder="City" required />
          </div>
          <div className="col-md-3 mb-3">
            <label htmlFor="validationDefault04">State</label>
            <input type="text" className="form-control" id="validationDefault04" placeholder="State" required />
          </div>
        
        </div>
        
      </form>
		<br></br>
		<div> 
            <button type="submit" class="btn btn-primary" id="btn1"> Save </button>
            <button type="submit" class="btn btn-primary" id="btn2"> Cancel </button>
         </div>
			</div>
	
	)
  }
  export default Content;

