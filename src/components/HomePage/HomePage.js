import React from 'react'
import logo from '../../assets/images/Logo_Politecnico_Milano.png'
import './HomePage.css'

function HomePage() {
  return (
    <div className='Home'>
      <header className='Home-header'>
        <img src={logo} className='Home-logo' alt='logo' />
      </header>
    </div>
  )
}

export default HomePage
