import { Link, Outlet } from "react-router-dom";

const User = () => {

    return (
        <div>
            <h1>User Page</h1>
            <nav>
                <ul>
                    <li><Link to="profile">Profile</Link></li>
                    <li><Link to="account">Account</Link></li>
                </ul>
            </nav>
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default User;