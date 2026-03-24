const express = require("express");
const router = express.Router();
const {createStudent, getStudents, getStudent} = require("../controllers/student.controller");

router.post('/', createStudent);

router.get('/', getStudents);
router.get('/:id', getStudent);

module.exports = router;
