import React, { Component,  useState, useMemo } from 'react';
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

function Booking() {


 
  const [arowData] =useState([
    { AppID: 'VY1-G05',ServiceID: 'CHUYẾN BAY', VoucherName: 'GIẢM GIÁ', Description: 'GIẢM 30% ', expirationDate: 'now' },
    { AppID: 'VY1-G02',ServiceID: 'CHUYẾN BAY', VoucherName: 'GIẢM GIÁ', Description: 'GIẢM 10% ', expirationDate: 'now' },

    { AppID: 'VY1-G05',ServiceID: 'KHÁCH SẠN', VoucherName: 'GIẢM GIÁ', Description: 'GIẢM 30% ', expirationDate: 'now' },
    { AppID: 'VY1-G02',ServiceID: 'KHÁCH SẠN', VoucherName: 'GIẢM GIÁ', Description: 'GIẢM 10% ', expirationDate: 'now' },

    { AppID: 'VY1-G03',ServiceID: 'đƯA ĐÓN', VoucherName: 'GIẢM GIÁ', Description: 'GIẢM 50% ', expirationDate: 'now' },
    { AppID: 'VY1-G04',ServiceID: 'đƯA ĐÓN', VoucherName: 'GIẢM GIÁ', Description: 'GIẢM 30% ', expirationDate: 'now' },

    { AppID: 'VY1-G05',ServiceID: 'vOUCHER', VoucherName: 'GIẢM GIÁ', Description: 'GIẢM 90% ', expirationDate: 'now' },
    { AppID: 'VY1-G05',ServiceID: 'VOUCHER', VoucherName: 'GIẢM GIÁ', Description: 'GIẢM 30% ', expirationDate: 'now' },

    { AppID: 'VY1-G02',ServiceID: 'COMBO', VoucherName: 'GIẢM GIÁ', Description: 'GIẢM 10% ', expirationDate: 'now' },
    { AppID: 'VY1-G03',ServiceID: 'COMBO', VoucherName: 'GIẢM GIÁ', Description: 'GIẢM 50% ', expirationDate: 'now' },

    { AppID: 'VY1-G04',ServiceID: 'TOUR', VoucherName: 'GIẢM GIÁ', Description: 'GIẢM 30% ', expirationDate: 'now' },
    { AppID: 'VY1-G05',ServiceID: 'TOUR', VoucherName: 'GIẢM GIÁ', Description: 'GIẢM 90% ', expirationDate: 'now' },

    { AppID: 'VY1-G05',ServiceID: 'NHÀ HÀNG', VoucherName: 'GIẢM GIÁ', Description: 'GIẢM 30% ', expirationDate: 'now' },
    { AppID: 'VY1-G02',ServiceID: 'NHÀ HÀNG', VoucherName: 'GIẢM GIÁ', Description: 'GIẢM 10% ', expirationDate: 'now' },

    { AppID: 'VY1-G03',ServiceID: 'THUÊ XE', VoucherName: 'GIẢM GIÁ', Description: 'GIẢM 50% ', expirationDate: 'now' },
    { AppID: 'VY1-G04',ServiceID: 'THUÊ XE', VoucherName: 'GIẢM GIÁ', Description: 'GIẢM 30% ', expirationDate: 'now' },

    { AppID: 'VY1-G05',ServiceID: 'VILLA', VoucherName: 'GIẢM GIÁ', Description: 'GIẢM 90% ', expirationDate: 'now' },
    
  ]);
  const [columnDefs, setColumnDefs] = useState([
    { field: 'ServiceID'},
    { field: 'VoucherName', width:'150px', },
    { field: 'Description' , width:'150px'},
    {field: 'expirationDate', width:'150px'}
  ]);
  const groupDisplayType = 'singleColumn';
        return (
            <div id="content" class="col">
        <h2 class="title">VOUCHER CỦA BẠN</h2> 
                    <div className="ag-theme-alpine" style={{ height: "700px", width:" auto" }}>    
                       <AgGridReact 
                       rowData={arowData} 
                       columnDefs={columnDefs} 
                       animateRows={true}
                       groupDisplayType={groupDisplayType}>
                           
                        </AgGridReact>
                    </div>
           </div>  
        );
    }

export default Booking;
