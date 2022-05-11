import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Questions from "./components/Questions";
import Contact from "./components/Contact";
import "./App.css";
import Conversation from "./components/Conversation";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="q" element={<Questions />} />
          <Route path="con" element={<Conversation />} />
          <Route path="c" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
