import React, { Component } from 'react';
import './info.css';
export default class Info extends Component {
  render() {
  return (
    <div id="content" class="col">
        <h5>Danh sách hành khách</h5>
        <h9>Bạn có thể lưu tối đa thông tin 20 hành khách</h9>
        <div className="course-2">
          <div className="course-preview-2">
            <img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/1/1fbe3fa1e69098ca8572ae084b26cfb8.svg"></img>
            <h10>1. Ông Phạm Minh Khôi </h10>
          </div>
          <a href="#" id="allow-2">Chỉnh sửa</a>
          <a href="#" id="allow-3">Xóa</a>
         </div>
         <div class="form-group">
            <button1 type="submit" class="btn btn-primary btn-block"> Thêm hành khách  </button1>
         </div>
    </div>
        )
  }
}
