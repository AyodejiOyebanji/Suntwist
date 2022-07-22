import React from "react";
import LandingPage from "./Pages/LandingPage";
import MoreDetails from "./Pages/MoreDetails";
import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import ShippingAddress from "./Pages/ShippingAddress";
import Cart from "./Pages/Cart";
import PaymentMethod from "./Pages/PaymentMethod";
import PaystackdetailsPage from "./Pages/PaystackdetailsPage"
import PaymentSummary from "./Pages/PaymentSummary"
import Footer from "./component/Footer";
import CustomerAccount from "./Pages/CustomerAccount";
const App = () => {
  const globalState = useSelector((state) => {
    return state.price;
  });
  console.log(globalState);

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/moredetails/:id" element={<MoreDetails />} />

        <Route path="/address" element={<ShippingAddress />} />

        <Route path="/cart" element={<Cart />} />

        <Route path="/paymentmethod" element={<PaymentMethod />} />
        <Route path="/paystackdetailspage" element={<PaystackdetailsPage />} />
        <Route path="/PaymentSummary" element={<PaymentSummary />} />
        <Route path="/customeraccount" element={<CustomerAccount/>} />
       
        
        

        

      </Routes>
    </>
  );
};

export default App;
