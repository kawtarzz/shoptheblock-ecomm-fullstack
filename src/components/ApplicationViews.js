import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./auth/Login";
import Register from "./auth/Register";
import { Navigate } from "react-router-dom";
import { Home } from "./Home";
import { Footer } from "./Footer";

import { Outlet } from "react-router-dom";
import Header from "./Header";
import ProductList from "./product/ProductList";
import ProductDetails from "./product/ProductDetails";
import ShoppingCart from "./shoppingcart/ShoppingCart";
import { OrderConfirmation } from "./shoppingcart/OrderConfirmation";
import Checkout from "./shoppingcart/Checkout";
import CheckoutForm from "./shoppingcart/CheckoutForm";
import UserDetails from "./user/UserDetails";

export default function ApplicationViews({ isLoggedIn, user }) {
  return (
    <main>
      <Header isLoggedIn={isLoggedIn} user={user} />
      <Routes>
        <Route path="/">
          <Route
            index
            element={isLoggedIn ? <Home user={user} isLoggedIn={isLoggedIn} /> : <Navigate to="/login" />}
          />
          <Route path="product" element={isLoggedIn ? <ProductList user={user} isLoggedIn={isLoggedIn} /> : <Navigate to="/login" />} />
          <Route path="productDetails/:id" element={isLoggedIn ? <ProductDetails user={user} isLoggedIn={isLoggedIn} /> : <Navigate to="/login" />} />
          <Route path="shoppingCart" element={isLoggedIn ? <ShoppingCart user={user} /> : <Navigate to="/login" />} />
          <Route path="shoppingcart/checkout" element={isLoggedIn ? <Checkout user={user} /> : <Navigate to="/login" />} />
          <Route path="shoppingcart/checkout/form" element={isLoggedIn ? <CheckoutForm user={user} /> : <Navigate to="/login" />} />

          <Route path="order/confirmation" element={isLoggedIn ? <OrderConfirmation user={user} /> : <Navigate to="/login" />} />

          <Route path="/userprofile/details/:id" element={isLoggedIn ?
            <UserDetails user={user} /> : <Navigate to="/login" />
          } />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
      <Outlet />
      <Footer />

    </main>
  )
};