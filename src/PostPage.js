import React, { useContext } from 'react'
import {useParams, Link} from 'react-router-dom'
import DataContext from './context/DataContext';

export const PostPage = () => {
    const {post, handleDelete} = useContext(DataContext);
    const {id} = useParams();
    const posts = post.find(posts => (posts.id).toString() === id);
  return (
        <main className='postPageDetail'>
            <article className='post'>
                {posts && 
                    <>
                        <h2>{posts.title}</h2>
                        <p>{posts.datetime}</p>
                        <p>{posts.body}</p>
                        <p><Link to="/">{`<<`}Back</Link></p>
                        <Link to={`/edit/${posts.id}`} ><button >Edit Post</button></Link>
                        <button
                            className='DeleteBtn'
                            onClick={() => handleDelete(posts.id)}>Delete</button>
                    </>
                }
                {!posts && 
                    <>
                        <p>Date Not Found <Link to="/">Home</Link></p>
                    </>
                }
            </article>
        </main>
    )
}
