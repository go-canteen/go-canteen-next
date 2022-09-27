import Link from 'next/link'
import styles from 'styles/navbar.module.css'

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <Link href="/toko">
        <a>Toko</a>
      </Link>
      <Link href="/pesanan">
        <a>Pesanan</a>
      </Link>
      <Link href="/riwayat">
        <a>Riwayat</a>
      </Link>
      <Link href="/akun">
        <a>Akun</a>
      </Link>
    </nav>
  )
}