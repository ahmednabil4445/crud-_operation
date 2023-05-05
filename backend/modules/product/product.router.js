import { Router } from 'express';
import { addProduct, allProducts, deleteProduct, getProduct, updateProduct } from './controller/product.js';
const router = Router()



router.post("/product", addProduct)


router.get("/products", allProducts)

router.get("/product/:id", getProduct)
router.put("/product/:id", updateProduct)
router.delete("/product/:id", deleteProduct)


export default router