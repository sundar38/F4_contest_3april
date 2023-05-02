import React from 'react'
import store from '../store'
import { useSelector, useDispatch } from 'react-redux';
import styles from "../App.css"
import { addproduct, checkout, removesitem } from '../actions';
function Cart() {
  //console.log("Initial state is", store.getState());
  const cartlist= useSelector((state)=>state.cart.cartitems)
  console.log(cartlist);
  const dispatch=useDispatch()
  function dispatching(cartlist){
    console.log(cartlist);
    // while(cartlist!=[]){
    //   cartlist.pop()
    // }
    
    dispatch(checkout(cartlist))
  }  
  function removeitem(eachdata){
    dispatch(removesitem(eachdata))
  }

  return (
    cartlist==[]?(console.log("empty")):
    (
    <div>
      <div className='displayelements'>{
        cartlist.map((eachdata, index)=>(
          <div className="eachstyling">        
          <img src={eachdata.images[0]} alt="image" className="imagestyling" key={index}></img> 
          <p>Title: {eachdata.title}</p>  
          <p>Price:$ {eachdata.price}</p>    
          <button onClick={()=>removeitem(eachdata)}
          style={{backgroundColor:"black", color: "white", width: "100%", height: "30px"}}>Remove from cart</button> 
      </div>
      ))}
     </div>
      <div className='checkoutitems'>
          <h1>Checkout List</h1>       
          {                
            cartlist.map((eachdata, index)=>(
              <div>
                <p>{eachdata.title}  : <span>{eachdata.price}</span> </p>                    
              </div>              
            ) )
          }
          <button onClick={()=>dispatching(cartlist)}>Checkout</button>
      </div>
    </div>
  ))
}

  

export default Cart