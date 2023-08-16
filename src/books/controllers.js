const Book = require("./model")
const Author = require("../authors/model")

const addBook = async (req, res) => {
    try {
        const author = await Author.findOne({
            where: {
                authorName: req.body.author
            }
        })

        const newBook = await Book.create({
            title: req.body.title,
            author: req.body.author,
            AuthorId: author.id 
        })
        // const newBook = await Book.create(req.body)

        res.status(200).json({message: "Success", book: newBook })
    } catch (error)  {
        res.status(501).json({message: error.message, error: error})
        console.log(error)
    }
}

const getAllBooks = async (req, res) => {
    try  {
        const books = await Book.findAll()
        res.status(200).json({message: "Success", books: books})
    } catch (error) {
        res.status(501).json({message: error.message, error: error})
        console.log(error)
    }
}

// updates author of book
const updateBook = async (req, res) => {
    try {
        const updateBook = await Book.update(
            {
                author: req.body.newAuthor
            },
            {
                where: {
                    title: req.body.title
                }
            }
        )
        res.status(200).json({message: "Success", updateBook: updateBook})
    } catch (error) {
        res.status(501).json({message: error.message, error: error})
        console.log(error)
    }
}

const deleteBook = async (req, res) => {
    try  {
        const deleteBook = await Book.destroy({
            where: {
                title: req.body.title
            }
        })
        res.status(201).json({message: "Success", book: deleteBook})
    } catch (error) {
        res.status(501).json({message: error.message, error: error})
        console.log(error)
    }
}

module.exports = {
    addBook,
    getAllBooks,
    updateBook,
    deleteBook
}