// src/App.js
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./config/router";
import MyNavBar from "./components/UI/MyNavbar";
import Footer from "./components/UI/Footer";



const App = () => {
  return (
    <Router>
      <div>
        <MyNavBar />
        <AppRouter />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
