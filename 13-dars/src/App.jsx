import React from "react";
import { Route, Routes } from "react-router-dom";
import { MainLayout } from "./layout/main-layout";
import { TaskList } from "./pages/task-list";
import { CreateTask } from "./pages/create-task";
import { EditTask } from "./pages/edit-task";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<TaskList />} />
        <Route path="create-task" element={<CreateTask />} />
        <Route path="edit-task/:id" element={<EditTask />} />
      </Route>
    </Routes>
  );
}

export default App;
