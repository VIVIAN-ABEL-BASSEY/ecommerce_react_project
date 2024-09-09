import { useState } from "react";
import { Link } from "react-router-dom";
import { useFetch } from "../../Services/useFetch";
// import P
function Products(){
    const [size, setSize] = useState()
    // const [filteredProducts, setFilteredProducts] = useState([])
    const {data,error,loading} = useFetch("/products")
    // const { data: product, loading, error } = useFetch(/products?category=${category});
    // const filteredProducts= data
    const filteredProducts= size
    ? data.filter((d)=> d.skus.find((s)=>s.size === parseInt(size)))
    : data
    const renderProduct = (Product,i)=>{
        return(
            <div key={Product.id} className="product">
                <Link to={`/products/${Product.id}`}>
                    <img src={`/images/${Product.image}`} alt={Product.name}/>
                    <h3>{Product.name}</h3>
                    <p>${Product.price}</p>
                </Link>
            </div>
        )
    }
    return(
        <div>
            <section id="filters">
                <label htmlFor="size">Filter by size</label>
                <select id="size" value={size} onChange={(e)=>setSize(e.target.value)}>
                    <option value="">All sizes</option>
                    <option value ="7">7</option>
                    <option value ="8">8</option>
                    <option value ="9">9</option>
                    <option value ="9">19</option>
                </select>
                {size && <h2>Found {filteredProducts && filteredProducts.length} items</h2>}
            </section>
            <section id="products">{filteredProducts && filteredProducts.map(renderProduct)}</section>
        </div>
    )
}
export default Products;