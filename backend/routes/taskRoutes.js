const express = require('express');
const router = express.Router();
const { createTask} = require('../controllers/taskcontrollers'); 
router.post('/', createTask);
module.exports = router;
