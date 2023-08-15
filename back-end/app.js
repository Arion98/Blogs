const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
const Posts = require ("./routes/Posts")
const Usuarios = require ("./routes/Usuarios")

const PORT =  8081;

app.use(cors());
app.use(bodyParser.json());
app.use(Posts);
app.use(Usuarios);


app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});


