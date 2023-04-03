import React from 'react'
import Head from 'next/head'
import Script from 'next/script'

function Layout({ children }) {
  return (
    <div className="layout">
        <Script src='libs/particles/particles.js' defer />
        <Head>
          <title>Horizontal Parallax</title>
        </Head>
        <header></header>
        <main className="main-container">
          {children}
        </main>
        <footer></footer>
    </div>
  )
}

export default Layout