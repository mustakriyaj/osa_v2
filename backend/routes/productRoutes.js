import express from "express";
import products from "../data/products.js";

const router = express.Router();

router.get('/', async (req, res) => {
    res.json(products);
});

app.get('/:id', (req, res) => {
    const product = products.find((p) => p._id === req.params.id);
    if(product){
        res.json(product);
    } else {
        res.status(404).json({ message: 'Product not found' });
    }
});
export default router;
