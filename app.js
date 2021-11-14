const express = require("express");

const path = require("path"); //I have no idea what this is for but it's a core module apparently.
const logger = require("morgan");

const https = require("https");

const app = express();

const _ = require("lodash");

const neo4j = require("neo4j-driver"); //The MOST IMPORTANT BIT OF THIS APP.

const driver =  neo4j.driver("bolt://localhost", neo4j.auth.basic("neo4j"), "TAFE2021");

var session = driver.session(); //create a session variable.

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