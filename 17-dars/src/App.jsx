import { Route, Routes } from "react-router-dom";
import React from "react";
import { MainLayout } from "./layout/main-layout";
import { Home } from "./pages/home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
