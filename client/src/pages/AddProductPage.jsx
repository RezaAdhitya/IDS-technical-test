import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddProduct() {
  const navigate = useNavigate();
  const [addProductForm, setProductForm] = useState({
    productID: "",
    productName: "",
    amount: "",
    customerName: "",
    status: 0,
    transactionDate: "",
    createBy: "",
    createOn: "",
  });

  const handleAddProductForm = (e) => {
    setProductForm({
      ...addProductForm,
      [e.target.name]: e.target.value,
    });
  };

  const doAddProduct = async (e) => {
    try {
      e.preventDefault();
      const res = await fetch(`http://localhost:3000/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify( {
          formData: addProductForm
        }),
      });

      if (!res.ok) {
        throw ({message: "Error adding product"});
      }

      setProductForm({
        productID: "",
        productName: "",
        amount: "",
        customerName: "",
        status: 0,
        transactionDate: "",
        createBy: "",
        createOn: "",
      });

      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="main-content centered-col">
      <p className="title big">Add new product</p>
      <form
        onSubmit={doAddProduct}
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
              onChange={handleAddProductForm}
              value={addProductForm.productID}
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
              onChange={handleAddProductForm}
              value={addProductForm.productName}
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
              onChange={handleAddProductForm}
              value={addProductForm.amount}
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
              onChange={handleAddProductForm}
              value={addProductForm.customerName}
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
              onChange={handleAddProductForm}
              value={addProductForm.status}
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
              onChange={handleAddProductForm}
              value={addProductForm.transactionDate}
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
              onChange={handleAddProductForm}
              value={addProductForm.createBy}
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
              onChange={handleAddProductForm}
              value={addProductForm.createOn}
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
              Submit New Product
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

export default AddProduct;
