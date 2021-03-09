import React, { useState, useEffect } from 'react';
import './css/Banner.css';
import axiosConfig from '../axios';
import requests from '../Request';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

function Banner() {

    const [movie,setMovie] = useState([]);
    const [trailerUrl,setTrailerUrl] = useState("");
    
    useEffect(()=>{
        async function fetchData(){
            const request = await axiosConfig.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[
                    Math.floor(Math.random()*request.data.results.length-1)
                ]
            );
            return request;
        }
        fetchData();
    },[]);


    console.log(movie);




    function truncate(string, n){
        return string?.length > n ? string.substring(0,n-1) + "...":string;
    }
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

    return (
        <header style = {{
            objectFit:"contain",
            backgroundSize:"cover",
            backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            backgroundPosition:"center center",
        }} 
         className = "banner" >

        <div className = "banner-contents">

            <h1 className = "banner_title">
                {movie?.title || movie?.name || movie?.original_name}
            </h1>
            <div className = "banner_buttons">
                <button className = "banner_button" onClick = {()=>handleClick(movie)}>Play &#9654;</button>
                <button className = "banner_button">My List</button>
            </div>
            <h1 className = "banner_description">{truncate(movie?.overview,150)} </h1>
        </div>
        <div className = "banner_fadeBottom"/>
        {trailerUrl && <YouTube videoId = {trailerUrl} opts = {opts}/>}
        </header>
    );
}

export default Banner;
