import React, { useContext } from 'react'
import DataContext from './context/DataContext'

export const NewPost = () => {
    const {handlerSubmit, postTitle, setPostTitle, postBody, setPostBody} = useContext(DataContext);
    const style = {
        width: "100%",
        height: "200px"
    }
  return (
    <main className='NewPost'>
        <form className='NewpostForm' onSubmit={handlerSubmit}>
            <label htmlFor='Title'>Title:</label>
            <br />
            <input 
                id="postTitle"
                type='text'
                required
                value={postTitle}
                onChange={(e) => setPostTitle(e.target.value)}
                />
            <label htmlFor='Title'>Post:</label>
            <br />
            <textarea
                style={style}
                id="postBody"
                required
                value={postBody}
                onChange={(e) => setPostBody(e.target.value)}
                />
            <br></br>
            <button type='submit'>Submit</button>
        </form>
    </main>
  )
}
