import axios from 'axios'
import Image from "next/image";
import Link from 'next/link';
import { IoMdArrowRoundBack } from 'react-icons/io'
import { useDispatch } from 'react-redux';

import Rating from '../Components/Rating/Rating';
import { addToCart } from '../redux/actions';
import styles from '../styles/ProductPage.module.css'

const ProductPage = ({ product }) => {
  const dispatch = useDispatch()

  const handleAddToCart = () => dispatch(addToCart(product))

  return (
    <div className={styles.container}>

      <Link href='/'>
        <span className={styles.goBack}>
          <IoMdArrowRoundBack />
        </span>
      </Link>
      <div className={styles.inner}>
        <span className={styles.imageWrapper}>
          <Image alt={product.title} src={product.image} layout='fill' objectFit='contain' />
        </span>
        <div className={styles.info}>
          <p className={styles.title}>{product.title}</p>
          <p className={styles.price}>{product.price}€</p>
          <p className={styles.description}>{product.description}</p>
          <Rating rating={product.rating} />
          <span style={{ marginTop: 'auto' }}>
            <button className={styles.addToCart} onClick={handleAddToCart}>ADD TO CART</button>
          </span>
        </div>
      </div>
    </div>
  )
}

export default ProductPage

export async function getServerSideProps(context) {
  const productId = context.query.productId

  try {
    const { data: product } = await axios.get('https://fakestoreapi.com/products/' + productId)
    return {
      props: { product: JSON.parse(JSON.stringify(product)) }
    }
  } catch (e) {
    console.error(e)
    return { redirect: { destination: '/', permanent: false, } }
  }
}