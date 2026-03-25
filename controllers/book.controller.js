const Book = require('../models/book.model');

const createBook =  async (req, res) => {
    try {
        if (!req.body.authors || req.body.authors.length === 0) {
            return res.status(400).json({message: "Book must include at least one author ID."})
        };

        const book = await Book.create(req.body);
        res.status(200).json(book);

    } catch (error) {
        res.status(500).json({message: error.message});
    };
};

const getBooks = async (req, res) => {
    try {
        const books = await Book.find({});
        res.status(200).json(books);

    } catch (error) {
        res.status(500).json({message: error.message});
    };
};

const getBook = async (req, res) => {
    try {
        const { id } = req.params;
        const books = await Book.findById(id)
            .populate("authors")
            .populate("borrowedBy")
            .populate("issuedBy");

        res.status(200).json(books);

    } catch (error) {
        res.status(500).json({message: error.message});
    };
};

const updateBook = async (req, res) => {
    try {
        const { id } = req.params;
        const book = await Book.findByIdAndUpdate(id, req.body, { new: true });

        if (!book) {
            return res.status(404).json({message: "Book not found!"});
        };

        res.status(200).json(book);

    } catch (error) {
        res.status(500).json({message: error.message});
    };
};

const deleteBook = async (req, res) => {
    try {
        const { id } = req.params;
        const book = await Book.findByIdAndDelete(id);

        if (!book) {
            return res.status(404).json({message: "Book not found!"});
        };
        res.status(200).json({message: "Book deleted successfully!"});

    } catch (error) {
        res.status(500).json({message: error.message});
    };
};


module.exports = {
    createBook,
    getBooks,
    getBook,
    updateBook,
    deleteBook
}