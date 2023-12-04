const express = require ("express");
const router = express.Router();
const techController = require("./controllers/techController");

router.get ("/ttech", techController.ttechMessage);

console.log(require.resolve('./controllers/techController'));

module.exports = router;