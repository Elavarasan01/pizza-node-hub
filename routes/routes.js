const express=require("express")

const router=express.Router();

const Pizza=require("../controller/PizzaController")

router.get("/",Pizza.getPizza);
router.post("/get",Pizza.getPizzaById);
router.post("/create",Pizza.postPizza);
router.post("/modify",Pizza.updatePizza);
router.post("/remove",Pizza.deletePizza);
router.post("/search",Pizza.searchPizza);

module.exports=router;