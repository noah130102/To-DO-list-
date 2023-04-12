import React, { useState,useEffect } from "react";
import Home from "./Home";
import { Tasks } from "./Tasks";
import { getAllTasks, deleteTask, fetchSettings } from '../services/TaskService'
import { Task2 } from "./Task2";

const Default = () => {
  const handleClick = () => {
    window.location.href = "/Home";
  };

  const [tasks, setTasks] = useState([]);
  const [numberOfTasks, setNumberOfTasks] = useState([]);
  const [isTaskEdited, setTaskEdited] = useState(false);

  useEffect(() => {
    getAllTasks().then((tasks) => {
      console.log(tasks);
      setTasks(tasks);
    });
  }, [numberOfTasks, isTaskEdited]);

  function delTask(taskId) {
    deleteTask(taskId).then((response) => {
      console.log(response);
      setNumberOfTasks(numberOfTasks - 1);
    });
  }

  function taskCreated() {
    setNumberOfTasks(numberOfTasks + 1);
  }

  function taskEdited(res) {
    setTaskEdited(res);
  }
  return (
    <div className="justify-content-center">
      <div className="p-3 text-center display-2">To Do List</div>
      
      <Task2 tasks={tasks} deleteTask={delTask} taskEdited={taskEdited}></Task2>

      <div className="p-3 d-flex justify-content-end">
        <button href="/Home" className="btn btn-primary" onClick={handleClick}>
          ADD
        </button>
      </div>
    </div>
  );
};

export default Default;
