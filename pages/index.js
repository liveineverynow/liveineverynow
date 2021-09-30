import React from 'react'
import Head from 'next/head'
import { NavDropdown } from '../components/NavDropdown/NavDropdown'

function HomePage() {
  return (
    <>
    <Head>
    <title>LIVEINEVERYNOW.</title>
    </Head>
    <header>
    <img id="logo" src="assets/logo.png" alt="LIVEINEVERYNOW logo"/>
    </header>
	<NavDropdown/>
    </>
  )
}

export default HomePage
