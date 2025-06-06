// import React from "react";
// import Landing from "./pages/LandingPage";
import "./App.css";
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from "./routes/AppRoutes";

const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
      {/* <Landing /> */}
    </BrowserRouter>
  );
};

export default App;
