import { useCartContext } from "../contexts/cart_context"

const CartContent = ({cart}) => {
  const { cart, clearCart } = useCartContext()
  const {name} = cart[0]
  return (
    <div>{name}</div>
  )
}

export default CartContent