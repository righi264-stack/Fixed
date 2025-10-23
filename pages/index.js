import Header from '../components/Header'
import Footer from '../components/Footer'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="page">
      <Header />
      <main className="container">
        <h1>Amar Clothes</h1>
        <p>Online store for your brand and other brands</p>
        <p>Payment cash on delivery</p>
        <Link href="/products"><a className="btn">View Products</a></Link>
      </main>
      <Footer />
    </div>
  )
}
