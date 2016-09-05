const express = require("express")
const app = express()

app.use(express.static(__dirname + "/build"))
app.use("/api", require("./api/routes"))

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/build/index.html")
}).listen(process.env.PORT || 3001)