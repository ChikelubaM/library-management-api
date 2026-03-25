const express = require("express");
const router = express.Router();
const { createBook, getBooks, getBook, updateBook, deleteBook, borrowedBook, returnBook, getOverdueBooks } = require("../controllers/book.controller");
const { validateBook } = require("../middlewares/validateBook");

router.post('/', validateBook, createBook);
router.post('/:id/borrow', borrowedBook);
router.post('/:id/return', returnBook);

router.get('/', getBooks);
router.get('/overdue', getOverdueBooks);
router.get('/:id', getBook);

router.put('/:id', updateBook);

router.delete('/:id', deleteBook);


module.exports = router;