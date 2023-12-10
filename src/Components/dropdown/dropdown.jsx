import React, { useCallback, useMemo }from 'react';
import { Link } from 'react-router-dom';
import './dropDown.css';

const Dropdown=({CategoryId, setCategoryId, setEndPrice, setStartPrice, startPrice, endPrice, newData, setBrand})=>{

const handleCategory = useCallback((e)=>{
    setCategoryId(e.target.value)
    console.log("drop")
})   

const startPrices = useCallback((e)=>{
    setStartPrice(e.target.value)
    console.log("dropin")
},[])
const endPrices= useCallback((e)=>{
    setEndPrice(e.target.value)
    console.log("dropin2")
},[])

const handleBrand =useCallback((e)=>{
    setBrand(e.target.value)
},[CategoryId])

const brands = useMemo(()=> [...new Set(newData.map((duplicate) => duplicate.brandName))])
return(
<>
<div className='sidebarSection'>
<span className='category'>კატეგორია</span>
<div className='categoryOrder'> 
<Link className='link' to='product'>
    <option onClick={handleCategory} className='cat'  value={531}>ლეპტოპები</option>
    <option onClick={handleCategory} className="cat" value={855}>მობილურები</option>
    <option onClick={handleCategory} className="cat" value={877}>ტაბლეტები</option>
    <option onClick={handleCategory} className="cat" value={873}>საათები</option>
</Link>      
</div>
<br/>
<span className='brand'>ბრენდი</span>
<select className='dropDown' onChange={handleBrand} defaultValue="default">
    <option   value={""}>
        აირჩიეთ ბრენდი
    </option>
    {brands?.map((brand, index)=> 
    <option key={index}>{brand}</option>)}
</select>
<div className='priceInput'>
<span className='price'>ფასი</span>
<div className='range'>
<input type='range' className='startRange' min={0} max={7000} value={startPrice}  onChange={startPrices}/>
<input type='range' className='endRange' min={0} max={7000} value={endPrice}  onChange={endPrices}/>
<span className='rangeStart'>{startPrice}</span><span className='rangeEnd'>{endPrice}</span>
</div>
<input type='number' placeholder='MIN:'  value={startPrice} className="boxInput" onChange={startPrices}/>
<input type='number' placeholder='MAX:' value={endPrice} className="boxInput" onChange={endPrices}/>
</div>
</div>
</>
    )
}
export default Dropdown