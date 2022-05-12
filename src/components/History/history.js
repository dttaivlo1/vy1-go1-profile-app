import React, { Component } from 'react';
import Leftbar from './../navbar/leftbar'
//import './history.css'

 class history extends Component {
  render() {
    return (
      
        <div id="content" class="col">
        <h2 class="title">Lịch sử giao dịch</h2>
        <div class="table-responsive">
            <table class="table table-bordered table-hover">
                <thead>
                    <tr>
                        <td class="text-center">Dịch vụ</td>
                        <td class="text-left">Sản phẩm</td>
                        <td class="text-center">Mã giao dịch</td>
                        <td class="text-center">Trạng Thái</td>
                        <td class="text-center">Ngày</td>
                        <td class="text-right">Tổng tiền</td>
           
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
                        <td class="text-center">Shipped</td>
                        <td class="text-center">20/06/2016</td>
                        <td class="text-right">$133.20</td>  
                    </tr>
                    <tr>
                        <td class="text-center">
                         Du Lịch   
                        </td>
                        <td class="text-left"><a href="#">Xitefun Causal Wear Fancy Shoes</a>
                        </td>
                        <td class="text-center">#1565245</td>
                        <td class="text-center">Thành công</td>
                        <td class="text-center">20/06/2016</td>
                        <td class="text-right">$133.20</td>
                    </tr>
                    <tr>
                        <td class="text-center">
                            Đưa đón sân bay
                        </td>
                        <td class="text-left"><a href="#">Xitefun Causal Wear Fancy Shoes</a>
                        </td>
                        <td class="text-center">#1565245</td>
                        <td class="text-center">Thành công</td>
                        <td class="text-center">20/06/2016</td>
                        <td class="text-right">$133.20</td>
                    </tr>
                </tbody>
            </table>
        </div>

    </div>
    )
  }
}
export default history
