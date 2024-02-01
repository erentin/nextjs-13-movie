const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZWUzMTUzMmQ1NmMxYTAxZjJlMWU2YTVlOWMwYzZmZiIsInN1YiI6IjY1YmI0NjI5MTFjMDY2MDBlNWNlZjNiMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.t2sMR8XZ6F8d_s5jMTJ7zQig0nStHSBOAzxWw-Y8wjU'
    }
};

const fetchMovieApi = async(pathname, query = '') => {
    
    try {
        const res = await fetch(`${process.env.API_URL}${pathname}${query}`, options)
            .then(response => response.json())
    
        return res;
    } catch (error) {
        throw new Error(error)
    }
    
}

const getSingleCategory = async (genreId) => {
    console.log(genreId, "/discover/movie"+`?with_genres=${genreId}`)
    return fetchMovieApi("/discover/movie", `?with_genres=${genreId}`)
}

const getCategories = async () => {
    return fetchMovieApi("/genre/movie/list")
}

const getPopularMovies = async () => {
    return fetchMovieApi("/movie/popular")
}

const getTopRatedMovies = async () => {
    return fetchMovieApi("/movie/top_rated")
}

const getMovie = async (movieId) => {
    return fetchMovieApi(`/movie/${movieId}`)
}

export  {   
            fetchMovieApi,
            getSingleCategory,
            getCategories,
            getPopularMovies,
            getTopRatedMovies,
            getMovie 
        }
