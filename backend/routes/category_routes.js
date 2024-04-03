const express = require("express");
const router = express.Router();
const {
  createCategory,
  updateCategory,
  getCategories,
  getCategoryById,
  deleteCategory,
} = require("../controller/category_controller");

const categoryRouter = express.Router();

router.post("/categories", createCategory);
router.patch("/categories/:id", updateCategory);
router.get("/categories", getCategories);
router.get("/categories/:id", getCategoryById);
router.delete("/categories/:id", deleteCategory);

module.exports = {categoryRouter};
