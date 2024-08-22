const express = require("express");
const app = express();
const indexRouter = require('./routes/index')

app.set("view engine", "ejs")

// app.get('/', (req,res) => {
//     res.send('hello')
// })



app.use('/', indexRouter);



app.listen(8080)