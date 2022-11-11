import React from 'react';
import {NavLink} from 'react-router-dom';
import Banner from '../assets/banner.jpeg';

function Home() {
  return (
    <div className='home' style={{backgroundImage: `url(${Banner})`}}>
      <div className='headerContainer'>
        <h1>Food Corner</h1>
        <p>INDIAN FOOD AT A CLICK.</p>
        <NavLink to='/menu'>
          <button>Order Now</button>
        </NavLink>
      </div>
    </div>
  );
}
export default Home;
