import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import ScrollToTop from "./components/ScrollToTop";
import Post from "./pages/Post";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import CreatorStudio from "./pages/CreatorStudio";

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Header /> */}
        {/* <Sidebar /> */}
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/post" element={<CreatorStudio />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
