import { FETCH_DATA, FETCH_DATA_FAILURE, FETCH_DATA_SUCCESS } from "./actiontypes"
import { combineReducers } from "redux"

let initialstate={
    data:[],
    loading: false,
    error: "",
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
const rootreducer=combineReducers({
    data: datareducer,
})
export default rootreducer