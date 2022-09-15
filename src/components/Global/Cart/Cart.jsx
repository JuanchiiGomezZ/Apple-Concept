import React from 'react'
import { useContext } from 'react'
import {CartContext} from './CartContext'


function Cart() {
    const ctx = useContext(CartContext)

  return (
    <div className='cart'>
        <h1>Soy el carrito</h1>
    <ul>
        {
            ctx.cartList.map(item => <li>{item}</li>)
        }
    </ul>
    </div>
  )
}

export default Cart