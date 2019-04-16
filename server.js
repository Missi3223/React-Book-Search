const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
<<<<<<< HEAD

=======
const databaseUri = "mongodb://localhost/BookSearch";
>>>>>>> 7f727045987931c5f7f2ff4e7695601ddbc33c52
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

<<<<<<< HEAD
=======
if (process.env.MONGODB_URI) {
  mongoose.connect(process.env.MONGODB_URI);
} else {
  mongoose.connect(databaseUri);
}
console.log(databaseUri);

>>>>>>> 7f727045987931c5f7f2ff4e7695601ddbc33c52
// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
