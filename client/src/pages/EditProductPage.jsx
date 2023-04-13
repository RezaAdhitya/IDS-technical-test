import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditProductPage() {
  const navigate = useNavigate();
  const {id} = useParams()
  const [product, setProduct] = useState()
  const [editProductForm, setProductForm] = useState({
    productID: product?.productID,
    productName: product?.productName,
    amount: product?.amount,
    customerName: product?.customerName,
    status: product?.status,
    transactionDate: product?.transactionDate,
    createBy: product?.createBy,
    createOn: product?.createOn,
  });

  const handleEditProductForm = (e) => {
    setProductForm({
      ...editProductForm,
      [e.target.name]: e.target.value,
    });
  };

  const doEditProduct = async (e) => {
    try {
      e.preventDefault();
      const res = await fetch(`http://localhost:3000/edit/` + id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify( {
          formData: editProductForm
        }),
      });

      if (!res.ok) {
        throw ({message: "Error editing product"});
      }
      navigate("/" + id);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetch('http://localhost:3000/' + id)
    .then(result => result.json())
    .then(data => {
      console.log(data);
      let adjustedData = {
        ...data,
        transactionDate: new Date(data.transactionDate).toISOString().split('T')[0],
        createOn: new Date(data.createOn).toISOString().split('T')[0]
      }
      setProduct(adjustedData)
    })
  }, []);


  return (
    <div className="main-content centered-col">
      <p className="title big">Edit existing product</p>
      <form
        onSubmit={doEditProduct}
        className="form-body centered" 
      >
        <div className="centered-col field">
          <div className="form-item">
            <label
              htmlFor="productID"
            >
              Product ID
            </label>
            <input
              onChange={handleEditProductForm}
              defaultValue={product?.productID}
              name="productID"
              type="text"
              id="productID"
              placeholder="eg: 10572"
            />
          </div>

          <div className="form-item">
            <label
              htmlFor="productName"
            >
              Product Name
            </label>

            <input
              onChange={handleEditProductForm}
              defaultValue={product?.productName}
              name="productName"
              id="productName"
              placeholder="eg: Product A"
            />
          </div>

          <div className="form-item">
            <label
              htmlFor="amount"
            >
              Amount
            </label>
            <input
              onChange={handleEditProductForm}
              defaultValue={product?.amount}
              name="amount"
              type="text"
              id="amount"
              placeholder="eg: 1000"
            />
          </div>

          <div className="form-item">
            <label
              htmlFor="customerName"
            >
              Customer Name
            </label>
            <input
              onChange={handleEditProductForm}
              defaultValue={product?.customerName}
              name="customerName"
              type="text"
              placeholder="eg: Boy"
              id="customerName"
            />
          </div>

          <div className="form-item">
            <label
              htmlFor="status"
            >
              Status
            </label>
            <select
              onChange={handleEditProductForm}
              defaultValue={product?.status}
              name="status"
              type="number"
              id="status"
            >
              <option value="0">SUCCESS</option>
              <option value="1">FAILED</option>
            </select>
          </div>

          <div className="form-item">
            <label
              htmlFor="transactionDate"
            >
              Transaction Date
            </label>
            <input
              onChange={handleEditProductForm}
              defaultValue={product?.transactionDate}
              name="transactionDate"
              type="date"
              id="transactionDate"
            />
          </div>

          <div className="form-item">
            <label
              htmlFor="createBy"
            >
              Created By
            </label>
            <input
              onChange={handleEditProductForm}
              defaultValue={product?.createBy}
              name="createBy"
              type="text"
              placeholder="eg: Boy"
              id="createBy"
            />
          </div>

          <div className="form-item">
            <label
              htmlFor="createOn"
            >
              Created On
            </label>
            <input
              onChange={handleEditProductForm}
              defaultValue={product?.createOn}
              name="createOn"
              type="date"
              id="createOn"
            />
          </div>

          <div className="centered">
            <button
              type="submit"
              className="nav-btn"
            >
              Submit Edit Product
            </button>
            <a 
              className='nav-btn'
              onClick={() => navigate('/')}
            >
              Back
            </a>
          </div>
        </div>
      </form>
    </div>
  );
}

export default EditProductPage;
