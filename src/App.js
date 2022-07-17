import React from "react";
import LandingPage from "./Pages/LandingPage";
import MoreDetails from "./Pages/MoreDetails"
import { useSelector } from "react-redux"
import { Routes, Route } from "react-router-dom"
import ShippingAddress from "./Pages/ShippingAddress";
import Cart from "./Pages/Cart"

const App = () => {
  const globalState = useSelector((state) => {
    return state.price
  })
  console.log(globalState);


  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/moredetails/:id" element={<MoreDetails />} />

        <Route path="/address" element={<ShippingAddress />} />

        <Route path="/cart" element={<Cart />} />



      </Routes>


    </>
  );
};

export default App;
