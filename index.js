
const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});

app.use(express.json())
app.use(express.static(__dirname + "/public"))

const creatureSchema = new mongoose.Schema({
  name: { type: String },
  endangered: { type: Boolean },
  dangerLevel: { type: Number },
  habitat: { type: String },
  hasFur: { type: Boolean },
});

const Creature = mongoose.model("Creature", creatureSchema, "Creatures")

app.get("/", async (req, res) => {
  res.sendFile(__dirname + "/public/index.html")
})

app.get("/creatures", async (req, res) => {
  const creatures = await Creature.find({})
  res.json(creatures)
})

app.get("/creature/:name", async (req, res) => {
  const creatures = await Creature.findOne({ name: req.params.name })
  res.json(creatures)
})

app.post("/add", async (req, res) => {
  const newCreature = await new Creature({
    name: req.body.name,
    endangered: req.body.endangered,
    dangerLevel: req.body.dangerLevel,
    habitat: req.body.habitat,
    hasFur: req.body.hasFur
  }).save()

  res.json(newCreature)
})

app.delete("/delete/:name", async (req, res) => {
  const deletedCreature = await Creature.findOneAndDelete({name: req.params.name})
  res.json(deletedCreature)
})

app.patch("/update/:name", async (req, res) => {
  const updatedCreature = await Creature.findOneAndUpdate(
    {name: req.params.name},
    {endangered: req.body.endangered},
    {new: true}
  )

  res.json(updatedCreature)
})

async function startServer() {
  await mongoose.connect("mongodb+srv://SE12:CSH2025@cluster0.xfcbvkb.mongodb.net/creatures?retryWrites=true&w=majority&appName=Cluster0")
  app.listen(3000, () => {
    console.log("Server is running")
  })
}

startServer()