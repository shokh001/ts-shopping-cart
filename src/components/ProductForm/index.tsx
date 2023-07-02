import React, { useState } from "react"
import { Product, add } from "../../redux/slice/product.slice"
import { useAppDispatch } from "../../hooks/store.hook"

const ProductForm = () => {

    const [product, setProduct] = useState<Product>({
        id: 0,
        title: "",
        price: 0
    })

    const dispatch = useAppDispatch();

    const change = ({ target: { name, value } }: React.ChangeEvent<HTMLInputElement>) => {
        setProduct(prev => {
            (prev as any)[name] = value;
            const newValue = { ...prev }
            return newValue
        }
        )
    }

    const submitForm = (e: React.FormEvent) => {
        e.preventDefault()
        if (product.title !== '' && product.price !== 0 && product.id !== 0) {
            dispatch(add(product))
            setProduct({
                id: 0,
                title: "",
                price: 0
            })
        }
    }

    return (
        <div style={{marginTop: '20px'}}>
            <h2>Add Product</h2>
            <form onSubmit={submitForm}>
                <label htmlFor="title">Title</label>
                <input id="title" onChange={change} value={product.title} type="text" placeholder="Title" name="title" />
                <label htmlFor="price">Price</label>
                <input id="price" onChange={change} value={product.price} type="number" placeholder="Price" name="price" />
                <label htmlFor="id">ID</label>
                <input id="id" onChange={change} value={product.id} type="number" placeholder="ID" name="id" />
                <button type="submit">Add</button>
            </form>
        </div>
    )
}

export default ProductForm