import React from 'react'
import {Link, Outlet} from 'react-router-dom'
export const PostLayout = () => {
  return (
  <>
        <div>PostLayout</div>
        <Link to='/postpage/1'>Page 1</Link>
        <Link to='/postpage/2'>Page 2</Link>
        <Link to="/postpage/newpost">New Post</Link>
        <Outlet />
  </>
    
  )
}
