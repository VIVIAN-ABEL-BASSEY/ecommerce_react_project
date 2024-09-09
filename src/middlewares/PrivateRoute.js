import {navigate} from "react-router-dom";
const PivateRoute = ({children,isLoggedIn}) =>{
    return (
        isLoggedIn ===true? children:<navigate to="/" replace />
    )
}
export default PivateRoute;