import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function DetailProduct() {
  const navigate = useNavigate()
  const {id} = useParams()
  const [detail, setDetail] = useState()
  
  useEffect(() => {
    fetch('http://localhost:3000/' + id)
    .then(result => result.json())
    .then(data => setDetail(data))
  }, []);

  return (
    <div className='main-content centered-col'>
      <p className='title big'>Product Detail</p>
      <div className='details' style={{border: "1px solid black"}}>
        <div className="items">
          <p className='title'>ID: </p>
          <p>{detail?.id}</p>
        </div>
        <div className="items">
          <p className='title'>Product ID: </p>
          <p>{detail?.productID}</p>
        </div>
        <div className="items">
          <p className='title'>Product Name: </p>
          <p>{detail?.productName}</p>
        </div>
        <div className="items">
          <p className='title'>Product Amount: </p>
          <p>{detail?.amount}</p>
        </div>
        <div className="items">
          <p className='title'>Customer Name: </p>
          <p>{detail?.customerName}</p>
        </div>
        <div className="items">
          <p className='title'>Status: </p>
          <p>{detail?.status}</p>
        </div>
        <div className="items">
          <p className='title'>Transaction Date: </p>
          <p>{detail?.transactionDate}</p>
        </div>
        <div className="items">
          <p className='title'>Created By: </p>
          <p>{detail?.createBy}</p>
        </div>
        <div className="items">
          <p className='title'>Created On: </p>
          <p>{detail?.createOn}</p>
        </div>
      </div>

      <div className="centered">
        <a 
          className='nav-btn'
          onClick={() => navigate('/edit/' + id)}
        >
          Edit
        </a>
        <a 
          className='nav-btn'
          onClick={() => navigate('/')}
        >
          Back
        </a>
      </div>
    </div>
  )
}

export default DetailProduct