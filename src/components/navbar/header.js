import React, {Component} from 'react';
import { useSelector } from 'react-redux';

const Header = () => {
 // const {username} = useSelector((state) => state.user);
 const Logout = () => {
   
  //localStorage.clear();
 }
        return (
          <div>
          <nav className="navbar navbar-expand-md bg-inverse fixed-top scrolling-navbar menu-bg">
            <div className="container">
            <a classname="navbar-brand" href="/" ><img src="img/logo.svg" alt="" /></a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <i className="lni-menu" />
              </button>
              <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="navbar-nav mr-auto w-100 justify-content-end">
                  <li className="nav-item">
                    <a className="nav-link page-scroll" href="./../History">Tải ứng dụng</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link page-scroll" href="./../History">Hợp tác với chúng tôi</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link page-scroll" href="./../History">Đặt chỗ của tôi</a>
                  </li>
                  
                  
                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                      Hồ sơ
                    </a>
                    <div class="dropdown-menu">
                      <a class="dropdown-item" href="#"><img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/5/57c03b6d35b76670f2d701310cc18b26.svg"/>Chỉnh sửa hồ sơ</a>
                      <a class="dropdown-item" href="#"><img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/5/57c03b6d35b76670f2d701310cc18b26.svg"/>Điểm thưởng của tôi</a>
                      <a class="dropdown-item" href="#"><img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/5/57c03b6d35b76670f2d701310cc18b26.svg"/>Thẻ của tôi</a>
                      <a class="dropdown-item" href="#"><img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/5/57c03b6d35b76670f2d701310cc18b26.svg"/>Danh sách giao dịch</a>
                      <a class="dropdown-item" href="#"><img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/5/57c03b6d35b76670f2d701310cc18b26.svg"/>Đặt chỗ</a>
                      <a class="dropdown-item" href="#"><img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/5/57c03b6d35b76670f2d701310cc18b26.svg"/>Khuyến mãi</a>
                      <a class="dropdown-item" href="#" onclick={Logout()}><img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/5/57c03b6d35b76670f2d701310cc18b26.svg"/>Đăng xuất</a>

                    </div>
                  </li>
                  
                </ul>
              </div>
            </div>
          </nav> 
        </div>
        );
    }

export default Header;