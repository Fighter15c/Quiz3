const router = require("express").Router();
const Product = require("../models/productmodel");

router.get("/", async (req, res) => {
  const allProducts = await Product.find();
  res.render("index", { product: allProducts });
  //res.send(allProducts);
});

module.exports = router;

router.post("/add", (req, res) => {
  const newprod = new Product({
    number: req.body.number,
    image: req.body.image,
    name: req.body.name,
    details: req.body.details,
  });

  newprod
    .save()
    .then(() => {
      console.log("Successfully added product.");
      res.redirect("/");
    })
    .catch((err) => console.log(err));
});

router.get("/delete/:id", (req, res) => {
  const _id = req.params.id;
  Product.findByIdAndDelete(_id)
    .then(() => {
      console.log("Product deleted.");
      res.redirect("/");
    })
    .catch((err) => console.log(err));
});

router.get("/update/:id", (req, res) => {
  const id = req.params.id;
  Product.findByIdAndUpdate(id, req.body, { useFindAndModify: false }).then(
    () => {
      console.log("Product has been updated.").catch((err) => console.log(err));
    }
  );
});

router.get("/addpage", (req, res) => {
  res.render("addproduct");
});

module.exports = router;
