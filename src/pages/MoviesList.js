import { useEffect, useState } from "react";
import {Card} from "../components/Card";


export const MoviesList = () => {
const [movies, setMovies] = useState([]);
// while fetching the movies data do not forget the url
useEffect (() => { async function fetchMovies(){ 
  const response = await fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=b80d59c33d6d57ed9c7e3713f91c188a");
  const data = await response.json(); 
  setMovies(data.results);
}
fetchMovies();
},[])

  return (
   <main>
   {/* padding added below */}
   <section className="max-w-7xl mx-auto py-7">
   {/* viewer screen response added */}
   <div className="flex justify-start flex-wrap">
   {/* each movie has an access to a specific id */}
   {movies.map((movie)=> (
    <Card key = {movie.id} movie={movie}/>
   ))}
   

   </div>
   </section>
   </main>
  )
}


