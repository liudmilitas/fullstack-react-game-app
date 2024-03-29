import React from "react";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Gallery from "./pages/Gallery";
import Login from "./pages/Login";
import Register from "./pages/Register";
import TransactionHistory from "./pages/TransactionHistory";

export default function App() {
  return (
    <div className="flex flex-col items-center content-center h-screen w-full justify-between">
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route exact path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/transactions" element={<TransactionHistory />} />
          <Route path="*">No page found:c</Route>
        </Routes>
      </Router>
    </div>
  );
}
