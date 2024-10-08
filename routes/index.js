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



router.get("/", (req, res) => {
    res.render("index", {title: "Mini Messageboard", messages});
});

router.post('/new',(req, res) => {
    messages.push({ text: req.body.author, user: req.body.msg, added: new Date() }); 
    res.redirect("/")
});



module.exports = router;

