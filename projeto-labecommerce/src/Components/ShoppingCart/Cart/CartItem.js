import './CartItemStyle.css'
import Button from '../../Button/Button'

export default function CartItem(){
    return(
        <div className='CartItem'>
            <p>x0 Nome do Produto </p>
            <Button label='Remover' />
        </div>
    )
}