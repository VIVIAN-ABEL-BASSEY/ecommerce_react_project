import "./App.css"
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { Route,Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import ProductDetail from "./Pages/Products/ProductDetail";
import Admin from "./Pages/admin"
import User from "./Pages/user"
import Account from "./Pages/user/Account"
import Profile from "./Pages/user/Profile"
import PrivateRoute from "./middlewares/PrivateRoute"

function App(){
  return(
    <div className="content">
      <Header/>
      <main>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/products">
            <Route path="" element={<Products/>}/>
            <Route path=":id" element={<ProductDetail/>}/>
            <Route path="category/:category" element={<Products/>}/>
          </Route>

          <Route path="/user" element={<User />}>
            <Route path="account" element={<Account/>}  />
            <Route path="profile" element={<Profile />} />
          </Route>
          {/* <Route path="/admin/*" element={<Admin />} /> */}
          <Route path='/admin/*' element={
              <PrivateRoute isLoggedIn={true}>
                  <Admin/>
              </PrivateRoute>    
          } />
        </Routes>
        
      </main>
      <Footer/>
    </div>
  )
}
export default App;