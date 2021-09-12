import { ProductCard } from "../Components/Cards/productCard"
import { useGlobal } from "../Context/context"

export const ProductsPage = () => {
    const {products} = useGlobal()
    console.log(products)
    return(
        <div style={{display:"flex",flexWrap:'wrap'}}>
        {
        products === null ? <h1>Loading </h1> : products.map(product => <ProductCard product={product} />)
        }
        </div>
    )
}