import React from "react"; // Import React for JSX
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // For client-side routing
import Home from "./pages/Home"; // Import Home page (we'll create it later)
import "./index.css"; // Import global styles (corrected from App.css)

function App() {
  return (
    <Router>
      {" "}
      {/* Wrap app in Router for navigation */}
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} /> {/* Home route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App; // Export for use in main.jsx
