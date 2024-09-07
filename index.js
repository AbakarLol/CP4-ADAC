import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

/* Inintialize base values */
const app = express();
const port = 3000;
const API_URL = "https://rawcdn.githack.com/kamikazechaser/administrative-divisions-db/master/api/"


/* Middleware for static files Like styles or images
and Parser Middleware to parse pass data between front and back */
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));


/* Render The first page on landing */
app.get("/", (req, res) => {
    res.render("index.ejs");
});


/* The /indexed/:id use to get the area where the map was 
clicked by passing the id of the country or island to the 
back and use axio 
 */
app.get("/indexed/:id", async (req, res) => {
    const id = req.params.id;
    try{
        const response = await axios.get(API_URL + id + ".json");
        const result = response.data;
        res.render("index.ejs", {data : result});
       }catch(error){
        console.log(`Failed to make a request: ${ error.message}` );
        res.render("index.ejs", { data : error.data });

        }
    } );
       


/* Create a Server which is listening to the port 3000 */
app.listen(port, () => {
    console.log(`Server Running on port : ${port}`);
});