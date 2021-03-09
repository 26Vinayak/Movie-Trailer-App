import React, { useState, useEffect } from 'react'
import './css/Row.css'
import axiosConfig from '../axios';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

function Row({title,fetchUrl,isLargeRow = false}) {
    
    const [movies,setMovies] = useState([]);
    const base_url = "https://image.tmdb.org/t/p/original/";
    const [trailerUrl,setTrailerUrl] = useState("");
    useEffect(()=>{
        async function fetchData(){
            const request = await axiosConfig.get(fetchUrl);

            setMovies(request.data.results);

            return request;
        }
        fetchData();
    },[fetchUrl]);


    const opts = {
        height:'390',
        width:'100%',
        playerVars:{
            autoplay:1,
        },
    };
    const handleClick = (movie)=>{
        console.log(movie?.name || movie?.original_name||movie?.original_title);
        if(trailerUrl)
        {
            setTrailerUrl("");
        }
        else{
            movieTrailer(movie?.name||movie?.original_name||movie?.original_title|| "").then(url =>{
                const search =new URL(url).search
                const urlParams =new URLSearchParams(search);
                setTrailerUrl(urlParams.get("v"));
            }).catch((error)=> console.log(error));
        }
    }
    console.log(trailerUrl);
    return (
        <div className = "row">

            <h2>{title}</h2>
            <div className = "row_posters">
                {movies.map((movie) => {
                    return ((isLargeRow && movie.poster_path) || (!isLargeRow && movie.backdrop_path))?<img
                        className = {`row_poster ${isLargeRow && "row_posterLarge"}`}
                        key = {movie.id}
                        onClick = {()=> handleClick(movie)}
                        src = {`${base_url}${
                        isLargeRow ? movie.poster_path : movie.backdrop_path
                    }`} alt ={movie?.name}/>:<img src = "" alt = ""/>
                })}
            </div>

            
            {trailerUrl && <YouTube videoId = {trailerUrl} opts = {opts}/>}
        </div>
    );
}

export default Row;
