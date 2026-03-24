const express = require("express");
const router = express.Router();
const {createAttendant, getAttendants} = require("../controllers/attendant.controller");

router.post('/', createAttendant);

router.get('/', getAttendants);

module.exports = router;