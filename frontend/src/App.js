import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomeScreen from "./screens/HomeScreen";
import AboutUsScreen from "./screens/AboutUsScreen";
import ContactScreen from "./screens/ContactScreen";
import HtmlToPdfScreen from "./screens/HtmlToPdfScreen";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <Router>
      <ScrollToTop>
        <main className="page-wrapper">
          <Header />

          {/* All Screens Starts Here*/}
          <Routes>
            <Route path="/" element={<HomeScreen />} exact />
            <Route path="/about" element={<AboutUsScreen />} />
            <Route path="/contact" element={<ContactScreen />} />
            <Route path="/htmltopdf" element={<HtmlToPdfScreen />} />
          </Routes>
          {/* All Screens Ends Here*/}

          <Footer />
        </main>
      </ScrollToTop>
    </Router>
  );
};

export default App;
