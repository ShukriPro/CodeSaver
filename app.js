// Import the 'express' framework to create a web application.
const express = require('express');

// Import the 'mysql' library to interact with MySQL databases.
const mysql = require("mysql");

// Create an instance of the 'express' application.
const app = express();

// This line makes files in the "public" folder available to the website visitors.
app.use(express.static("public"));

// This line says we'll use "pug" to create web pages that show dynamic content.
app.set("view engine", "pug");

// This line tells the app that our web page templates are in the "./views" folder.
app.set("views", "./views");


// This line starts the server on port 3000 and displays a message when it's running.
app.listen(3000, () => {
  console.log('Server is running on 3000')
})

// This section is used to set up a connection to a MySQL database.
// It contains information about the database server, user, password, and database name.
const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "realstate"
});
// This sets up a route for the homepage ("/").
// When someone visits the homepage, the server responds by rendering the "index" template.
app.get("/", (req, res) => {
  // This section queries the database to retrieve distinct suburbs from the 'properties' table.
  // Then, it queries for up to 12 rows of property data and sends both sets of data to the template.
  conn.query("SELECT DISTINCT suburb FROM properties", (err, suburbs) => {
    if (err) {
      console.log(err); // Log an error if there's a problem with the query.
    }
    //console.log(suburbs);
    // This section queries for up to 12 rows of property data from the 'properties' table.
    conn.query("SELECT * FROM properties LIMIT 12", (err, properties) => {
      if (err) {
        console.log(err); // Log an error if there's a problem with this query.
      }
      //console.log(properties); // Log the property data to the console.
      // Finally, send both sets of data to the "index" template for rendering.
      res.render("index", {
        title: 'Home Page',
        suburbs,
        properties
      });
    });
  });
});

app.get("/:suburb", (req, res) =>{
  const suburb = req.pramns.suburb;
  const page = parseInt(req.query.page) || 1;
  const perPage = 12;


});


app.get("/about", (req, res) =>{
  res.render("about", {
    title: 'About Page'
  });
});
