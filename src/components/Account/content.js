import React, { Component, useState } from 'react'
import DatePicker from 'react-datepicker'
import './content.css'

function Content() {
	
	const [startDate, setStartDate] = useState(new Date());
	return (
		
	  <div className="right-box">
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
            <label htmlFor="validationDefault01">Họ Tên</label>
            <input type="text" className="form-control" id="validationDefault01" placeholder="Nhập tên của bạn" defaultValue="Dương Tấn Tài" required />
          </div>
          <div className="col-md-4 mb-3">
            <label htmlFor="validationDefault02">Tên  thường gọi</label>
            <input type="text" className="form-control" id="validationDefault02" placeholder="Last name" defaultValue="Otto" required />
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

