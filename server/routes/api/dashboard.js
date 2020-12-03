// const { request } = require("express");
const express = require("express");
const mongodb = require("mongodb");

const router = express.Router();

// const client = mongodb.MongoClient.connect(
//   "mongodb+srv://capstonecovid:capstonecovid@covidcluster.w5yhl.mongodb.net/<dbname>?retryWrites=true&w=majority",
//   {
//     useNewUrlParser: true,
//   }
// );



//get posts
router.get("/", async (req, res) => {
  const posts = await loadPostsCollection(req);
  //send an array of posts in the db

  //{query to find text that matches but leave it empty to recieve all as an array}
  console.log("array ready to send");
  res.send(await posts.find({}).toArray());
});

// router.get("/", async(req, res) => {
//   const posts = await loadPostsCollection();
//   console.log(req.body.email);
//   res.send(await posts.find({}).toArray());
// })

//add posts
router.post("/", async (req, res) => {
  const posts = await loadPostsCollection(req);
  await posts.insertOne({
    text: req.body.text,
    createdAt: new Date(),
  });
  res.status(201).send();
});

//delete posts
//deleting by id, deleteOne sends a query with _id and as a paramter request.params.id but _id is a mongodb object id
//and has to be wrapped in method that's attached to the mongodb client (new mongoDb.ObjectID())
router.delete("/:id", async (req, res) => {
  const posts = await loadPostsCollection();
  await posts.deleteOne({ _id: new mongodb.ObjectID(req.params.id) });
  res.status(200).send();
});

router.put("/", async (req, res) => {
  const posts = await loadPostsCollection(req);
  console.log(req.body);

  const query = {email: req.body.form.email};
  const update = { $set: {form: req.body.form, location: req.body.location } };
  const options = {"upsert": true}
    
  await posts.updateOne(query, update, options, function(err, res) {
    if(err) throw err;
    console.log("1 document updtaed");
  })
})

//function to connect to posts collection
//async await is elegant way to handle async data and promises
async function loadPostsCollection(req) {
  // const client = await mongodb.MongoClient.connect(
  //   "mongodb+srv://capstonecovid:capstonecovid@covidcluster.w5yhl.mongodb.net/<dbname>?retryWrites=true&w=majority",
  //   {
  //     useNewUrlParser: true,
  //   }
  // );
  const client = req.app.locals.db;
  let array = [];
  array = await client.db("db-name").collection("users");
  return array;
}

module.exports = router;
