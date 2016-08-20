var express = require('express');
var app = express();
var builder = require('botbuilder');
var response = require('./logic/response');

app.listen(process.env.port || 3978, function () {
  console.log('nopsbot is ready.');
  console.log(" ||  ||");
  console.log(" \\\\()//");
  console.log("//(__)\\\\");
  console.log("||    ||");
});

var connector = new builder.ChatConnector({
    appId: process.env.app_id,
    appPassword: process.env.app_password
});

var bot = new builder.UniversalBot(connector);
app.post('/api/messages', connector.listen());

bot.dialog('/', function (session) {
    response.on('/', function(result) {
        session.send(result.text);
    });
});