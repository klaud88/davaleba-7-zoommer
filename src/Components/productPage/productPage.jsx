import React, {useState} from 'react';
import Pages from '../pagination/pagination';
import './productPage.css'


const ProductPage=({newData,setPage, startPrice, endPrice, inputs, brand})=>{
   
    return (
        <>
  <div className="pagination">
  <Pages setPage={setPage}/>
  </div>
         <div id='mainContent'>
  {newData?.filter((data)=> {
 return data.price >= `${startPrice}` && data.price <= `${endPrice}`})
 ?.filter((newData)=> newData.name.toLowerCase()?.includes(`${inputs}`))
 ?.filter((newData)=> newData.brandName?.includes(`${brand}`))
 ?.map((data, index)=> {
      return (
    <div key={index} className='viewData'>
      <div className='dataOrder'>
        <img  src={data.imageUrl}></img>
        <h1 className='prices'>{data.price} &#8382;</h1>
        <h4 className='quantity'>რაოდენობა: <span>{data.storageQuantity}</span></h4>
        <h2 className='name'>{data.name}</h2>
        <div className='btns'>
        <button className='compare'><i></i></button>
        <button className='shopNow'><i></i> დამატება</button>
        </div>
      </div>
    </div>
    )}
)}
</div>
        </>
    )
}
export default ProductPage