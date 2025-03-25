import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Authentication from "./Components/Authentication/Authentication";
import Home from "./Components/pages/Home"; // You can create this component to render the home page

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true); // User is logged in
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Authentication onLogin={handleLogin} />}
        />
        <Route path="/home" element={isLoggedIn ? <Home /> : <Authentication onLogin={handleLogin} />} />
      </Routes>
    </Router>
  );
};

export default App;
