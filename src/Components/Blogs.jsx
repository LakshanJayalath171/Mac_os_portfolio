import React from 'react'
import WindowWrapper from "../hoc/WindowWrapper.jsx";

const Blogs = () => {
    return (
        <div>Blogs</div>
    )
}

const BlogsWindow = WindowWrapper(Blogs,"safari")
export default BlogsWindow
