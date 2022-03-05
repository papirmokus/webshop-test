import axios from 'axios'
import styles from '../styles/Home.module.css'

import ProductCard from '../Components/ProductCard/ProductCard'

export default function Home({ products, error }) {

  return (
    <>
      {error && <p className={styles.errorMsg} >{error}</p>}
      <main className={styles.grid}>
        {products.map(product =>
          <ProductCard key={product.id} product={product} />
        )}
      </main>
    </>
  )
}

export async function getServerSideProps(context) {
  try {
    const { data: products } = await axios.get('https://fakestoreapi.com/products')
    return {
      props: { products: JSON.parse(JSON.stringify(products)), error: null }
    }
  } catch (e) {
    console.error(e)
    return { props: { products: [], error: "API not available (again)" } }
  }
}