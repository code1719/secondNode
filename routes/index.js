const express = require("express");
const router = express.Router();
const techMessage = require("../controllers/techController"); // Corrected import name

app.get("/", (req, res) => {
    res.send("Hello World!");
})
router.get("/ttech", techMessage.ttechMessage); // Use techMessage instead of techController

module.exports = router;
