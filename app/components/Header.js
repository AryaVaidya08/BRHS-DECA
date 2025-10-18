'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import styles from './Header.module.css';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <Link href="/" className={styles.logoContainer}>
          <Image
            src="/BR_LOGO.png"
            alt="BRHS Logo"
            width={35}
            height={35}
            className={styles.logo}
            priority
          />
          <Image
            src="/DECA_LOGO.png"
            alt="DECA Logo"
            width={35}
            height={35}
            className={styles.logo}
            priority
          />
          <div className={styles.brandText}>
            <span className={styles.brandName}>BRHS DECA</span>
          </div>
        </Link>
        <nav className={styles.nav}>
          <Link href="/" className={styles.navLink}>Home</Link>
          <Link href="/our-team" className={styles.navLink}>Our Team</Link>
          <Link href="/resources" className={styles.navLink}>Resources</Link>
          <Link href="/gallery" className={styles.navLink}>Gallery</Link>
        </nav>
      </div>
    </header>
  );
}
