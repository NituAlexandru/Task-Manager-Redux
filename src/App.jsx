import React from "react";
import "./App.css";
import { Layout } from "./components/Layout/Layout";
import { TaskForm } from "./components/TaskForm/TaskForm";
import { AppBar } from "./components/AppBar/AppBar";
import { TaskList } from "./components/TaskList/TaskList";

const App = () => {
  return (
    <Layout>
      <AppBar />
      <TaskForm />
      <TaskList />
    </Layout>
  );
};

export default App;
