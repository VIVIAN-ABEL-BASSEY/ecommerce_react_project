import{
    ADD_POST,
    INCREASE_COUNTER ,
    DECREASE_COUNTER
} from "../contants"

export const addPost = (data)=>{
    return{
        type:ADD_POST,
        payload:data
    }
}
export const increaseCounter = ()=>(
    {
        type:INCREASE_COUNTER
    }
)
export const decreaseCounter = ()=>(
    {
        type:DECREASE_COUNTER
    }
)