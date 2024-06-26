import React, { useContext } from 'react'
import {Link, Outlet} from 'react-router-dom'
import DataContext from './context/DataContext'

export const Nav = () => {
  const {search, setSearch} = useContext(DataContext)
  return (
    <nav>
        <form className='searchForm' onSubmit={(e) => e.preventDefault()}>
            <label htmlFor='Search'>Search Post</label>
            <input
                id="search"
                type='text'
                placeholder='Search'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
        </form>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="post">Post</Link></li>
            <li><Link to="about">About</Link></li>
        </ul>
        <Outlet />
    </nav>
  )
}
