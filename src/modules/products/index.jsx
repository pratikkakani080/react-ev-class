import React, { useEffect, useState } from 'react'
import instance from '../../config/api';

function Products() {

    const [products, setProdcuts] = useState({ products: [] })

    // console.log(products, 'products');

    useEffect(() => {
        fetchProducts()
    }, [])

    // const fetchProducts = () => {
    //     fetch('https://dummyjson.com/products')
    //         .then(res => res.json())
    //         .then(res => setProdcuts(res))
    //         .catch(err => console.log(err))
    // }

    const fetchProducts = async () => {
        // API call with axios
        const res = await instance.get('/products')
        if (res.status === 200) {
            setProdcuts(res?.data)
        }
    }

    // to fetch all posts
    const fetchPosts = () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    // to fetch particular posts
    const fetchPostById = () => {
        fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then(res => res.json())
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    // to create post
    const createPost = () => {
        fetch('https://jsonplaceholder.typicode.com/posts/1', {
            method: 'POST',
            body: JSON.stringify({ title: 'updating title' })
        })
            .then(res => res.json())
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    // to update particular posts
    const updatePost = () => {
        fetch('https://jsonplaceholder.typicode.com/posts/1', {
            method: 'PUT', // 'PATCH
            body: JSON.stringify({ title: 'updating title' })
        })
            .then(res => res.json())
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    // to delete particular posts
    const deletePost = () => {
        fetch('https://jsonplaceholder.typicode.com/posts/1', {
            method: 'DELETE', // 'PATCH
        })
            .then(res => res.json())
            .then(res => console.log(res))
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
