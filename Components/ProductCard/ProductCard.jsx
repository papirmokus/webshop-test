import Image from 'next/image'
import Link from 'next/link'

import styles from './ProductCard.module.css'

const ProductCard = ({ product }) =>
  <div className={styles.cardContainer}>
    <Link href={`/${product.id}`}>
      <div className={styles.imageWrapper}>
        <Image alt={product.title} src={product.image} layout='fill' objectFit='contain' />
      </div>
    </Link>
    <div className={styles.cardInfo}>
      <Link href={`/${product.id}`}>
        <p className={styles.title}>
          {product.title}
        </p>
      </Link>
      <p className={styles.price}>{product.price}€</p>
    </div>
  </div >

export default ProductCard