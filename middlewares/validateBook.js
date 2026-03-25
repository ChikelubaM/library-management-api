
const validateBook = (req, res, next) => {
    const { title, isbn } = req.body;

    if (!title || !isbn ) {
        return res.status(400).json({ message: "Please fill all the infomations correctly" });
    };

    next();
}


module.exports = { validateBook };