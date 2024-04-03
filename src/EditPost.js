import React, { useContext } from 'react'
import { useEffect } from 'react';
import { useParams} from 'react-router-dom';
import DataContext from './context/DataContext';

export const EditPost = () => {
    const {post, handleEdit, editBody, editTitle, setEditBody, setEditTitle} = useContext(DataContext);
    const {id} = useParams();
    const posts = post.find(post => (post.id).toString() == id);
    useEffect( () => {
        if(posts){
            setEditTitle(posts.title);
            setEditBody(posts.body);
        }
    }, [posts, setEditBody, setEditTitle])
  return (
    <div>
        {editTitle && 
            <>
                <h2>Edit Post</h2>
                <form className='newpostFrom' onSubmit={(e) => e.preventDefault()}>
                    <label htmlFor='postTitle'>Title</label><br />
                    <input 
                        id='postTitle'
                        type='text'
                        required
                        value={editTitle}
                        onChange={(e) => setEditTitle(e.target.value)}
                        />
                    <br />
                    <label htmlFor='postBody'>Body</label><br />
                    <textarea 
                        id="postBody"
                        required
                        value={editBody}
                        onChange={(e) => setEditBody(e.target.value)}
                        /><br />
                    <button type='submit' onClick={() => handleEdit(posts.id)}>Submit</button>
                </form>
            </>
        }
    </div>
  )
}
