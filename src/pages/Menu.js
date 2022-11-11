import React from 'react';
import MenuItem from '../components/MenuItem';
import {MenuList} from '../data/data';

function Menu() {
  return (
    <div className='menu'>
      <h1 className="menuTitle">Our Menu</h1>
      <div className='menuList'>
        {MenuList.map((menuItem, index) => {
          return <MenuItem key={index} {...menuItem} />
        })}
      </div>
    </div>
  );
}
export default Menu;
