const express = require('express');
const {
    createProduct,
    updateProduct,
    getProducts,
    getProductById,
    deleteProduct
} = require('../controller/product_controller');
const  {authorization} = require('../middleware/authorization');
const productRouter = express.Router();

productRouter.post('/', authorization, createProduct);
productRouter.patch('/:id', authorization, updateProduct);
productRouter.get('/', getProducts);
productRouter.get('/:id', getProductById);
productRouter.delete('/:id', authorization, deleteProduct);

module.exports = {productRouter};
