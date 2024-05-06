import express from "express";
const app = express();
app.listen(5000, () => {
  console.log("Listening on port 5000");
});
app.use((_req, res) => {
  res.status(404).json({ error: "Endpoint not found" });
});
//# sourceMappingURL=index.js.map
