import express from "express";
import axios from "axios";
import bodyParser from "body-parser";


const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
    res.render("index.ejs");
});


app.get("/indexed/:id", (req, res) => {
    const id = req.params.id;
    console.log(id);
    res.render("index.ejs", {id : id});
} );

app.listen(port, () => {
    console.log(`Server Running on port : ${port}`);
});