# IDS-technical-test
## Description
> This project is a technical test project for PT Inovasi Daya Solusi
## Specification
### Backend
- Node
- Express
- Postgre
- Sequelize
### Frontend
- React
- React router dom
- AG Grid
- Vanilla CSS
## API Endpoints
```
Endpoint Summary
================
GET   /           : get all products
POST  /add        : add new products
PUT   /edit/:id   : edit existing product
GET   /:id        : get one product
```
## GET /

### **Required Request Header**
```
None
```
### **Required Request Body**
```
None
```
### **Response Status**
```
Success
=======
200 Success

Error
=======
500 Internal Server Error
```

### **Response Body**
```
Successful sample:
====================
[
  {
      "id": 1372,
      "productID": "10001",
      "productName": "Test 1",
      "amount": "1000",
      "customerName" : "abc",
      "status": 0,
      "transactionDate": "2022-07-10 11:14:52",
      "createBy" : "abc",
      "createOn" : "2022-07-10 11:14:52"
  },
  {...}
]
```
<br>

## POST /add

### **Required Request Header**
```
None
```
### **Required Request Body**
```
{
  "productID": string,
  "productName": string,
  "amount": string,
  "customerName" : string,
  "status": integer,
  "transactionDate": string,
  "createBy" : string,
  "createOn" : string
}
```
### **Response Status**
```
Success
=======
201 Created

Error
=======
500 Internal Server Error
```

### **Response Body**
```
Successful sample:
====================
{
  message: "product created"
}
```
<br>

## PUT /edit/:id

### **Required Request Header**
```
None
```
### **Required Request Params**
```
{
  id: integer
}
```
### **Response Status**
```
Success
=======
200 Success

Error
=======
500 Internal Server Error
```

### **Response Body**
```
Successful sample:
====================
{
  message: "product updated"
}
```
<br>

## GET /:id

### **Required Request Header**
```
None
```
### **Required Request Params**
```
{
  id: integer
}
```
### **Response Status**
```
Success
=======
200 Success

Error
=======
500 Internal Server Error
```

### **Response Body**
```
Successful sample:
====================
{
    "id": 1372,
    "productID": "10001",
    "productName": "Test 1",
    "amount": "1000",
    "customerName" : "abc",
    "status": 0,
    "transactionDate": "2022-07-10 11:14:52",
    "createBy" : "abc",
    "createOn" : "2022-07-10 11:14:52"
}
```
<br>