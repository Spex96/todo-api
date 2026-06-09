const tasks = require("../data/tasks");

// GET /tasks
const getAllTasks = (req, res) => {
  res.json(tasks);
};

// GET /tasks/:id
const getTaskById = (req, res) => {
  const id = parseInt(req.params.id);

  const task = tasks.find((task) => task.id === id);

  if (!task) {
    return res.status(404).json({
      message: "Task not found",
    });
  }

  res.json(task);
};

// POST /tasks
const createTask = (req, res) => {
  const { title } = req.body;

  const newTask = {
    id: tasks.length + 1,
    title,
    completed: false,
  };

  tasks.push(newTask);

  res.status(201).json(newTask);
};

// PUT /tasks/:id
const updateTask = (req, res) => {
  const id = parseInt(req.params.id);

  const task = tasks.find((task) => task.id === id);

  if (!task) {
    return res.status(404).json({
      message: "Task not found",
    });
  }

  task.title = req.body.title ?? task.title;
  task.completed = req.body.completed ?? task.completed;

  res.json(task);
};

// DELETE /tasks/:id
const deleteTask = (req, res) => {
  const id = parseInt(req.params.id);

  const index = tasks.findIndex((task) => task.id === id);

  if (index === -1) {
    return res.status(404).json({
      message: "Task not found",
    });
  }

  tasks.splice(index, 1);

  res.json({
    message: "Task deleted successfully",
  });
};

module.exports = {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
};