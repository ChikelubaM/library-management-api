const Attendant = require('../models/libraryAttendant.model');

const createAttendant = async (req, res) => {
    try {
        const attendant = await Attendant.create(req.body);
        res.status(500).json(attendant);

    } catch (error) {
        res.status(500).json({message: error.message});
    };
};

const getAttendants = async (req, res) => {
    try {
        const attendants = await Attendant.find({});
        res.status(200).json(attendants);

    } catch (error) {
        res.status(500).json({message: error.message});
    };
};



module.exports = {
    createAttendant,
    getAttendants
}