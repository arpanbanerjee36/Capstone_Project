import express from "express";
import { userSignup, userSignin } from "../controller/auth.js";
import { getProduct, getProductById } from "../controller/products.js";

const router = express.Router();


router.post("/signup", userSignup)
router.post("/signin", userSignin)
router.get("/products", getProduct)
router.get("/product/:id", getProductById)

router.use("*", (req, res) => {
    return res.status(404).json({ message: "Page not found" })
})




export default router;