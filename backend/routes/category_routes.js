const express = require("express");
const {
  createCategory,
  updateCategory,
  getCategories,
  getCategoryById,
  deleteCategory,
} = require("../controller/category_controller");
const  {authorization} = require("../middleware/authorization")

const categoryRouter = express.Router();

categoryRouter.post("/",authorization, createCategory);
categoryRouter.patch("/:id",authorization, updateCategory,authorization);
categoryRouter.get("/", getCategories);
categoryRouter.get("/:id", getCategoryById);
categoryRouter.delete("/:id",authorization, deleteCategory);

module.exports = {categoryRouter};
