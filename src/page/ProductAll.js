import React, { useEffect, useState } from 'react'
import ProductCard from '../component/ProductCard';

const ProductAll = () => {
    const [productList, setProductList] = useState([]);

    const getProducts = async () => {
        const url = 'http://localhost:5000/products';
        try {
            const response = await fetch(url);
            if(!response.ok) {
                throw new Error("데이터를 불러오지 못하고 있습니다.")
            }
            const data = await response.json();
            setProductList(data);
        } catch (error) {
            console.log("Fetch Data Error: ", error);
        }
    };

    useEffect(() => {
        getProducts();
    }, []);

  return (
    <div>
        <ProductCard />
    </div>
  )
}

export default ProductAll