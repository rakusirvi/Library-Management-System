const express = require("express");

const app = express();

const port = 4050;

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Home Page :-)",
  });
});

// app.all(/.*/, (req, res) => {
//   res.status(404).json({
//     message: "not build yet",
//   });
// });



app.listen(port, () => {
  console.log(` App is Lisnting on : http://localhost:${port}`);
});
