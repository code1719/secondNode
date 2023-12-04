const express = require("express");
const router = express.Router();
const controllers = require("../controllers/techController"); 

controllers.forEach(controller => {
    router.get(controller.path, controller.handler);
});

module.exports = router;
