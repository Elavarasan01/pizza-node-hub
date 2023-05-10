const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const router = express.Router();

const PizzaController=require('./controller/PizzaController')

router.get("/",PizzaController.getPizza)
router.post("/get",PizzaController.getPizzaById)
router.post("/create",PizzaController.postPizza)
router.post("/modify",PizzaController.updatePizza)
router.post("/remove",PizzaController.deletePizza)
router.post("/search",PizzaController.searchPizza)

// const PizzaRoute = require("./routes/routes");

const app = express();

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

module.exports = router;
module.exports = app;