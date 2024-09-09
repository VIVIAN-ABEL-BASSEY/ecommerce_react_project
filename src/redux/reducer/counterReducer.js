import{
    INCREASE_COUNTER ,
    DECREASE_COUNTER
} from "../contants"

const initialState = {
    counter:0,
    profile:{
        first_name:"Donald",
        last_name:"Trumph",
        age:90
    }
}
function counterReducer(state = initialState, action){
    switch (action.type) {
        case INCREASE_COUNTER:
           return {
            ...state,
            counter: state.counter +1
           }
        case DECREASE_COUNTER:
            return {
            ...state,
            counter: state.counter -1
            }  
    
        default:
           return state;
    }
}

export default counterReducer