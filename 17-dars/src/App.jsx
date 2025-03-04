import { Route, Routes } from "react-router-dom";
import React from "react";
import { MainLayout } from "./layout/main-layout";
import { Home } from "./pages/home";
import { Detail } from "./pages/detail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/product/:id" element={<Detail />} />
      </Route>
    </Routes>
  );
}

export default App;
