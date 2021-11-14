const express = require("express");

const https = require("https");

const app = express();

app.use(express.urlencoded({extended: true}));

app.set('view engine', 'ejs');



app.get("/", function(req, res){

    res.render("home");
    console.log("deez nutz");

})

app.post("/", function(req, res){
    
})

app.listen(3030, function(){
    console.log("live on port 3030");
})