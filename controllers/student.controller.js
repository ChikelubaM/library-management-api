const Student = require('../models/student.model');

const createStudent = async (req, res) => {
    try {
        const student = await Student.create(req.body);
        res.status(200).json(student);

    } catch (error) {
        res.status(500).json({message: error.message});
    };
};

const getStudents = async (req, res) => {
    try {
        const students = await Student.find({});
        res.status(200).json(students);

    } catch (error) {
        res.status(500).json({message: error.message})
    };
};

const getStudent = async (req, res) => {
    try {
        const { id } = req.params;
        const students = await Student.findById(id);
        res.status(200).json(students);

    } catch (error) {
        res.status(500).json({message: error.message});
    };
};



module.exports = {
    createStudent,
    getStudents,
    getStudent
}