import Image from 'next/image'
import { FaTrash } from 'react-icons/fa'

import styles from './Cart.module.css'

const CartItem = ({ item, removeItem }) =>
  <li key={item.id} className={styles.cartLi}>
    <Image alt={item.title} src={item.image} width={100} height={100} objectFit='contain' />
    <div className={styles.infoContainer}>
      <p>{item.title}</p>
      <p>{item.price}€</p>
      <span className={styles.removeIcon} onClick={() => removeItem(item.id)}>
        <FaTrash />
      </span>
    </div>
  </li>

export default CartItem