const fs = require("fs");

/*
    API
*/
let express = require("express");
let bodyParser = require("body-parser");
let routes = require("./routes");
let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

routes(app);

let server = app.listen(90, function() {
    console.log("[API] API is now running on port " + server.address().port + "!");
});