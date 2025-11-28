const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');
const { isAdmin } = require('../middleware/roleMiddleware');
const { getAllUsers } = require('../controllers/userController');

router.get('/', protect, isAdmin, getAllUsers);

module.exports = router;
