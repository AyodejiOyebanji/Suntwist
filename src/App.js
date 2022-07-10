import React from "react";
import LandingPage from "./Pages/LandingPage";
import {Route, Routes} from "react-router-dom"






const App = () => {


  return (
    <>
    <Routes>
     <Route path="/home" element={<LandingPage />} />
    </Routes>
    

   </>
  );
};

export default App;
