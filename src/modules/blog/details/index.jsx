import React, { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router'
import { BlogData } from '../../../static/blogs';

function BlogDetails() {
    const [searchParams, setSearchParams] = useSearchParams();
    let params = useParams();

    const id = searchParams.get('id') || params.id
    const [blog, setBlog] = useState({})

    useEffect(() => {
        setBlog(BlogData.find(el => el.id === id) || {})
    }, [id])

    return (
        <div>
            {
                Object.keys(blog).length > 0 ? (
                    <>
                        <h3>{blog.title}</h3>
                        <p>{blog.desc}</p>
                    </>
                ) : (
                    'No details available'
                )
            }
        </div>
    )
}

export default BlogDetails
