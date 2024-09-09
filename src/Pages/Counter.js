import {connect} from "react-redux"
import{
    increaseCounter,
    decreaseCounter
} from "../redux/Actions/Actions"

const Counter =(props)=>{
    return(
        <div>
            <h2>counter:{props.counter}</h2>
            <button onClick={()=>props.increaseCounterAction()}>Increase</button>
            <button onClick={()=>props.decreaseCounterAction()}>Decrease</button>
        </div>
    )
}
const mapStateToProps =(state)=>{
    return{
        counter:state.counter
    }
}
const mapDispatchToProps =(dispatch)=>{
    return{
        increaseCounterAction:()=>dispatch(increaseCounter()),
        decreaseCounterAction:()=>dispatch(decreaseCounter())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter)