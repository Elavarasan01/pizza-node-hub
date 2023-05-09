const Pizza=require("../models/menu")
const mongoose=require("mongoose")

//getting all pizza details
const getPizza= async (req,res,next)=>{
  await Pizza.find()
    .then((response)=>{
        res.json({
          response
        })
    })
    .catch((err)=>{
        res.json({
            message:"Error Occured!"
        })
    })
}

//getting single pizza details
const getPizzaById= async (req,res,next)=>{
    let pizzaId=setTimeout(()=>{
        req.body.pizzaId;
    },3000)
   await Pizza.findById(pizzaId)
    .then((response)=>{
        res.json({
            response
        })
    })
    .catch((err)=>{
        res.json({
            message:"Error Occured"
        })
    })
}

//post a new pizza
const postPizza = (req, res, next) => {
    let pizza = new Pizza({
        pizzaname: req.body.pizzaname,
        price: req.body.price,
        phone: req.body.phone,
        address: req.body.address
    });
    
    pizza.save()
        .then(response => {
            res.json({
                message: "Pizza added successfully!"
            });
        })
        .catch(err => {
            res.json({
                message: "Error occurred"
            });
        });
};

//update the pizza details
const updatePizza = (req, res, next) => {
    const pizzaId = req.body.pizzaId;
    const update = {
      pizzaname: req.body.pizzaname,
      price: req.body.price,
      phone: req.body.phone,
      address: req.body.address,
    };
  
    if (!mongoose.Types.ObjectId.isValid(pizzaId)) {
      return res.status(400).json({ message: "Invalid pizza id" });
    }
  
    Pizza.findByIdAndUpdate(pizzaId, { $set: update }, { new: true })
      .then((response) => {
        if (!response) {
          return res.status(404).json({ message: "Pizza not found" });
        }
        res.json({ message: "Updated successfully!" });
      })
      .catch((err) => {
        console.error(err);
        res.status(500).json({ message: "Server error" });
      });
  };

//delete the pizza
const deletePizza = (req, res, next) => {
    const pizzaId = req.body.pizzaId;
    if (!mongoose.Types.ObjectId.isValid(pizzaId)) {
        return res.status(400).json({ message: 'Invalid pizza ID' });
    }
    Pizza.findByIdAndDelete(pizzaId)
        .then((response) => {
            if (!response) {
                return res.status(404).json({ message: 'Pizza not found' });
            }
            res.json({
                message: 'Deleted!'
            });
        })
        .catch((err) => {
            res.status(500).json({
                message: 'Error Occurred'
            });
        });
};

const searchPizza = (req, res, next) => {
    const query = req.query.q;
  
    Pizza.find({ pizzaname: { $regex: query, $options: "i" } })
      .then((pizzas) => {
        res.json(pizzas);
      })
      .catch((err) => {
        res.json({
          message: "Error occurred",
        });
      });
  };

module.exports={
    getPizza,
    getPizzaById,
    postPizza,
    updatePizza,
    deletePizza,
    searchPizza
};