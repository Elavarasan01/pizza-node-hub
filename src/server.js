const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
// const router = express.Router();

const PizzaController=require('./controller/PizzaController')

app.get("/",PizzaController.getPizza)
app.post("/get",PizzaController.getPizzaById)
app.post("/create",PizzaController.postPizza)
app.post("/modify",PizzaController.updatePizza)
app.post("/remove",PizzaController.deletePizza)
app.post("/search",PizzaController.searchPizza)

// const PizzaRoute = require("./routes/routes");


 mongoose.connect('mongodb+srv://kselaa2010:Elavarasan@cluster0.mp3dumz.mongodb.net/pizzadb', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("connected to db");
  })
  .catch((err) => {
    console.error(err);
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = process.env.PORT || 2000;
app.get("/node", (req, res) => {
    res.send('Welcome to node backend');
})

app.get("/serve", (req, res) => {
    res.send('Welcome to nodejs backend serveices');
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
// app.use("/api/pizza", PizzaRoute);

// module.exports = router;
module.exports = app;