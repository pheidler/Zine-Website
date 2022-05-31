import BuyMeACoffee from "components/BuyMeACoffee.js";
import PdfViewer from "components/PdfViewer.js";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./views/Home.js";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/zines/:title" element={<PdfViewer />} />
      </Routes>
      <BuyMeACoffee />
    </div>
  );
}

export default App;
