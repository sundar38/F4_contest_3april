import { ADD_PRODUCT, CHECKOUT_ITEMS, FETCH_DATA, FETCH_DATA_FAILURE, FETCH_DATA_SUCCESS } from "./actiontypes"
import { combineReducers } from "redux"

let initialstate={
    data:[],
    loading: false,
    error: "",
}
let initialcart={
    cartitems:[]
}

const datareducer=(state=initialstate, action)=>{
    switch(action.type){
        case FETCH_DATA:
            return {
                ...state, loading: true
            }
        case FETCH_DATA_SUCCESS:
            return{
                ...state, 
                loading: true,
                data: action.payload
            }
        case FETCH_DATA_FAILURE:
            return{
                ...state,
                loading: false,
                error: state.error+ action.payload
            }
        
        default:
            return state
    }
}
const cartreducer=(state= initialcart, action)=>{
    switch(action.type){
        case ADD_PRODUCT:
            return{
               ...state,
               cartitems: [...state.cartitems, action.payload]
            }
        case CHECKOUT_ITEMS:
            return{
                ...state,
                cartitems: action.payload.filter((item)=> item=="")
            }
        default: 
        return state
    }

}
const rootreducer=combineReducers({
    data: datareducer,
    cart: cartreducer
})
export default rootreducer