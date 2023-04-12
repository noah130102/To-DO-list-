import React from "react";

export const Task2 = ({ tasks,show }) => {
  console.log("tasks length:::", tasks);
  if (tasks.length === 0) return null;
  const TaskRow = (task, index) => {
    const entryColor = (status, index) => {
      if (status === "Completed") {
        return "text-success";
      } else if (status === "In Progress") {
        return "text-primary";
      } else if (status === "To Be Initiated") {
        return "text-danger";
      } else {
        return "";
      }
    };
    const tableColor = (status) => {
      if (status === "Completed") {
        return "table-success";
      } else if (status === "In Progress") {
        return "table-primary";
      } else if (status === "To Be Initiated") {
        return "table-danger";
      } else {
        return "";
      }
    };
    
    return (
      <tr
        key={index}
        className={`index % 2 === 0 ? "odd" : "even" ${tableColor(task.status)}`}
      >
        <td>{task.task}</td>
        <td>{task.assignee}</td>
        <td>
          <div className={`row ${entryColor(task.status)}`}>
            <div className="col-md-6">{task.status}</div>
          </div>
        </td>
      </tr>
    );
  };

  const taskTable = tasks.filter((task) => {
    if (show === 1) {
      return task.status === "Completed";
    } else if (show === 2) {
      return task.status === "To Be Initiated";
    }else if (show==3){
        return task.status === "In Progress";
    }
    return true; // show all entries if n is not 0 or 1
  }).map((task, index) => TaskRow(task, index));

  return (
    <div className="container">
      <h2>Tasks</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Task Name</th>
            <th>Assignee</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>{taskTable}</tbody>
      </table>
    </div>
  );
};
