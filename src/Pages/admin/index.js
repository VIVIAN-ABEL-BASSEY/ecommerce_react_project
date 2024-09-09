import { Link, Routes, Route } from "react-router-dom";
import Customers from "./Customers";
import Orders from "./Orders";
import Settings from "./Settings";

const Admin = () => {

    return (
        <div>
            <h1>Admin Page</h1>
            <nav>
                <ul>
                    <li><Link to="orders">Orders</Link></li>
                    <li><Link to="customers">Customers</Link></li>
                    <li><Link to="settings">Settings</Link></li>
                </ul>
            </nav>
            <main>
                <Routes>
                    <Route path="orders" element={<Orders/>}  />
                    <Route path="customers" element={<Customers />} />
                    <Route path="settings" element={<Settings />} />
                </Routes>
            </main>
        </div>
    )
}

export default Admin;