import {Routes, Route} from "react-router-dom";
import {MovieList, MovieDetail, Search, PageNotFound} from "../pages";


//before mentioning our routes we must set up the components

import React from 'react'

export const AllRoutes = () => {
  return (
    <div className="dark:bg-gray-800">
    <Routes>
        <Route path= "" element={<MovieList apiPath="movie/now_playing" title="Home"/>} />
        <Route path= "movie/:id" element= {<MovieDetail/>} />
        <Route path= "movies/popular" element={<MovieList apiPath="movie/popular" title= "Popular"/>} />
        <Route path= "movies/top" element={<MovieList apiPath= "movie/top-rated" title= "Top Rated"/>} />
        <Route path= "movies/upcoming" element={<MovieList apiPath="movie/upcoming" title= "Upcoming"/>} />
        <Route path= "search" element={<Search apiPath="search/movie"/>} />
        <Route path= "*" element={<PageNotFound/>} />
    </Routes>
    </div>
  )
}


