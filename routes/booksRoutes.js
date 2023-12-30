const express = require("express")
const router = express.Router()
const Book = require("../models/bookModel")


router.get("/", async (req, res) => {
    try {

        const books = await Book.find({});

        if (books.length ==0) {
            return res.status(404).send({done:false, error:{message:"Books not found"}});
        } else {
            return res.status(200).send({done:true, books});
        }
    } catch (error) {
        console.log(error)
        return res.status(500).send({done:false, error:error.message});

    }
});

// Create a new book
router.post("/", async (req, res) => {
    try {
      const book = new Book({
        title: req.body.title,
        author: req.body.author,
        publicationDate: req.body.publicationDate,
        genre: req.body.genre,
        language: req.body.language,
        pages: req.body.pages
      });
  
      await book.save();
  
        return res.status(200).send({done:true, book});
    } catch (error) {
        console.log(error)
        return res.status(500).send({done:false, error:error.message});

    }
  });
  
// Get a single book
router.get("/:id", async (req, res) => {
    try {
        const bookId = req.params.id;

        if(!bookId){
            return res.status(400).send({done:false, error:{message:"bookId is requred"}});
        }
        const book = await Book.findById(bookId);

        if (!book) {
            return res.status(404).send({done:false, error:{message:"Book not found"}});
        } else {
            return res.status(200).send({done:true, book});
        }
    } catch (error) {
        console.log(error)
        return res.status(500).send({done:false, error:error.message});

    }
});

// Update a book
router.put("/:id", async (req, res) => {
    try {
        const bookId = req.params.id;
        if(!bookId){
            return res.status(400).send({done:false, error:{message:"bookId is requred"}});
        }
        let book = await Book.findById(bookId);

        if (!book) {
            return res.status(404).send({done:false, error:{message:"Book not found"}});
        } else {
            book = await Book.findByIdAndUpdate(book._id,req.body,{new:true})

            return res.status(200).send({done:true, book});
        }
    } catch (error) {
        console.log(error)
       return res.status(500).send({done:false, error:error.message});
    }
});
  
// Delete a book
router.delete("/:id", async (req, res) => {
    try {
        const bookId = req.params.id;
        if(!bookId){
            return res.status(400).send({done:false, error:{message:"bookId is requred"}});
            }
        let book = await Book.findByIdAndDelete(bookId);
        if(!book){
            return res.status(404).send({ done: false, error: { message: "Book not found" } });
        }
        return res.status(200).send({ done: true, book });
 
    } catch (error) {
      console.log(error);
      return res.status(500).send({ done: false, error: error.message });
    }
  });

  
  module.exports = router