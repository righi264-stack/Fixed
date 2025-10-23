import Link from 'next/link'

export default function Header() {
  return (
    <header className="header">
      <div className="logo">Amar Clothes</div>
      <nav>
        <Link href='/'><a>Home</a></Link>
        <Link href='/products'><a>Products</a></Link>
      </nav>
    </header>
  )
}
