import React from 'react';
import './home.styles.scss';

const HomePage = ()=>(
  <div className='home-page'>
    <div className='directory-menu'>
      <div className='menu-item'>
        <div className='content'>
          <h1 className='titile'>Caps</h1>
          <span className='subtitle'>shop now</span>
        </div>
      </div>

      <div className='menu-item'>
        <div className='content'>
          <h1 className='titile'>SunGlasses</h1>
          <span className='subtitle'>shop now</span>
        </div>
      </div>

      <div className='menu-item'>
        <div className='content'>
          <h1 className='titile'>Acessories</h1>
          <span className='subtitle'>shop now</span>
        </div>
      </div>

      <div className='menu-item'>
        <div className='content'>
          <h1 className='titile'>Dresses</h1>
          <span className='subtitle'>shop now</span>
        </div>
      </div>

      <div className='menu-item'>
        <div className='content'>
          <h1 className='titile'>Shoes</h1>
          <span className='subtitle'>shop now</span>
        </div>
      </div>
    </div>
  </div>
)

export default HomePage;