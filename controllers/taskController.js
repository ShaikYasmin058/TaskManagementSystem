const Task = require('../models/Task');
const User = require('../models/User');

exports.createTask = async (req, res) => {
  const { title, description, dueDate, status } = req.body;
  try {
    const task = await Task.create({
      title,
      description,
      dueDate,
      status,
      owner: req.user._id
    });
    res.status(201).json(task);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getTasks = async (req, res) => {
  try {
    const { q, status } = req.query;
    const filter = {};
    // admin sees all tasks, normal user only their tasks
    if (req.user.role !== 'admin') {
      filter.owner = req.user._id;
    }
    if (status) filter.status = status;
    if (q) filter.title = { $regex: q, $options: 'i' };

    const tasks = await Task.find(filter).populate('owner', 'name email role').sort({ dueDate: 1 });
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id).populate('owner', 'name email');
    if (!task) return res.status(404).json({ message: 'Task not found' });
    // restrict normal users
    if (req.user.role !== 'admin' && task.owner._id.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: 'Not allowed' });
    }
    res.json(task);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.updateTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ message: 'Task not found' });
    if (req.user.role !== 'admin' && task.owner.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: 'Not allowed' });
    }
    const updates = ['title','description','dueDate','status'];
    updates.forEach(k => {
      if (req.body[k] !== undefined) task[k] = req.body[k];
    });
    await task.save();
    res.json(task);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.deleteTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ message: 'Task not found' });
    if (req.user.role !== 'admin' && task.owner.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: 'Not allowed' });
    }
    await task.remove();
    res.json({ message: 'Task deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};
