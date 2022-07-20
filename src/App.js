// First component i.e App
import React, { useState } from "react";
import "./App.css";
//import bootstrap
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
//import the react router
// import {BrowserRouter as Router,Route} from "react-router-dom";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar.component";
import CreateUserComponent from "./components/CreateUser.component";
import CreateTaskComponent from "./components/CreateTask.component";
import TaskList from "./components/TaskList";
import { tasks } from "./components/data/tasks";

function App() {
  const [formData, setformData] = useState({
    taskName: "",
    creationDate: "",
    submissionDate: "",
    taskDescription: "",
    files: "",
    assignee: "",
    approved: "",
    status: "",
    durationType: "",
    duration: 1,
  });

  const [taskData, settaskData] = useState(tasks);

  function handleChange(event) {
    let key = event.target.id;
    let value =
      event.target.type === "radio"
        ? (value = event.target.selected)
        : event.target.value;

    setformData({ ...formData, [key]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let taskDataFromForm = {
      taskName: formData.taskName,
      creationDate: formData.creationDate,
      description: formData.taskDescription,
      files: [formData.files],
      assignee: {
        userId: 1,
        firstName: formData.assignee.split(" ")[0],
        lastName: formData.assignee.split(" ")[1],
        email: "",
      },
      duration: formData.duration,
      durationType: formData.durationType,
      submissionDate: formData.submissionDate,
      approved: formData.approved === "yes" ? true : false,
      status: formData.status,
    };
    let newTaskData = [...tasks, taskDataFromForm];

    settaskData(newTaskData);

    setformData({
      taskName: "",
      creationDate: "",
      submissionDate: "",
      taskDescription: "",
      files: "",
      assignee: "",
      approved: "",
      status: "",
      durationType: "",
      duration: 1,
    });
  }

  return (
    <Router>
      <div className="container-fluid">
        <Navbar />
      </div>
      <div className="container">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <TaskList
                showNavBar={true}
                handleChange={handleChange}
                formData={formData}
                handleSubmit={handleSubmit}
                taskData={taskData}
              />
            }
          ></Route>
          <Route
            exact
            path="/task"
            element={
              <CreateTaskComponent
                showNavBar={false}
                formData={formData}
                taskData={taskData}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
              />
            }
          ></Route>
          <Route exact path="/user" element={<CreateUserComponent />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
