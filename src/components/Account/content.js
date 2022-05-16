import React, { Component } from 'react'
import './content.css'

export default class content extends Component {
  render() {
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
         <div class="form-group">
            <label>Tên đầy đủ</label>
            <input class="form-control" placeholder="Phạm Minh Khôi" type="name"/>
         </div>
         <div class="form-group">
            <label>Thành phố bạn đang ở</label>
            <input class="form-control" placeholder="Thành phố bạn đang ở" type="password"/>
         </div>    
				 Giới tính <br></br>
		<select class="sex">
			<option value="sex"> </option>
			<option value="sex">Nam</option>
			<option value="sex">Nữ</option>
		</select>
		<br></br>
		Ngày sinh 
		<br></br>
		<select class="day">
			<option value="day"> </option>
			<option value="day">1</option>
			<option value="day">2</option>
			<option value="day">3</option>
			<option value="day">4</option>
			<option value="day">5</option>
			<option value="day">6</option>
			<option value="day">7</option>
			<option value="day">8</option>
			<option value="day">9</option>
			<option value="day">11</option>
			<option value="day">12</option>
			<option value="day">13</option>
			<option value="day">14</option>
			<option value="day">15</option>
			<option value="day">16</option>
			<option value="day">17</option>
			<option value="day">18</option>
			<option value="day">19</option>
			<option value="day">20</option>
			<option value="day">21</option>
			<option value="day">22</option>
			<option value="day">23</option>
			<option value="day">24</option>
			<option value="day">25</option>
			<option value="day">26</option>
			<option value="day">27</option>
			<option value="day">28</option>
			<option value="day">29</option>
			<option value="day">30</option>
			<option value="day">31</option>v
	
		</select>
	 
		<select name="month">
		<option value="day"> </option>
		<option value="day">Tháng 1</option>
		<option value="day">Tháng 2</option>
		<option value="day">Tháng 3</option>
		<option value="day">Tháng 4</option>
		<option value="day">Tháng 5</option>
		<option value="day">Tháng 6</option>
		<option value="day">Tháng 7</option>
		<option value="day">Tháng 8</option>
		<option value="day">Tháng 9</option>
		<option value="day">Tháng 10</option>
		<option value="day">Tháng 11</option>
		<option value="day">Tháng 12</option>
		</select>
	
		<select name="years">
		<option value="year"> </option>
		<option value="year">2022</option>
		<option value="year">2021</option>
		<option value="year">2020</option>
		<option value="year">2019</option>
		<option value="year">2018</option>
		<option value="year">2017</option>
		<option value="year">2016</option>
		<option value="year">2015</option>
		<option value="year">2014</option>
		<option value="year">2013</option>
		<option value="year">2012</option>
		<option value="year">2011</option>
		</select>
		</form>
		<br></br>
		<div> 
            <button type="submit" class="btn btn-primary" id="btn1"> Save </button>
            <button type="submit" class="btn btn-primary" id="btn2"> Cancel </button>
         </div>
			</div>
	
	)
  }
}
