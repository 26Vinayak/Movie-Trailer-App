const API_KEY = "baf9509edd8e7594811b09e6e0e6aba3";


const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};


// https://api.themoviedb.org/3/trending/all/week?api_key=baf9509edd8e7594811b09e6e0e6aba3&language=en-US
// https://api.themoviedb.org/3/discover/tv?api_key=baf9509edd8e7594811b09e6e0e6aba3&with_networks=213
export default requests;
