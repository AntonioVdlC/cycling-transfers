const express = require("express")
const router = express.Router()

router.get("/teams", require("./teams"))

module.exports = router
