import ProductCard from "./ProductCard/ProductCard";
import './ProductListStyle.css'
import Button from "../Button/Button";

export default function ProductList (){
    return (
        <div className='ProductList'>
            <div className='Upper'>
                <p>Quantida de de produtos:</p>
                <p> Ordenação: <select><option>Crescente</option><option>Decrescente</option></select><Button label = 'Aplicar'/></p>
            </div>
            <div className='Items'>
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        </div>
    )
}