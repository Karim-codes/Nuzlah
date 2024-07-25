import {useEffect, useState } from "react";
import { makeRequest } from "../MakeRequest";

const useFetch = (url) =>{
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    
    useEffect(() => {
        const fetchData = async () => {
          try {
            setLoading(true)
            const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;
            const apiToken = import.meta.env.VITE_REACT_APP_API_TOKEN;
    
            console.log('API URL:', apiUrl);
            console.log('API Token:', apiToken);
    
            if (!apiUrl || !apiToken) {
              throw new Error('API URL or Token is missing');
            }
    
            const response = await makeRequest.get(url);
    
            console.log('API Response:', response.data);
            setData(response.data.data);
          } catch (error) {
            setError(true)
          }
          setLoading(false)
        };
    
        fetchData();
      }, [url]);
    
      return {data, loading, error};
};

export default useFetch
