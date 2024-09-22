import React from 'react'
import homeimg from '../assets/homeimg.jpeg'
import "../App.css"
export default function Home() {

  return (
    <div>
      <img src={homeimg} alt="home-page-banner" className='img-width' />
    </div>
  )
}
