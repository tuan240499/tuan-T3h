import React from "react"
import {useParams} from "react-router-dom"
import Ddata from "./Ddata";

function ProductDetail() {
    const {productId} = useParams()
    const thisProduct = Ddata.find(prod => prod.id === productId)
    
    return (
        <div>
            <h1>{thisProduct.name}</h1>
            <p>Price: ${thisProduct.price}</p>
            <p>{thisProduct.description}</p>
        </div>
    )
}

export default ProductDetail