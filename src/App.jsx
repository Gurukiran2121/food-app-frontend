import "./App.css";

import React from "react";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Navigation from "./components/Navigation";
import Contact from "./pages/Contact";
import Foote from "./components/Foote";
import Privatecomp from "./components/Privatecomp";
import Products from "./components/Products";
import { ContaxtReducer } from "./components/ContaxtReducer";
import Cart from "./pages/Cart";

const App = () => {
  return (
    <>
      <ContaxtReducer>
        <BrowserRouter>
        
          <Navigation />
          <Routes>
            <Route element={<Privatecomp />}>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/cart" element={<Cart />} />
            </Route>
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
          <Foote />
        </BrowserRouter>
      </ContaxtReducer>
    </>
  );
};

export default App;
