const express = require("express");
const Note = require("./models/note");
const connectDb = require("./config/connectDb");
const cors = require("cors");

// Load envs
if (process.env.NODE_EN !== "production") {
  require("dotenv").config();
}

const app = express();

app.use(cors());

//configure express app
app.use(express.json());

// Connect to MongoDB
connectDb();

// Define routes
app.get("/", (req, res) => {
  res.send("hello");
});

app.get("/getallnotes", async (req, res) => {
  try {
    const notes = await Note.find();
    res.json({ note: notes });
  } catch (err) {
    console.log(err);
  }
});

app.post("/addnotes", async (req, res) => {
  const { title, body } = req.body;
  try {
    const note = await Note.create({ title, body });
    res.json({ data: note });
  } catch (err) {
    console.error("Error creating note:", err);
    res.status(500).json({ error: err.message });
  }
});

app.get("/getnote/:id", async (req, res) => {
  try {
    const noteid = req.params.id;
    const notes = await Note.findById(noteid);
    res.json({ note: notes });
  } catch (err) {
    console.log(err);
  }
});

app.put("/udpatenote/:id", async (req, res) => {
  try {
    const noteid = req.params.id;

    const title = req.body.title;
    const body = req.body.body;

    const note = await Note.findByIdAndUpdate(
      noteid,
      {
        title: title,
        body: body,
      },
      { new: true }
    );

    if (!note) {
      return res.status(404).json({ error: "Not found " });
    }

    res.json({ note: note });
  } catch (err) {
    console.log(err);
  }
});

app.delete("/deletenote/:id", async (req, res) => {
  try {
    const noteid = req.params.id;
    await Note.deleteOne({ _id: noteid });
    res.json({ sucess: "Recodrd Deleted" });
  } catch (err) {
    console.log(err);
  }
});

// Start server
app.listen(process.env.PORT, () => {
  console.log("Server is running on port", process.env.PORT);
});
