import React, { useCallback } from 'react';
import './input.css'
import { Link } from 'react-router-dom';

const Input=({setInputs,inputs})=>{
    
  const handleSearch = useCallback( (e)=>{
    setInputs(e.target.value)
    console.log("input")
  },[inputs])
  
return (
<>
<div className='topSection'>
   <Link to='/'><span className='logo'></span></Link>
    <div className='search'>
    <i className='searchIcon'></i>
    <input type='search' className='input' onChange={handleSearch} placeholder='ძიება' />
    <button className='shop'><i className='shopIcon'></i>კალათა</button>
    <button className='login'><i className='loginIcon'></i>შესვლა</button>
    </div>
</div>
</>
    )
}
export default Input;