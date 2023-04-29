import { useSelector, useDispatch } from "react-redux";
import { fetchingdata } from "./actions";
import { useEffect } from "react";
import styles from "./App.css"
let eachstyling={
  border: "1px solid black",
  width: "250px",
  gap: "5px"
}


const App=()=>{

const loading= useSelector((state)=>state.data.loading)
const error= useSelector((state)=> state.data.error)
const data= useSelector((state)=> state.data.data)

const dispatch=useDispatch()

useEffect(()=>{
  dispatch(fetchingdata())
},[dispatch])

// if(loading){
//   return <h1>...loading</h1>
// }
// if(error)
//   return (<h1>{error.message}</h1>)

return(
  <div>
    <div className="header">
      <h1>Shopping Cart</h1>
      
    </div>
  <div className="total">
    {
      data.map((eachdata, index)=>
      <div style={eachstyling}>        
        <img src={eachdata.images[0]} alt="image" className="imagestyling"></img> 
        <p>Title: {eachdata.title}</p>  
        <p>Price:$ {eachdata.price}</p>    
        <button style={{backgroundColor:"black", color: "white", width: "100%"}}>Add to cart</button> 
        </div>
      )
    }
  </div>
  </div>
)
  }
  export default App

