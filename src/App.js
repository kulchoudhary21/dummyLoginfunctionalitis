import Header from "./my content/Dashboard/dashboard/header";
import Aboout from "./my content/Dashboard/dashboard/about";
import Login from "./my content/Dashboard/dashboard/login";
import Register from "./my content/Dashboard/dashboard/register";
import UserDashoard from "./my content/Dashboard/userDashboard/UserDashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Buttons from "./my content/Dashboard/userDashboard/uifeatures/Buttons";
import Dropdowns from "./my content/Dashboard/userDashboard/uifeatures/Dropdowns";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route path="about" element={<Aboout />}></Route>
            <Route path="login" element={<Login />}></Route>
            <Route path="register" element={<Register />}></Route>
          </Route>
          <Route path="/userdashboard" element={<UserDashoard />}>
            <Route path="dropdowns" element={<Dropdowns/>}></Route>
            <Route path="buttons" element={<Buttons />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

// import React from 'react'
// import { Link, Outlet } from 'react-router-dom'
// function Dashboard() {
//   return (
//     <div>
//       <h2>React Nested Routes Example</h2>
//      <Outlet>
//       <div className="product-nav mb-5">
//         <Link to="/dashboard/product">Product</Link>
//         <Link to="/dashboard/details">Product Details</Link>
//       </div>
//       <Outlet />
//     </div>
//   )
// }
// export default Dashboard
