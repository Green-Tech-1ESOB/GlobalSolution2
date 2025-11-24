import React from "react";
import {Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Forms from "./pages/Forms/Forms";
import Resultado from "./pages/Resultado/Resultado";

function App() {

  return (
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/forms" element={<Forms />} />

      </Routes>
  )
}

export default App;
