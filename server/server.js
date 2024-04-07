const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.get("/api", (req, res) => {
    res.send("Ilgar pidor");
});

app.listen(5000, () => {console.log("shit is working at port 5000")});