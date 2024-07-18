const mongoose = require("mongoose");
const { products } = require("./data");

const Product = require("./models/productModel");

mongoose
  .connect(
    `mongodb+srv://ankushiit21:WBwVG65PS1WmMWPA@cluster0.7gpdail.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      autoIndex: false,
    }
  )
  .then(() => {
    console.log("connectdb");
  });

const seedProduct = async () => {
  try {
    await Product.deleteMany();
    await Product.insertMany(products);
  } catch (error) {
    console.log(error);
  }
};

seedProduct();
