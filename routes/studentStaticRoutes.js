const express = require("express");
const {
    getStudents,
    createStudent 
} = require("../controllers/studentMongoController");

const router = express.Router();

router.get("/", getStudents);
router.post("/", createStudent);

http://localhost:3000/api/students/getStudent
module.exports = router;