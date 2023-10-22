import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Backup from "../assets/images/backup.png";

export const MovieDetail = () => {
const params = useParams();
// all the data will be stored here
const [movie, setMovie] = useState({});
const image = movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : Backup ;

useEffect(() => {
async function fetchMovie(){
  const response = await fetch(`https://api.themoviedb.org/3/movie/{$param.id}?api_key=b80d59c33d6d57ed9c7e3713f91c188a&query`);
  const json = await response.json()
  setMovie(json);
  console.log(json);
}
fetchMovie();
}, [])

  return (
  <main>
    <section className="flex justify-around flex-wrap py-5">
      <div className="max-w-sm">
      <img className="rounded" src={image} alt={movie.title} />
      </div>
      <div>{movie.title}</div>
    </section>
  </main>
  )
}


