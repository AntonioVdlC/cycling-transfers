const transfers = require("../data/transfers.json")

module.exports = (req, res) => {
    res.json(transfers)
}
