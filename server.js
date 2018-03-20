var express = require("express");
var methodOverride = require("method-override");
var bodyParser = require("body-parser");
var path = require("path");

var port = process.env.PORT || 8080;

var app = express();

var orm = require("./config/orm.js");


// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(path.join(__dirname, "public")));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride('_method'));


// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller.js");

app.use("/", routes);
app.use("/update", routes);
app.use("/create", routes);

app.listen(port);