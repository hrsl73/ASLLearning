import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ASLLearning from "./components/ASLLearning";
import IslePoster from "./components/ISLEHomePage";
import StartPage from "./components/StartPage";


function App() {
  return (
    <Router>
      <Routes>
        {/* Homepage */}
        <Route path="/" element={<IslePoster />} />

        {/* Getting Started Page */}
        <Route path="/start" element={<StartPage />} />

        {/* ASL Alphabets Page */}
        <Route path="/asl-alphabets" element={<ASLLearning />} />
      </Routes>
    </Router>
  );
}

export default App;
