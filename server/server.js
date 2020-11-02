// /server/server.js
// for express
const express = require("express");
const cors = require("cors");
// const path = require("path");

//initialize app with express
const app = express();

// middleware for dependencies
app.use(express.json());
app.use(cors());

//a simple crud function for posting
const posts = require("./routes/api/posts");
// const users = require("./routes/api/users");

app.use("/api/posts", posts);

// mock data to send to our frontend
let events = [
  {
    id: 1,
    name: "Charity Ball",
    category: "Fundraising",
    description:
      "Spend an elegant night of dinner and dancing with us as we raise money for our new rescue farm.",
    featuredImage: "https://placekitten.com/500/500",
    images: [
      "https://placekitten.com/500/500",
      "https://placekitten.com/500/500",
      "https://placekitten.com/500/500",
    ],
    location: "1234 Fancy Ave",
    date: "12-25-2019",
    time: "11:30",
  },
  {
    id: 2,
    name: "Rescue Center Goods Drive",
    category: "Adoptions",
    description:
      "Come to our donation drive to help us replenish our stock of pet food, toys, bedding, etc. We will have live bands, games, food trucks, and much more.",
    featuredImage: "https://placekitten.com/500/500",
    images: ["https://placekitten.com/500/500"],
    location: "1234 Dog Alley",
    date: "11-21-2019",
    time: "12:00",
  },
];

//handle production
if (process.env.NODE_ENV === "production") {
  //static folder - __dirname = current directory  and concatenate instead of using path module
  //look at that folder as our static folder
  app.use(express.static(__dirname + "/public/"));

  //handle spa - for any route
  app.get(/.*/, (req, res) => res.sendFile(__dirname + "/public/index.html"));
}

//port for heroku, localhost will run on 5000
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));