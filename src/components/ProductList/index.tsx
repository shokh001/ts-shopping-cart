import { useSelector } from "react-redux"
import { Product, getProductsSelector, remove } from "../../redux/slice/product.slice"
import { useAppDispatch } from "../../hooks/store.hook"
import { addToCart } from "../../redux/slice/cart.slice"

const PoductList = () => {

    const products = useSelector(getProductsSelector)
    const dispatch = useAppDispatch()

    const removeProduct = (id: number) => dispatch(remove(id))

    const addToCartHandler = (item: Product) => dispatch(addToCart(item))

    return (
        <>
            <h1>List</h1>
            {
                products.map(({ id, title, price }) => <div key={id}>
                    <span>{`${title} : ${price}`}</span>
                    <button type="button" onClick={() => removeProduct(id)}>Remove from store</button>
                    <button type="button" onClick={() => addToCartHandler({ id, title, price })}>Add to cart</button>
                </div>)
            }
        </>
    )
}

export default PoductList