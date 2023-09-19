import './ProductCardStyle.css'
import Button from '../../Button/Button.js'

export default function ProductCard() {
    return (
        <div className='ProductCard'>
            <div className='Image'>
                <p>ProductCard</p>
            </div>
            <div className='Info'>
                <p>Nome do Produto</p>
                <p>Valor</p>
            </div>
            <Button label = 'Adicionar ao carrinho'/>
        </div>
    )
}
