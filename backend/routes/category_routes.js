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

categoryRouter.post("/", createCategory);
categoryRouter.patch("/:id", updateCategory);
categoryRouter.get("/", getCategories);
categoryRouter.get("/:id", getCategoryById);
categoryRouter.delete("/:id", deleteCategory);

module.exports = {categoryRouter};
