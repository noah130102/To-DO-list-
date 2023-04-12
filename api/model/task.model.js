const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    task: { type: String, required: true },
    assignee: { type: String, required: true },
    status: { type: String, required: true },
    createDate: { type: Date, required: true },
    updatedDate: { type: Date, required: true },
    createdBy: { type: String, required: true },
    updatedBy: { type: String, required: true },
  },
  { timestamps: { createDate: "created_at", updatedDate: "updated_at" } }
);

const Task = mongoose.model("tasks", taskSchema);

module.exports = {
  Task,
};
