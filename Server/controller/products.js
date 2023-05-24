
import Product from "../model/ProductSchema.js"


export const getProduct = async (req, res) => {
    try {
        const product = await Product.find({});
        res.status(200).json({ product })
    } catch (err) {
        res.status(500).json({ message: err })
    }

};

export const getProductById = async (req, res) => {
    try {
        const product = await Product.findOne({ _id: req.params.id });
        res.status(200).json(product)
    } catch (err) {
        res.status(500).json({ message: err })
    }

}

