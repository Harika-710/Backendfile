let students = [
    { id:1, name: "Arun", email: "arun@gmail.com", course: "B.Tech"},
    { id:2, name: "Priya", email: "priya@gmail.com", course: "B.Tech"},
    { id:3, name: "Kumar", email: "kumar@gmail.com", course: "B.Tech"},
];
const getStudents = (req,res) => {
    res.json(students);
};


const Student = require("../models/Student");

const createStudent = async (req, res) => {
    try {
    console.log("req.body: ", req.body);
    const student = await Student.create(req.body);
    res.status(201).json(student);
    }catch(err){
    res.status(400).json({ message: err.message });
}
    };

module.exports = {
    getStudents,
    createStudent
};