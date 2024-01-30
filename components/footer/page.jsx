import React from 'react'
import Link from 'next/link'

import styles from './styles.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer} >
      Made by &nbsp;
      <Link href="https://erentin.com/" target="_blank" >
        Eren Tin
      </Link>
    </footer>
  )
}
