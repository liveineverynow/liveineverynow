import React from 'react'
import Head from 'next/head'
import { ListItem } from '../../components/ListItem/ListItem'
import { PageLayout } from '../../components/PageLayout/PageLayout'
import { Footer } from '../../components/Footer/Footer'
import { NavDropdown } from '../../components/NavDropdown/NavDropdown'

const PodcastPage = () => {
  return (
    <>
      <Head>
	<title>LIVEINEVERYNOW. Podcast</title>
      </Head>
      
      <PageLayout>
	<NavDropdown></NavDropdown>
	<p className="pt-32 text-4xl md:text-6xl max-w-5xl">
	  A podcast chronicaling our efforts to live
	  the happiest, healthiest, and most present
	  lives we can.
	</p>
	<p className="pt-16 pb-32 text-2xl md:text-4xl flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
	  <span>Listen on:</span>
	  <a href="#" >Spotify</a>
	  <a href="#" >Apple Music</a>
	  <a href="#" >RSS</a>
	</p>
	<p className="text-2xl md:text-4xl pb-16">
	  Some of our favorite episodes:
	</p>

	<div>
	  <ListItem title="043 - Loneliness">
	    <a href="#">Spotify</a>
	    <a href="#">Apple Music</a>
	  </ListItem>
	  <ListItem title="039 - You need more practice, not resources">
	    <a href="#">Spotify</a>
	    <a href="#">Apple Music</a>
	  </ListItem>
	  <ListItem title="030 - Fame">
	    <a href="#">Spotify</a>
	    <a href="#">Apple Music</a>
	  </ListItem>
	  <ListItem title="038 - Thinking like an athlete">
	    <a href="#">Spotify</a>
	    <a href="#">Apple Music</a>
	  </ListItem>
	</div>
	<p className="pt-16 pb-32 text-2xl md:text-4xl flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
	  <span>Listen on:</span>
	  <a href="#" >Spotify</a>
	  <a href="#" >Apple Music</a>
	  <a href="#" >RSS</a>
	</p>
      </PageLayout>
      <Footer>
      </Footer>
    </>
  )
}

export default PodcastPage
