const express = require("express");
const router = express.Router();
const {createAuthor, getAuthors, getAuthor, updateAuthor, deleteAuthor} = require("../controllers/author.controller");

router.post('/', createAuthor);

router.get('/', getAuthors);
router.get('/:id', getAuthor);

router.put('/:id', updateAuthor);

router.delete('/:id', deleteAuthor);


module.exports = router;