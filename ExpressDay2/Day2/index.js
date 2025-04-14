import express from "express";

const app = express();
const PORT = 8080;

// Route for the root path
app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`server running on this ${PORT}`);
});
