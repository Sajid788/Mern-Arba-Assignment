const { ProductModel } = require("../model/product_model");

// Create Product
const createProduct = async (req, res) => {
  try {
    const { title, description, price, category, image, owner } = req.body;

    const product = new ProductModel({
      title,
      description,
      price,
      category,
      image,
      owner,
    });

    await product.save();
    res.status(201).json({ message: "Product created successfully", product });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Update Product
const updateProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const { title, description, price, category, image } = req.body;

    // Find the product by ID
    let product = await ProductModel.findById(productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    // Update product fields
    product.title = title;
    product.description = description;
    product.price = price;
    product.category = category;
    product.image = image;

    // Save the updated product
    await product.save();

    res.status(200).json({ message: "Product updated successfully", product });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Read Products
const getProducts = async (req, res) => {
  try {
    // Fetch all products
    const products = await ProductModel.find();
    res.status(200).json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Read Single Product
const getProductById = async (req, res) => {
  try {
    const productId = req.params.id;

    // Find the product by ID
    const product = await ProductModel.findById(productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Delete  product
const deleteProduct = async (req, res) => {
  const id = req.params.id;
  const userId = req.userId;
  try {
    const product = await ProductModel.findOneAndDelete({ _id: id, userId });
    if (!product) {
      return res.status(404).json({ msg: "Product not found" });
    }
    res.status(200).json({ msg: "Product deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Internal server error" });
  }
};

module.exports = {
  createProduct,
  updateProduct,
  getProducts,
  getProductById,
  deleteProduct,
};
