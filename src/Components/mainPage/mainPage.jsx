import React, { useState, useEffect } from 'react';
import './mainPage.css'
import Dropdown from '../dropdown/dropdown';
import Input from '../input/input';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import ProductPage from '../productPage/productPage';
import HomePage from '../homePage/homePage';

const MainPage=()=> {
  
  const [newData, setNewData]=useState([])
  const [categoryId, setCategoryId]=useState(null)
  const [inputs, setInputs]=useState("")
  const [page, setPage]=useState(1)
  const [startPrice, setStartPrice]=useState(0)
  const [endPrice, setEndPrice]=useState(4000)
  const [brand, setBrand]=useState("")

  const dataURL = `https://api.zoommer.ge/v1/Products/v3?CategoryId=${categoryId}&Page=${page}&Limit=60`

  useEffect(()=>{
    axios.get(`${dataURL}`)
    .then((response)=>{
    setNewData(response.data.products)
    console.log(newData)
    })
  },[categoryId,page])
  
return (
<>
<div className='page'>
  <div id='header'>
  <Input setInputs={setInputs}/>
  </div>
  <div id='sidebar'>
  <Dropdown setCategoryId={setCategoryId}
            setStartPrice={setStartPrice}
            setEndPrice={setEndPrice}
            setBrand={setBrand}
            startPrice={startPrice}
            endPrice={endPrice}
            newData={newData}
            categoryId={categoryId}
            />
  </div> 
<Routes>
<Route path='/' element={<HomePage />}/>
<Route path='product' element={<ProductPage setCategoryId={setCategoryId}
                                            setStartPrice={setStartPrice}
                                            setEndPrice={setEndPrice}
                                            setBrand={setBrand}
                                            startPrice={startPrice}
                                            endPrice={endPrice}
                                            newData={newData}
                                            categoryId={categoryId}
                                            inputs={inputs}
                                            brand={brand}/> }/>
</Routes>

</div>

</>
  )
}

export default MainPage
