const { CategoryModel } = require("../model/category_model");

// Create Category
const createCategory = async (req, res) => {
  try {
    const userId = req.userId
    const { name, slug, image } = req.body;
    // Check if category with the same slug already exists
    const existingCategory = await CategoryModel.findOne({ slug });
    if (existingCategory) {
      return res
        .status(400)
        .json({ message: "Category with this slug already exists" });
    }

    const category = new CategoryModel({
      name,
      slug,
      image,
      owner:userId,
    });

    await category.save();
    res
      .status(201)
      .json({ message: "Category created successfully", category });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Update Category
const updateCategory = async (req, res) => {
  try {
    const categoryId = req.params.id;
    const { name, slug, image } = req.body;

    // Find the category by ID
    let category = await CategoryModel.findById(categoryId);
    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }

    // Update category fields
    category.name = name;
    category.slug = slug;
    category.image = image;

    // Save the updated category
    await category.save();

    res
      .status(200)
      .json({ message: "Category updated successfully", category });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const getCategories = async (req, res) => {
  try {
    const categories = await CategoryModel.find();
    res.status(200).json(categories);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Read Single Category
const getCategoryById = async (req, res) => {
  try {
    const categoryId = req.params.id;

    // Find the category by ID
    const category = await CategoryModel.findById(categoryId);
    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }

    res.status(200).json(category);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const deleteCategory = async (req, res) => {
  const id = req.params.id;
  const userId = req.userId;
  try {
    const category = await CategoryModel.findOneAndDelete({ _id: id, userId });
    if (!category) {
      return res.status(404).json({ msg: "Category not found" });
    }
    res.status(200).json({ msg: "Category deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Internal server error" });
  }
};

module.exports = {
  createCategory,
  updateCategory,
  getCategories,
  getCategoryById,
  deleteCategory,
};
