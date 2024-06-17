import { mongooseConnect } from "@/lib/mongoose"
import { Product } from "@/models/Product"

export default async function handler(req, res) {
    const { method } = req
    await mongooseConnect()

    if (method === 'GET') {
        res.status(200).json(await Product.find())
    }

    if (method === 'POST') {
        const {title, description, price} = req.body
        const productDoc = await Product.create({
            title,
            description,
            price
        })
        res.status(200).json(productDoc)
    }
  }
  