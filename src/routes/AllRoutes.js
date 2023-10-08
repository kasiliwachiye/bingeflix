import {Routes, Route} from "react-router-dom";
import {MoviesList, MovieDetail, Search, PageNotFound} from "../pages";


//before mentioning our routes we must set up the components

import React from 'react'

export const AllRoutes = () => {
  return (
    <div className="dark:bg-slate-800">
    <Routes>
        <Route path= "/" element={<MoviesList/>} />
        <Route path= "movie/:id" element= {<MovieDetail/>} />
        <Route path= "movies/popular" element={<MoviesList/>} />
        <Route path= "movies/top" element={<MoviesList/>} />
        <Route path= "movies/upcoming" element={<MoviesList />} />
        <Route path= "search" element={<Search/>} />
        <Route path= "*" element={<PageNotFound/>} />
    </Routes>
    </div>
  )
}



