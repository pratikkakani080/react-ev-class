import React from 'react'
import { BlogData } from '../../static/blogs'
import { Link, Outlet } from 'react-router'

function Blog() {
    return (
        <div>
            {
                BlogData.map(el => {
                    return (
                        <div key={el.id}>
                            <h5>{el.title}</h5>
                            <p>{el.desc}</p>
                            {/* <Link to={`/blog/details?id=${el.id}&title=${el.title}`}>Read more...</Link> */}
                            <Link to={`/blog/details/${el.id}/${el.title}`}>Read more...</Link>
                        </div>
                    )
                })}
            <Outlet />
        </div>
    )
}

export default Blog
