import Link from 'next/link'

export default function ProductCard({ product }) {
  return (
    <div className="card">
      <img src={product.image} alt={product.title} style={{maxWidth: '200px'}} />
      <h3>{product.title}</h3>
      <p>{product.price}</p>
      <Link href={'/product/' + product.id}><a className="btn">Open</a></Link>
    </div>
  )
}
