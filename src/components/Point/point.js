import React, { Component } from 'react';
import './point.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Point extends Component {
    render() {
        return (
            <div>
                 <div className="courses-container">
        <div className="course">
          <div className="course-preview">
            <h6>Điểm khả dụng</h6>
            <h2>0 (VND)</h2>
            <a href="#">View all chapters <i className="fas fa-chevron-right" /></a>
          </div>
          <div className="course-info">
            <div className="progress-container">
              Chi tiết
            </div>
            <h6>Tiến trình tích điểm</h6>
            <button className="btn"><FontAwesomeIcon icon="fa-solid fa-arrow-right" /></button>
          </div>
        </div>
      </div>
            </div>
        );
    }
}

export default Point;
