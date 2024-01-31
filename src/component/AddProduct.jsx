import React, { useEffect, useState } from 'react'

import productService from '../service/product_service';

const AddProduct = () => {

   const [product,setProduct]=useState({
    productName:"",
    description:"",
    price:"",
    status: ""
   });

   const [msg,setMsg]=useState("");

  
   const handleChange=(e)=>{
          const value=e.target.value;
           setProduct({...product,[e.target.name]:value}) ;
   };

  const ProductRegister = (e) => {
    e.preventDefault();
    productService.saveProduct(product)
      .then((res) => {
        console.log("Product Added Successfully");
        setMsg("Product Added Successfully");
        setProduct({
          productName:"",
          description:"",
          price:"",
          status: ""
         });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
    <div className='container mt-3'>
      <div className='row'>
          <div className='col-md-6 offset-md-3'>
              <div className='card'>
                  <div className='card-header fs-3 text-center'>
                      Add Product
                  </div>
                  { msg && <p className='fs-4 text-centre text-success'>{msg}</p>}
                  <div className='card-body'>
                      <form onSubmit={(e)=> ProductRegister(e)}>
                          <div className='md-3'>
                              <label>Enter Product Name</label>
                                <input type='text' name='productName' className='form-control' onChange={(e)=>handleChange(e)} value={product.productName}></input>
                          </div>
                          <div className='md-3'>
                              <label>Enter Description</label>
                                <input type='text' name='description' className='form-control' onChange={(e)=>handleChange(e)} value={product.description}></input>
                          </div>
                          <div className='md-3'>
                              <label>Enter Price</label>
                                <input type='text' name='price' className='form-control' onChange={(e)=>handleChange(e)} value={product.price}></input>
                          </div>
                          <div className='md-3'>
                              <label>Enter Status</label>
                                <input type='text' name='status' className='form-control' onChange={(e)=>handleChange(e)} value={product.status}></input>
                          </div>
                          <button className='btn btn-primary col-md-12'>Submit</button>
                      </form>

                  </div>
     
              </div>

          </div>

      </div>
      
    </div>
  </>
  )
}

export default AddProduct