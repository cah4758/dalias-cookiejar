import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Linkbar from "./components/navigation";
import Home from "./pages/home";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="body bg-light">
        <Linkbar />
        <div className="container">
          <Routes>
            <Route exact path="/" element={<Home />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
