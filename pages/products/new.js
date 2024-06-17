import Layout from "@/components/Layout";
import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";

export default function NewProduct() {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')

    const router = useRouter()

    const createProduct = async e => {
        e.preventDefault()
        const data = { title, description, price }
        await axios.post('/api/products', data)
        router.push('/products')
    }

    return (
      <Layout>
        <form onSubmit={createProduct}>
          <h1>New Product</h1>
          <label>Product Name</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="product name"
          />
          <label>Description</label>
          <textarea
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="description"
          />
          <label>Price in USD</label>
          <input
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="price"
          />
          <button type="submit" className="btn-primary">
            Save
          </button>
        </form>
      </Layout>
    );
}