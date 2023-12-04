const express = require ("express");
const router = express.Router();
const techController = require("../controllers/techController.js");

router.get ("/ttech", techController.ttechMessage);

module.exports = router;