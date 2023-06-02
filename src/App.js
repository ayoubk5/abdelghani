import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Products from "./components/Products/Products";
import Footer from "./components/Footer";
import Resume from "./components/Resume/ResumeNew";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { getAuth, onAuthStateChanged } from "firebase/auth";

function App() {
  const [load, upadateLoad] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const auth = getAuth();
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        
        const uid = user.uid;
        console.log(uid)
        setIsLoggedIn(true)
        // ...
      } else {
        // User is signed out
        // ..
        console.log("uid")
      }
    });
    })
    
  // useEffect((getAuth) => {
  //   const timer = setTimeout(() => {
  //     upadateLoad(false);
  //   }, 1200);
  //   const handleLogin = () => {
  //   // Perform login logic here (e.g., API call, validation)
  //   // If login is successful, update the isLoggedIn state to true
  //   setIsLoggedIn(true);
  // };

  //   const handleLogout = () => {
  //   // Perform logout logic here (e.g., clear session, remove tokens)
  //   // Update the isLoggedIn state to false
  //   setIsLoggedIn(false);
  // };
  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <Router>
      <Preloader />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar props={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Products />} />
          <Route path="/login" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
