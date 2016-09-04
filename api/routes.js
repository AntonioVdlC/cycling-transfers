const express = require("express")
const router = express.Router()

router.get("/en", require("./en"))

module.exports = router
