import BuyMeACoffee from "./components/BuyMeACoffee.js";
import PdfViewer from "./components/PdfViewer.js";
import React from "react";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<PdfViewer file="FinanceZine" />} />
      </Routes>
      <BuyMeACoffee />
    </div>
  );
}

export default App;
