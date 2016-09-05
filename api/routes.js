const express = require("express")
const router = express.Router()

router.get("/teams", require("./teams"))
router.get("/rosters", require("./rosters"))
router.get("/transfers", require("./transfers"))

module.exports = router
