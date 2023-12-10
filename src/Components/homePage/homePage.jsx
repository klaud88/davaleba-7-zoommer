import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import './homePage.css';
import '../mainPage/mainPage.css'

const HomePage=()=>{
 const [leptops, setLeptops]=useState([])
 const [smartphones, setSmartphones]=useState([])
 
 const smartphoneURL = `https://api.zoommer.ge/v1/Products/v3?CategoryId=855&Page=1&Limit=60`
 const leptopURL = `https://api.zoommer.ge/v1/Products/v3?CategoryId=531&Page=1&Limit=60`

useEffect(()=> {
  axios.get(`${smartphoneURL}`)
  .then((response)=>{
    setSmartphones(response.data.products)
  })
  axios.get(`${leptopURL}`)
  .then((response)=>{
    setLeptops(response.data.products)
  })
},[])

    return(
        <>
<div id="slider">
    <img className='ad'/>
  <div className='sliderContainer'>
        {smartphones?.map((data, index)=> 
            <div  key={index} className='viewData'>
         <img className='sliderIMG'src={data.imageUrl}></img>
         <h1 className='prices'>{data.price} &#8382;</h1>
         <h2 className='name'>{data.name}</h2>
          </div>
         )}
  </div>
  <div className="sliderContainer">
        {leptops?.map((data, index)=> 
        <div  key={index} className='viewData'>
       <img className='sliderIMG' src={data.imageUrl}>{}</img>
       <h1 className='prices'>{data.price} &#8382;</h1>
       <h2 className='name'>{data.name}</h2>
       </div>
       )}      
  </div>
</div> 
        </>
    )
}
export default HomePage