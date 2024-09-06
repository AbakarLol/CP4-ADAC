import express from "express";
import axios from "axios";
import bodyParser from "body-parser";


const app = express();
const port = 3000;
const API_URL = "https://rawcdn.githack.com/kamikazechaser/administrative-divisions-db/master/api/"

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
    res.render("index.ejs");
});


app.get("/indexed/:id", async (req, res) => {
    const id = req.params.id;
    try{
        const response = await axios.get(API_URL + id + ".json");
        const result = response.data;
        console.log(result);
        res.render("index.ejs", {data : result});
       }catch(error){
        console.log(`Failed to make a request: ${ error.message}` );
        res.render("index.ejs", { data : error.data });

        }
    } );
       



app.listen(port, () => {
    console.log(`Server Running on port : ${port}`);
});