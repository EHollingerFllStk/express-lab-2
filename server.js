// require packages/dependencies
const express = require("express");
const res = require("express/lib/response");
const port = 3000

// initialize the express application
const app = express();

// define routes
app.get("/greeting:Beth", function(request, response){
    response.send('Hello stranger!')
});

// tell the app to listen on port...
// app.listen(3000, function(){
//     console.log("What's up Beth?")
// })

////Tip calc////
app.get("/tip/:total/:tipPercentage", function(request, response){
    response.send("Your tip is " + request.params.total * (request.params.tipPercentage/100))
});

///Magic Ball///

const magic = 
["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"];

app.get("/magic", function(request, response){
    response.send('Hello stranger!')
});

app.listen(3000, function(){
    console.log("What's up Beth?")
})