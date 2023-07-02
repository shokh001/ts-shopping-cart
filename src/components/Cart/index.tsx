import { useAppDispatch, useAppSelector } from "../../hooks/store.hook"
import { getCartProducts, getTotalPrice, removeToCart } from "../../redux/slice/cart.slice"

const Cart = () => {

  const totalPrice = useAppSelector(getTotalPrice)
  const cartProducts = useAppSelector(getCartProducts)
  const dispatch = useAppDispatch()

  const removeFromCart = (id: number) => dispatch(removeToCart(id))

  return (
    <div style={{marginTop: '20px'}}>
      <h2>Cart</h2>
      <h4>Total price: {totalPrice}</h4>
      {
        cartProducts.map(item => <div key={item.id}>
          <div>title: {item.title}</div>
          <div>amout: {item.amout}</div>
          <div>price: {item.price}</div>
          <button type="button" onClick={() => removeFromCart(item.id)}>removeFromCart</button>
        </div>)
      }
    </div>
  )
}

export default Cart