import React from 'react'
import EditTaskModal from './EditTaskModal'

export const Task2 = ({tasks, deleteTask, taskEdited}) => {

    console.log('tasks length:::', tasks)
    if (tasks.length === 0) return null

    const TaskRow = (task,index) => {

        return(
              <tr key = {index} className={index%2 === 0?'odd':'even'}>
                  <td>{task.task}</td>
                  <td>{task.assignee}</td>
                  <td>
                    <div className="row">
                        <div className="col-md-6">
                        {task.status}
                        </div>
                    </div>
                  </td>
              </tr>
          )
    }

    const taskTable = tasks.map((task,index) => TaskRow(task,index))

    return(
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
                <tbody>
                    {taskTable}
                </tbody>
            </table>
        </div>
    )
}