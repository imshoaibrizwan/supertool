import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomeScreen from "./screens/HomeScreen";
import AboutUsScreen from "./screens/AboutUsScreen";
import ContactScreen from "./screens/ContactScreen";
import HtmlToPdfScreen from "./screens/HtmlToPdfScreen";
import PageNotFoundScreen from "./screens/PageNotFoundScreen";
import ImagesToPdfScreen from "./screens/ImagesToPdfScreen";
import CropImageScreen from "./screens/CropImageScreen";
import CompressImageScreen from "./screens/CompressImageScreen";
import ResizeImageScreen from "./screens/ResizeImageScreen";
import ImageToTextScreen from "./screens/ImageToTextScreen";
import HashStringScreen from "./screens/HashStringScreen";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  const [showPage, setShowPage] = useState(true);

  const setShowHandler = (showPage) => {
    setShowPage(showPage);
  };
  return (
    <Router>
      <ScrollToTop>
        <main className="page-wrapper">
          <Header setShowHandler={setShowHandler} />

          {/* All Screens Starts Here*/}
          <Routes>
            <Route path="/" element={<HomeScreen showPage={showPage} />} />
            <Route
              path="/about"
              element={<AboutUsScreen showPage={showPage} />}
            />
            <Route
              path="/contact"
              element={<ContactScreen showPage={showPage} />}
            />
            <Route
              path="/htmltopdf"
              element={<HtmlToPdfScreen showPage={showPage} />}
            />
            <Route
              path="/imagestopdf"
              element={<ImagesToPdfScreen showPage={showPage} />}
            />
            <Route
              path="/cropimage"
              element={<CropImageScreen showPage={showPage} />}
            />
            <Route
              path="/compressimage"
              element={<CompressImageScreen showPage={showPage} />}
            />
            <Route
              path="/resizeimage"
              element={<ResizeImageScreen showPage={showPage} />}
            />
            <Route
              path="/imagetotext"
              element={<ImageToTextScreen showPage={showPage} />}
            />
            <Route
              path="/hashstring"
              element={<HashStringScreen showPage={showPage} />}
            />

            <Route path="*" element={<PageNotFoundScreen />} />
          </Routes>
          {/* All Screens Ends Here*/}

          <Footer />
        </main>
      </ScrollToTop>
    </Router>
  );
};

export default App;
