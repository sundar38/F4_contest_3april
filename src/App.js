
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Cart from "./Components/Cart";
import Navbar from "./Components/Navbar";
import Homepage from "./Components/Homepage";



const App=()=>{
return(
  <div>
   <Navbar/>  
  
    <Routes>    
      <Route path="/" element={<Homepage/>}  />
      <Route path="cart" element={<Cart />} />
    </Routes>  
  
  
  </div>
)
  }
  export default App

