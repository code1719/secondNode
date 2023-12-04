const express = require("express");
const router = express.Router();
const techMessage = require("../controllers/techController"); // Corrected import name

router.get("/ttech", techMessage.ttechMessage); // Use techMessage instead of techController

module.exports = router;
