const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.get("/api", (req, res) => {
    res.send("Uraaaa! It works!");
});

app.listen(5000, () => {console.log("server is working at port 5000")});