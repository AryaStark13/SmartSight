import "./App.css";
// import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import ScrollToTop from "./components/ScrollToTop";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Gender from "./pages/Gender";
import Interests from "./pages/Interests";
import OCR from "./pages/OCR";
import Compare from "./pages/Compare";
import Real from "./pages/Real";
import About from "./pages/About";
import APIs from "./pages/APIs";
// import alanBtn from "@alan-ai/alan-sdk-web";

function App() {
  // useEffect(() => {
  //   alanBtn({
  //     key: "",
  //   });
  // }, []);
  return (
    <div className="App">
      <Router>
        <Header />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gender" element={<Gender />} />
          <Route path="/interests" element={<Interests />} />
          <Route path="/ocr" element={<OCR />} />
          <Route path="/compare" element={<Compare />} />
          <Route path="/real" element={<Real />} />
          <Route path="/apis" element={<APIs />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
