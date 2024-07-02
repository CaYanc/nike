import React from 'react'
import img1 from '../assets/img1.png'

const CartSilder = ({imagen}) => {
  return (
    <div className='cart_slider'>
        <div>
            <h2>20% Discount</h2>
            <p>on your first purchase</p>
            <button className='btn_crat-slider'>Shop now</button>
        </div>

        <img src={imagen} alt="" />
       
    </div>
  )
}

export default CartSilder