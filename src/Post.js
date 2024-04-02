import React from 'react'
import {useParams, Link} from 'react-router-dom';

export const Post = ({post}) => {
  return (
    <>
        <article className='article'>
            <Link to={`post/${post.id}`}> 
              <h2>{post.title}</h2>
            </Link>
            <p className='postDate'>{post.datetime}</p>
            <p className='PostBody'>{
                (post.body).length <= 25 
                    ? post.body
                    : `${(post.body).slice(0,25)}...`
            }</p>
        </article>
    </>
  )
}
