import { Link, NavLink ,useNavigate} from "react-router-dom"

function Header(){
    const navigate = useNavigate()
    return(
        <div>
            <header>
                <nav>
                <ul>
                    <li><img alt="Carved Rock Fitness" src="/images/logo.jpg"/></li>
                    <li>
                    <NavLink to={"/"}>Home</NavLink>
                    </li>
                    <li>
                    <NavLink to={"/products"}>Product</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/cart"}>Cart</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/user"}>User</NavLink>
                    </li>
                    <li>
                        <button onClick={()=>navigate(`/admin`)}>Admin</button>
                    </li>
                </ul>
                </nav>
            </header>
        </div>
    )
}
export default Header