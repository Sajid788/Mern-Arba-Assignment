const express = require('express');
const {
    createProduct,
    updateProduct,
    getProducts,
    getProductById,
    deleteProduct
} = require('../controller/product_controller');
const productRouter = express.Router();

productRouter.post('/', createProduct);
productRouter.patch('/:id', updateProduct);
productRouter.get('/', getProducts);
productRouter.get('/:id', getProductById);
productRouter.delete('/:id', deleteProduct);

module.exports = {productRouter};
