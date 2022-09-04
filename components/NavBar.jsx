import React from 'react';
import Link from 'next/link';
import { AiOutlineShop } from 'react-icons/ai';

const NavBar = () => {
  return (
    <div className='navbar-container'>
      <p className="logo">
        <Link href="/">Majones Shop</Link>
      </p>

      <button type='button' className='cart-icon' onClick="">
        <AiOutlineShop />
        <span className="cart-item-qty">1</span>
      </button>
    </div>
  )
}

export default NavBar