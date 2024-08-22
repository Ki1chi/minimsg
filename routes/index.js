const express = require("express");
const router = express.Router();

const messages = [
    {
        text: "Hi there!",
        user: "Amando",
        added: new Date()
    },
    {
        text: "Hello World!",
        user: "Charles",
        added: new Date()
    }
  ];

router.get('/', (req,res) => {
    res.send("Hello world")
})

router.get('/new', (req, res) => {
    res.send('hello from new')
})


module.exports = router;

