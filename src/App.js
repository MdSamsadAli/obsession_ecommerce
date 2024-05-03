import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import {
  TopBar,
  Home,
  Shop,
  Cart,
  Contact,
  NotFoundPage,
  Header,
} from "./pages/index";
import Footer from "./common/Footer";
import MidHeader from "./common/MidHeader";

const App = () => {
  return (
    <div>
      <Router>
        <TopBar />
        <MidHeader />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
