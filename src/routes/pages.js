const express = require("express");
const router = express.Router();

let products=[
  {id:1,name:"onion pizza",price:200},
  {id:2,name:"chicken pizza",price:300},
  {id:3,name:"panner pizza",price:250},
  {id:4,name:"corn pizza",price:150},
  {id:5,name:"mushroom pizza",price:400},
  {id:6,name:"Multi grain pizza",price:500}
]

router.get("/",(req,res,next)=>{
  res.status(200).json({message:"working"})
})
router.get("/home", (req, res, next) => {
  res.status(200).json({
    storeName: "PizzaHut",
    outlet: "Hyderabad",
    profit: 200000,
    production: "1000-pizza/day",
  });
});

router.get("/about", (req, res, next) => {
  res.status(200).json({
    Branches: ["Tamilnadu.", "Kerala.", "Karnataka.", "Hyderabad."],
    delivarypartners: ["Zomatto.", "Swiggy.", "Zepto."],
  });
});

router.get("/services", (req, res, next) => {
  res.status(200).json({
    ordernumber: 5,
    customerName: "Balaji",
    Address: "Trichy",
  });
});

router.get("/contact",(req,res)=>{
  res.status(200).json(products)
})

router.post("/contact",(req,res)=>{
  if(!req.body.name || req.body.name.length < 3 ){
    res.status(400).send("Invalid Name")
    return;
  }
  let maxId=Math.max(...products.map(item=>item.id));
  const order={
    id:maxId+1,
    name:req.body.name,
    price:req.body.price
  }
 products.push(order);
 res.send(order)
})

router.get("/contact/:orderId",(req, res)=>{
  const product=products.find(c=>c.id === parseInt(req.params.orderId));
 if(!product) res.status(404).send('Sorry Currently given Id not available');
 res.send(product);
})

router.put("/contact/:orderId",(req,res)=>{
  const product=products.find(c=>c.id === parseInt(req.params.orderId));
 if(!product) res.status(404).send('Sorry Currently given Id not available');
 if(req.body.name.length < 3 ){
  res.status(400).send("Invalid Name")
  return;
}
 product.name=req.body.name;
 product.price=req.body.price;
 res.send(product)
})

router.delete("/contact/:orderId",(req,res)=>{
  const product=products.find(c=>c.id === parseInt(req.params.orderId));
 if(!product) res.status(404).send('Sorry Currently given Id not available');

 const index=products.indexOf(product);
products.splice(index,1);
  res.send(product);
})


module.exports = router;
