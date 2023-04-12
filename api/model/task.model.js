const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    task: { type: String },
    assignee: { type: String },
    status: { type: String },
    createDate: { type: Date },
    updatedDate: { type: Date },
    createdBy: { type: String },
    updatedBy: { type: String },
  },
  { timestamps: { createDate: "created_at", updatedDate: "updated_at" } }
);

const Task = mongoose.model("tasks", taskSchema);

module.exports = {
  Task,
};
