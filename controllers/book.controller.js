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

const borrowedBook = async (req, res) => {
    try {
        const { id } = req.params;
        const { studentId, attendantId, returnDate } = req.body;
        const book = await Book.findById(id);

        if (!book) {
            return res.status(400).json({ message: "Book not found!" });
        };

        if (book.status === "OUT") {
            return res.status(400).json({message: "This book is already borrowed."});
        };

        book.status = "OUT";
        book.borrowedBy = studentId;
        book.issuedBy = attendantId;
        book.returnDate = returnDate;

        await book.save();

        res.status(200).json({message: "Book borrowed successfully!", book});

    }catch (error) {
        res.status(500).json({message: error.message});
    };
};

const returnBook = async (req, res) => {
    try {
        const { id } = req.params;
        const book = await Book.findById(id);

        if (!book) {
            return res.status(404).json({ message: "Book not found!" });
        };

        if (book.status === "IN") {
            return res.status(400).json({ message: "This book is already in the library "});
        };

        book.status = "IN";
        book.borrowedBy = null;
        book.issuedBy = null;
        book.returnDate = null;

        await book.save();

        res.status(200).json({ message: "Book Returned Successfully!" });
        
    } catch (error) {
        res.status(500).json({ message: error.message });
    };
};


module.exports = {
    createBook,
    getBooks,
    getBook,
    updateBook,
    deleteBook,
    borrowedBook,
    returnBook
}