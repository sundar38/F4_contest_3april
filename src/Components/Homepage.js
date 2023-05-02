import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { fetchingdata, addproduct } from "../actions";
import { useEffect } from "react";
import styles from "../App.css"

function Homepage() {
const loading= useSelector((state)=>state.data.loading)
const error= useSelector((state)=> state.data.error)
const data= useSelector((state)=> state.data.data)

const dispatch=useDispatch()
function call(data){
  dispatch(addproduct(data))
}

useEffect(()=>{
  dispatch(fetchingdata())
},[dispatch])

// if(loading){
//   return <h1>...loading</h1>
// }
// if(error)
//   return (<h1>{error.message}</h1>)

  return (
    <div className="total">
    {
      data.map((eachdata, index)=>
      <div className="eachstyling">        
        <img src={eachdata.images[0]} alt="image" className="imagestyling"></img> 
        <p>Title: {eachdata.title}</p>  
        <p>Price:$ {eachdata.price}</p>    
        <button onClick={()=>call(eachdata)} style={{backgroundColor:"black", color: "white", width: "100%", height: "30px"}}>Add to cart</button> 
        </div>
      )
    }
  </div>
    
  )
}

export default Homepage