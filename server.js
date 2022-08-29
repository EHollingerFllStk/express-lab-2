// require packages/dependencies
const express = require("express");
const res = require("express/lib/response");

// initialize the express application
const app = express();

// define routes
app.get("/greeting:Beth", function(request, response){
    response.send('Hello stranger!')
});

// tell the app to listen on port...
app.listen(3000, function(){
    console.log("What's up Beth?")
})
