import React from "react";
import { useSelector } from "react-redux";


function ProductsInCategory({selectedCategory}) {
    const products = useSelector((state) => state.products.orderedByCategory);

    return (
        <>
        {selectedCategory}
        </>
    )
}

export default ProductsInCategory