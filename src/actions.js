import { FETCH_DATA, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE } from "./actiontypes";
import axios from "axios";

export const fetchdata=()=>{
    return{
        type: "FETCH_DATA",
    }
}
export const fetch_data_success=(data)=>{
    return{
        type: "FETCH_DATA_SUCCESS",
        payload: data,
    }
}
export const fetch_data_failure=(error)=>{
    return {
        type: "FETCH_DATA_FAILURE",
        payload: error
    }
}
export const fetchingdata=()=>async (dispatch)=>{
    dispatch(fetchdata())
    try{
        const response = await axios.get("https://dummyjson.com/products")
        dispatch(fetch_data_success(response.data.products))
    }
    catch(e){
        dispatch(fetch_data_failure(e.message))
    }
}