import React, { Component } from 'react';

class Booking extends Component {
    render() {
        return (
            <div id="content" class="col">
            <h2 class="title">Đặt chỗ của tôi</h2>
            <div class="table-responsive">
                <table class="table table-bordered table-hover">
                    <thead>
                        <tr>
                            <td class="text-center">Dịch vụ</td>
                            <td class="text-left">Sản phẩm</td>
                            <td class="text-center">Mã giao dịch</td>
                            <td class="text-center">Trạng Thái</td>
                            <td class="text-center">Ngày</td>
                           
               
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="text-center">
                            Khách sạn    
                            </td>
                            <td class="text-left"><a href="#">Xitefun Causal Wear Fancy Shoes</a>
                            </td>
                            <td class="text-center">#1565245</td>
                            <td class="text-center">Đã nhận phòng</td>
                            <td class="text-center">20/06/2016</td>
                          
                        </tr>
                        <tr>
                            <td class="text-center">
                             Du Lịch   
                            </td>
                            <td class="text-left"><a href="#">Xitefun Causal Wear Fancy Shoes</a>
                            </td>
                            <td class="text-center">#1565245</td>
                            <td class="text-center">Chờ nhận phòng</td>
                            <td class="text-center">20/06/2022</td>
                            
                        </tr>
                        <tr>
                            <td class="text-center">
                                Đưa đón sân bay
                            </td>
                            <td class="text-left"><a href="#">Xitefun Causal Wear Fancy Shoes</a>
                            </td>
                            <td class="text-center">#1565245</td>
                            <td class="text-center">Đã huỷ</td>
                            <td class="text-center">20/06/2016</td>
                            
                        </tr>
                    </tbody>
                </table>
            </div>
    
        </div>
        );
    }
}

export default Booking;
