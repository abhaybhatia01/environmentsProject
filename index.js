const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser");

const app = express();
const envConfig = require("./config/index.js")

//routes
const booksRoutes = require("./routes/booksRoutes.js")

//
//mongoose connection
mongoose.connect(envConfig.mongodb.url).then((data)=>{
    console.log("Connected to database " + envConfig.mongodb.url)
})

// middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/books",booksRoutes)

  // Start the server
  app.listen(3000, () => {
    console.log("Listening on port 3000");
  });
  
