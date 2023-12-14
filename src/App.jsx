import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menus from "./pages/Menus";
import Home from "./pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menus" element={<Menus />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
