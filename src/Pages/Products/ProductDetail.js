import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../../Services/useFetch";
// import { useFetch } from "../../services/use/Fetch";
// import Spinner from "../../Components/Spinner";
// import PageNotFound from "../..Components/PageNotFound"

const ProductDetail = () => {
    const { id } = useParams();
    const [sku, setSku] = useState("");
    const { data: product, loading, error } = useFetch(`/products/${id}`);
    console.log(id,product)
    // if (loading) return <Spinner />;
    // if (!product) return <PageNotFound />;
    if (error) throw error;

    return (
        <div id="detail">
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <p id="price">${product.price}</p>

            <select id="size" value={sku} onChange={(e) => setSku(e.target.value)}>
                <option value="">What size?</option>
                {product.skus.map((s) => (
                    <option key={s.sku} value={s.sku}>
                        {s.size}
                    </option>
                ))}
            </select>
            <img src={`/images/${product.image}`} alt={product.category} />
        </div>
    );
}

export default ProductDetail;