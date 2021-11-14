const express = require("express");

const path = require("path"); //I have no idea what this is for but it's a core module apparently.
//const logger = require("morgan");

const https = require("https");

const app = express();

const _ = require("lodash");

const neo4j = require("neo4j-driver"); //The MOST IMPORTANT BIT OF THIS APP.

const uri ="bolt://localhost:7687";
const password = "12345";
const username = "neo4j";

const driver =  neo4j.driver(uri, neo4j.auth.basic(username, password));

var session = driver.session(); //create a session variable.

app.use(express.urlencoded({extended: true}));

app.set('view engine', 'ejs');





app.get("/", function(req, res){


    session
        .run('MATCH(n) RETURN n LIMIT 10')
        .then(function(result){
            result.records.forEach(function(record){
                console.log(record);
            })
        })
        .catch(function(err){
            console.log(err);
        });

        res.send("deez heavy nutz G")
    //res.render("home"); 
    //console.log("deez nutz");

})

app.post("/", function(req, res){
    
})

app.listen(3030, function(){
    console.log("live on port 3030");
})