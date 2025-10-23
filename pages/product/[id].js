import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function Product({ product }) {
  if (!product) return <div>Product not found</div>
  return (
    <div className="page">
      <Header />
      <main className="container">
        <h2>{product.title}</h2>
        <img src={product.image} alt={product.title} style={{maxWidth: '320px'}} />
        <p>Price {product.price}</p>
        <p>Cash on delivery available</p>
      </main>
      <Footer />
    </div>
  )
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: 'p1' } },
      { params: { id: 'p2' } },
      { params: { id: 'p3' } }
    ],
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const all = {
    p1: { id: 'p1', title: 'Tshirt Classic', price: '120 EGP', image: '/prod1.png' },
    p2: { id: 'p2', title: 'Jeans Regular', price: '350 EGP', image: '/prod2.png' },
    p3: { id: 'p3', title: 'Jacket Wind', price: '620 EGP', image: '/prod3.png' }
  }
  const product = all[params.id] || null
  return { props: { product } }
}
