const express = require("express");
const router = express.Router();
const { createBook, getBooks, getBook, updateBook, deleteBook, borrowedBook, returnBook } = require("../controllers/book.controller");

router.post('/', createBook);
router.post('/:id/borrow', borrowedBook);
router.post('/:id/return', returnBook);

router.get('/', getBooks);
router.get('/:id', getBook);

router.put('/:id', updateBook);

router.delete('/:id', deleteBook);


module.exports = router;