import React, { useContext } from 'react'
import { Feed } from './Feed'
import DataContext from './context/DataContext'

export const Home = () => {
  const {searchResult, fetchError, isLoading} = useContext(DataContext);
  return (
    <main className='Home'>
      {isLoading && <p>Loading...............</p>}
      {!isLoading && fetchError && <p className='statusMsg' style={{color: "red"}}>{fetchError}</p>}
      {!isLoading && !fetchError && (searchResult.length ? <Feed post={searchResult} /> : <p>No Post to display</p>)}
    </main>
  )
}
