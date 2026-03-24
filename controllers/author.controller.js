const Author = require('../models/author.model');

const createAuthor = async (req, res) => {
    try {
        const author = await Author.create(req.body);
        res.status(200).json(author);

    } catch (error) {
        res.status(500).json({message: error.message})
    };
};

const getAuthors = async (req, res) => {
    try {
        const authors = await Author.find({});
        res.status(200).json(authors);

    } catch (error) {
        res.status(500).json({message: error.message});
    };
};

const getAuthor = async (req, res) => {
    try {
        const { id } = req.params;
        const authors = await Author.findById(id);
        res.status(200).json(authors)

    } catch (error) {
        res.status(500).json({message: error.message});
    };
};

const updateAuthor = async (req, res) => {
    try {
        const { id } = req.params;
        const author = await Author.findByIdAndUpdate(id, req.body, { new: true });

        if (!author) {
            return res.status(404).json({message: "Author not found!"});
        };

        res.status(200).json(author);

    } catch (error) {
        res.status(500).json({message: error.message});
    };
};

const deleteAuthor = async (req, res) => {
    try {
        const { id } = req.params;
        const author = await Author.findByIdAndDelete(id);

        if(!author) {
            return res.status(404).json({message: "Author not found!"});
        };

        res.status(200).json({message: "Author deleted successfully!"});

    } catch (error) {
        res.status(500).json({message: error.message});
    };
};




module.exports = {
    createAuthor,
    getAuthors,
    getAuthor,
    updateAuthor,
    deleteAuthor
}