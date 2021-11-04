import axios from "axios"
import { GET_DATA ,GET_DATA_FAIL} from "./types"

export const getData=()=>async dispatch=>{
    try{
    
        const res=await axios.get("https://api.coincap.io/v2/assets")
        dispatch({
            type:GET_DATA,
            payload:res.data.data
        })
    }catch(err){
        dispatch({
            type:GET_DATA_FAIL,
            payload:err
        })
    }
}
