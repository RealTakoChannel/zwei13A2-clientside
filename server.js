/**
 * This file is the entrance of the front end server
 * running this server, will start the server at port 8080,
 * and provide user with the index.html as homepage.
 */
// import modules
const express=require("express");
const bodyParser=require("body-parser");
const path=require("path");
// assign host and port
const host = 'localhost';
const port = 8080;

// initialize server
const app = express();

//to parse URL-encoded & JSON data
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//serve static files
app.use(express.static(path.join(__dirname, 'public')));

//route to serve index.html
app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"app/index.html"));
});

//route to serve search.html
app.get("/search",(req,res)=>{
    res.sendFile(path.join(__dirname,"app/search.html"));
});
app.get('/fundraiser', (req, res) => {
    res.sendFile(__dirname + '/app/fundraiser.html');
});

// open the server on 8080
app.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});