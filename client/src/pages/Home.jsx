import React, { useState, useRef, useEffect, useMemo, useCallback} from 'react';
import { useNavigate } from "react-router-dom";
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import 'ag-grid-enterprise';

function Home() {
  const navigate = useNavigate();
  const gridRef = useRef(); // for accessing Grid's API
  gridRef.current?.api?.sizeColumnsToFit()
  const [rowData, setRowData] = useState(); // Set rowData to Array of Objects, one Object per Row
 
  // Each Column Definition results in one Column.
  const [columnDefs, setColumnDefs] = useState([
    {field: 'transactionYear', rowGroup: true, hide: true },
    {field: 'transactionMonth', rowGroup: true, hide: true },
    {field: 'productName', filter: true},
    {field: 'amount', filter: true},
    {field: 'customerName'},
    {field: 'createBy'},
  ]);
 
  // DefaultColDef sets props common to all Columns
  const defaultColDef = useMemo( ()=> ({
      sortable: true,
      cellStyle: {textAlign: "left"}
    }));

  const autoGroupColumnDef = useMemo(() => {
    return {
      minWidth: 200,
    };
  }, []);
 
  // Grid Event for navigation to product detail
  const cellClickedListener = useCallback( event => {
    if(event.data) {
      navigate(`/${event.data.id}`)
    }
  }, []);
 
  // fetching data from server
  useEffect(() => {
    fetch('http://localhost:3000/')
    .then(result => result.json())
    .then(rowData => {
      let adjustedData = rowData.map(el => {
        el.transactionYear = el.transactionDate?.substring(0,4)
        el.transactionMonth = el.transactionDate?.substring(5,7)
        return el
      })
      return setRowData(adjustedData)
    })
  }, []);

  return (
    <div>
      <p className='title big'>Product Page</p>
      <div className="ag-theme-alpine main-content">
        <AgGridReact
          ref={gridRef} 
          rowData={rowData} 
          columnDefs={columnDefs}
          defaultColDef={defaultColDef} 
          animateRows={true}
          autoGroupColumnDef={autoGroupColumnDef}
          onCellClicked={cellClickedListener}
          domLayout='autoHeight'
        />
      </div>
        <a 
          className='nav-btn'
          onClick={() => navigate('/add')}
        >
          Add new product
        </a>
    </div>
  )
}

export default Home