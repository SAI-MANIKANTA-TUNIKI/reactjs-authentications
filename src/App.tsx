import React, { useState } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";  // Fixed import
import Authentication from "./Components/Authentication/Authentication";
import Home from "./Components/pages/Home"; // You can create this component to render the home page

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true); // User is logged in
  };

  return (
    <HashRouter>
      <Routes>
        <Route
          path="/"
          element={<Authentication onLogin={handleLogin} />}
        />
        <Route 
          path="/home" 
          element={isLoggedIn ? <Home /> : <Authentication onLogin={handleLogin} />} 
        />
      </Routes>
    </HashRouter>
  );
};

export default App;
