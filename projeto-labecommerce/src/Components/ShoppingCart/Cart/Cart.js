import Button from '../../Button/Button'
import './CartStyle.css'
import CartItem from './CartItem'

export default function Cart(){
    return(
        <div className='Cart'>
            <h2>Cart</h2>
            <CartItem />
            <p>Valor total: 0</p>
        </div>
    )
}
