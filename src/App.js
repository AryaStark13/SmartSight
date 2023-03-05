import "./App.css";
import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import Landing from "./pages/Landing";
import ScrollToTop from "./components/ScrollToTop";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CreatorStudio from "./pages/CreatorStudio";
import ImagePost from "./pages/ImagePost";
import alanBtn from "@alan-ai/alan-sdk-web";

function App() {
  useEffect(() => {
    alanBtn({
      key: "bc9219ac3cf1c36396f0ed66da3e63572e956eca572e1d8b807a3e2338fdd0dc/stage",
    });
  }, []);
  return (
    <div className="App">
      <Router>
        <Header />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/post" element={<CreatorStudio />} />
          <Route path="/image" element={<ImagePost />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<Landing />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
