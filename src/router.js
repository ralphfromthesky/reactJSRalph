import React from "react";
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import AboutMe from "./views/aboutme";
import UseState from "./views/useState";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Router>
        <Routes>
            <Route path="/" Component={<AboutMe/>}/>
            <Route path="/useState" Component={<UseState/>}/>
        </Routes>
      </Router>
    </BrowserRouter>
  );
};

export default AppRouter;