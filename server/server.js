const express = require('express')
const app = express();

app.get("/api", (req, res) => {
    res.send("Ilgar pidor")
})

app.listen(3000, () => {console.log("shit is working at port 5000")})