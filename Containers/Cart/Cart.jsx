import { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RiShoppingCartLine } from 'react-icons/ri'
  ;
import CartItem from '../../Components/Cart/CartItem'
import styles from './Cart.module.css'

import { removeFromCart } from '../../redux/actions';

const CartDropdown = () => {
  const [cartAnimating, setCartAnimating] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)
  const cart = useSelector((state) => state.cart)
  const cartLength = useRef(cart.length)

  const dispatch = useDispatch()

  useEffect(() => {
    if (cartLength.current > cart.length) {
      cartLength.current = cart.length
      return
    }
    setCartAnimating(true)
    const cartAnimateTimer = setTimeout(() => {
      cartLength.current = cart.length
      setCartAnimating(false)
    }, 300)
    return () => clearTimeout(cartAnimateTimer)
  }, [cart])

  const handleRemoveCartItem = (id) => {
    dispatch(removeFromCart(id))
  }

  return (

    <span
      className={styles.container}
      onMouseEnter={() => setCartOpen(true)}
      onMouseLeave={() => setCartOpen(false)}
    >
      <span className={`${styles.marker} ${cartAnimating ? styles.markerAnimate : null}`}>
        {cart.length}
      </span>
      <RiShoppingCartLine />
      {cartOpen &&
        <ul className={styles.dropdown}>
          {cart.map(item =>
            <CartItem key={item.id} item={item} removeItem={handleRemoveCartItem} />
          )}
          <p style={{ textAlign: 'right' }}>
            Total: {(cart.reduce((acc, curr) => { return acc + curr.price }, 0)).toFixed(2)}€
          </p>
        </ul>
      }
    </span>
  )

}


export default CartDropdown