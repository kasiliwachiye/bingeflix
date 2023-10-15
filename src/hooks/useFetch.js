import { useState, useEffect } from "react"; 



export const useFetch = (apiPath) => {
    const [data, setData] = useState([]);
   const url = `https://api.themoviedb.org/3/${apiPath}?api_key=9c876a4f0e3552f73edb96a3c16b8aee`;
    // while fetching the movies data do not forget the url
useEffect (() => { async function fetchMovies(){ 
    const response = await fetch(url);
    const json= await response.json(); 
    setData(json.results);
  }
  fetchMovies();
  },[url])

  return {data}
}


