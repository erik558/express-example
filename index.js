import express from "express";

const app = express();

app.use(express.static('public'))

app.use(express.json())

app.get("/", (req, res) => {
     req.redirect("/index.html")
});

app.get("/hello", (req, res) => {
     res.send("yay")
})

app.get("/bye", (req, res) => {
     res.send({
          name: "Erik"
     })
});

app.post("/hi", (req, res) => {
     console.log(req.body.name);
     res.send("Soo good!")
});

app.listen(3001)