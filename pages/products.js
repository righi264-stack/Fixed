import Header from '../components/Header'
import Footer from '../components/Footer'
import ProductCard from '../components/ProductCard'

export default function Products({ products }) {
  return (
    <div className="page">
      <Header />
      <main className="container">
        <h2>Products</h2>
        <div className="grid">
          {products.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      </main>
      <Footer />
    </div>
  )
}

export function getStaticProps() {
  const products = [
    { id: 'p1', title: 'Tshirt Classic', price: '120 EGP', image: '/prod1.png' },
    { id: 'p2', title: 'Jeans Regular', price: '350 EGP', image: '/prod2.png' },
    { id: 'p3', title: 'Jacket Wind', price: '620 EGP', image: '/prod3.png' }
  ]
  return { props: { products } }
}
