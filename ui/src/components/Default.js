import React, { useState, useEffect } from "react";
import {
  getAllTasks,
  deleteTask,
  fetchSettings,
} from "../services/TaskService";
import { Task2 } from "./Task2";

const Default = () => {
  const handleClick = () => {
    window.location.href = "/Home";
  };

  const [tasks, setTasks] = useState([]);
  const [numberOfTasks, setNumberOfTasks] = useState([]);
  const [isTaskEdited, setTaskEdited] = useState(false);
  const [show, setshow] = React.useState(0);

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
      <div className="p-3 text-center display-9 button-container">
        <button onClick={() => setshow(1)} className="btn-success mx-2">
          Completed{" "}
        </button>
        <button onClick={() => setshow(2)} className="btn-danger mx-2">
          To Be Initiated{" "}
        </button>
        <button onClick={() => setshow(3)} className="btn-primary mx-2">
          In Progress{" "}
        </button>
      </div>
      <Task2 tasks={tasks} show={show} />

      <div className="p-3 d-flex justify-content-end">
        <button href="/Home" className="btn btn-primary" onClick={handleClick}>
          ADD
        </button>
      </div>
    </div>
  );
};

export default Default;
