import axios from "axios"
import { GET_DATA ,GET_DATA_FAIL} from "./types"

export const getData=()=>async dispatch=>{
    try{
        const config = {
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
              "Access-Control-Allow-Credentials": "true",
              "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, Authorization"
            }
          };
          
        const res=await axios.get("https://api.coincap.io/v2/assets",config)
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
