import React, { useEffect, useState } from 'react'

function Products() {

    const [products, setProdcuts] = useState({ products: [] })

    console.log(products, 'products');

    useEffect(() => {
        fetchProducts()
    }, [])

    const fetchProducts = () => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(res => setProdcuts(res))
            .catch(err => console.log(err))
    }

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
            {products.products.length > 0 ?
                products.products.map(el => {
                    return (
                        <div style={{ border: '1px solid' }}>
                            <h3>{el.title}</h3>
                            <img src={el.thumbnail} height={200} width={200} />
                        </div>
                    )
                }) : 'No data available'}
        </div>
    )
}

export default Products
