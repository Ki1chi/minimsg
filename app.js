const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs")


const index = require('./routes/index')
const newMsg = require('./routes/new')



app.use('/', index);

app.use('/new', newMsg);



app.listen(8080)