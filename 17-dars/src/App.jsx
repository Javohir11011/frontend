import { Route, Routes } from "react-router-dom";
import React from "react";
import { MainLayout } from "./layout/main-layout";
import { Home } from "./pages/home";
import { Detail } from "./pages/detail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Detail />}></Route>
        <Route path="/" element={<Detail />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
