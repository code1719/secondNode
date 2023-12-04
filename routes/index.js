const express = require("express");
const router = express.Router();
const controllers = require("../controllers/techController");

router.get("/", controllers.hello);
router.get("/ttech", controllers.techMessage);

module.exports = router;
