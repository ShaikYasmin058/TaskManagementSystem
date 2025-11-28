// const express = require('express');
// const router = express.Router();
// const { protect } = require('../middleware/authMiddleware');
// const {
//   createTask, getTasks, getTask, updateTask, deleteTask
// } = require('../controllers/taskController');

// router.use(protect);

// router.post('/', createTask);
// router.get('/', getTasks);
// router.get('/:id', getTask);
// router.put('/:id', updateTask);
// router.delete('/:id', deleteTask);

// module.exports = router;


import express from "express";
import { Task } from "../models/Task.js";
import { auth } from "../middleware/authMiddleware.js";
import { allowRoles } from "../middleware/roleMiddleware.js";

const router = express.Router();

/**
 * CREATE TASK
 * Allowed: user, manager, admin
 */
router.post("/", auth, async (req, res) => {
  try {
    const newTask = await Task.create({
      title: req.body.title,
      description: req.body.description,
      dueDate: req.body.dueDate,
      status: req.body.status,
      owner: req.user.id
    });

    res.status(201).json(newTask);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


/**
 * GET TASKS
 * user → only own tasks
 * manager/admin → all tasks
 */
router.get("/", auth, async (req, res) => {
  try {
    let filter = {};

    if (req.user.role === "user") {
      filter = { owner: req.user.id };
    }

    const tasks = await Task.find(filter).populate("owner", "name email");

    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


/**
 * UPDATE TASK
 * user → only own task
 * manager/admin → any task
 */
router.put("/:id", auth, async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ msg: "Task not found" });

    // user can update only own tasks
    if (req.user.role === "user" && task.owner.toString() !== req.user.id) {
      return res.status(403).json({ msg: "Not allowed" });
    }

    // update fields
    task.title = req.body.title ?? task.title;
    task.description = req.body.description ?? task.description;
    task.dueDate = req.body.dueDate ?? task.dueDate;
    task.status = req.body.status ?? task.status;

    await task.save();

    res.json(task);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


/**
 * DELETE TASK
 * user → only own task
 * manager/admin → delete any task
 */
router.delete("/:id", auth, async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ msg: "Task not found" });

    // check permissions
    if (req.user.role === "user" && task.owner.toString() !== req.user.id) {
      return res.status(403).json({ msg: "Not allowed to delete this task" });
    }

    await task.deleteOne();

    res.json({ msg: "Task deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
