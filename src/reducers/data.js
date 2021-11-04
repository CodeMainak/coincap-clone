import { GET_DATA ,GET_DATA_FAIL} from "../actions/types"

const initialState={
    data:[],
    loading:true,
    error:{}
}

// eslint-disable-next-line import/no-anonymous-default-export
export default  function (state=initialState,action){
    const {type,payload}=action

    switch(type){
        case GET_DATA:
            return{
                ...state,
                data:payload,
                loading:false
            }
        case GET_DATA_FAIL:
            return{
                ...state,
                error:payload,
                loading:false
            }
        default:
            return state
    }
}