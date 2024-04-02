import { useState, useEffect } from "react";
import axios from 'axios';

const useAxiosFetch = (dateUrl) => {
    const [data, setData] = useState([]);
    const [fetchError, setFetchError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        let isMounted = true;
        const source = axios.CancelToken.source();

        const fetchData = async (url) => {
            setIsLoading(true);
            try {
                const response = await axios.get(url, {
                    cancelToken: source.token
                })
                if(isMounted){
                    setData(response.data);
                    setFetchError(null)
                }
            } catch (error) {
                if(isMounted){
                    setFetchError(error.message)
                    setData([]);
                }
            } finally {
                isMounted && setTimeout(()=>  setIsLoading(false), 2000);
            }
        }

        fetchData(dateUrl);
        
        const cleanUp = () => {
            isMounted = false;
            source.cancel();
        }

        return cleanUp;

    }, [dateUrl])
    return {data, fetchError, isLoading}
}

export default useAxiosFetch;