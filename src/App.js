import React from "react";
import { HashRouter } from "react-router-dom"; // Cambiado a HashRouter
import AppRouter from "./config/router";
import MyNavBar from "./components/UI/MyNavbar";
import Footer from "./components/UI/Footer";

const App = () => {
  return (
    <HashRouter>
      <div>
        <MyNavBar />
        <AppRouter />
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
