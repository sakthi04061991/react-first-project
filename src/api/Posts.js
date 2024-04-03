import axios from 'axios';

export default axios.create({
    baseURL: "https://main--sa-json-db.netlify.app/db.json/"
})
