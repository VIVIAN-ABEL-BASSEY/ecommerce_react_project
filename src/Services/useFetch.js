import { useState, useRef, useEffect } from "react";

const baseUrl = process.env.REACT_APP_API_BASE_URL;

const useFetch = (path) => {
    const isMounted = useRef(false);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        isMounted.current = true;

        fetchData();
    
        return () => {
            isMounted.current = false;
        };
    }, [path]);

    const fetchData = async() => {
        console.log(baseUrl + path)
        try {
            const response = await fetch(baseUrl + path);
            if (response.ok) {
                const json = await response.json();
                if (isMounted.current) 
                    setData(json);
            } else {
                throw response;
            }
        } catch (e) {
            if (isMounted.current) setError(e);
        } finally {
            if (isMounted.current) setLoading(false);
        }
    }

    return { data, error, loading };
}

export { useFetch };

// import { useState,useEffect, useRef } from "react"
// const baseUrl = process.env.REACT_APP_API_BASE_URL;
// function useFetch(path){
//     const isMounted = useRef(false);
//     const [data,setData] = useState(null)
//     const [error, setError] = useState(null);
//     const [loading, setLoading] = useState(true)

//     useEffect(()=>{
//         isMounted.current = true; 
//         const fetchData = async ()=>{
//             try{
//                 console.log(baseUrl, path)
//                 const response = await fetch(baseUrl + path);
//                 console.log(response)
//                 if(response.ok){
//                     const json = await response.json()
//                     if (isMounted.current)
//                         setData(json);
//                 }else{
//                     throw response;
//                 }
//             }catch(e){
//                 if(isMounted.current) setError(e)
//             }finally{
//                 // if (isMounted.current) setLoading(false)
//             }
//         }

//         fetchData()
//         return ()=>{
//         isMounted.current = false;
//       } 
//     },[path])

//     return{data,error,loading}
// }
// export {useFetch}