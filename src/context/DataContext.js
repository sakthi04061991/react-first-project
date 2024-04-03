import { createContext, useState, useEffect } from "react";
import { useWindowSize } from '../hooks/useWindowSize.js';
import  useAxiosFetch  from '../hooks/useAxiosFetch.js';
import {useNavigate} from 'react-router-dom';
import api from '../api/posts.js';
import { format } from 'date-fns';



const DataContext = createContext({});

export const DataProvider = ({ children }) => {
    const [post, setPost] = useState([])
    const [search, setSearch] = useState("");
    const [searchResult, setSearchResult] = useState([]);
    const [postTitle, setPostTitle] = useState("");
    const [postBody, setPostBody] = useState('');
    const [editTitle, setEditTitle] = useState("");
    const [editBody, setEditBody] = useState('');
    const { width } = useWindowSize();
    const navigate = useNavigate();
    const { data, fetchError, isLoading } = useAxiosFetch('http://localhost:3500/posts/');

    useEffect(() => {
        setPost(data);
    }, [data])

    useEffect(() => {
        const filteredResult = post.filter(post =>
            ((post.body).toLocaleLowerCase()).includes(search.toLocaleLowerCase())
            ||
            ((post.title).toLocaleLowerCase().includes(search.toLocaleLowerCase()))
        );
        setSearchResult(filteredResult.reverse());
    }, [post, search])

    const handlerSubmit = async (e) => {
        e.preventDefault();
        const id = post.length ? parseInt(post[post.length - 1].id) + 1 : 1;
        const datetime = format(new Date(), 'MMM dd, yyyy pp');
        const newPost = { id, title: postTitle, datetime, body: postBody };
        //const response = await api.post('/posts', newPost);
        const allPosts = [...post, newPost];
        setPost(allPosts);
        setPostTitle('');
        setPostBody('');
        navigate('/')
    }

    const handleEdit = async (id) => {
        const datetime = format(new Date(), 'MMM dd, yyyy pp');
        const updatedPost = { id, title: editTitle, datetime, body: editBody };
        try {
            const response = await api.put('/posts/' + id, updatedPost);
            setPost(post.map(post => post.id === id ? { ...response.data } : post));
            setPostTitle('');
            setPostBody('');
            navigate('/')
        } catch (error) {
            console.log(`Error ${error.message}`)
        }
    }

    const handleDelete = async (id) => {
        try {
            await api.delete(`/posts/${id}`)
        } catch (error) {
            console.log(`Error ${error.message}`)
        }
        const postList = post.filter(post => post.id !== id);
        setPost(postList)
        navigate('/')
    }

    return (
        <DataContext.Provider value={{width, search, setSearch, searchResult, fetchError, isLoading, post, handleDelete,
            handlerSubmit, postTitle, setPostTitle, postBody, setPostBody, handleEdit, editBody, editTitle, setEditBody, setEditTitle}}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContext;
