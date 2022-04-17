//jshint esversion:6


const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');

const app = express();
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors());


app.post("/", (req, res) => {
        const body = JSON.parse(Object.keys(req.body))
        if(body.Username === "admin" && body.password === "adminpass"){
        res.status(200).send("success")
    } else {
        res.send("failed")
        
    }
})


app.listen(3001, ()=> {
    console.log("server started")
})