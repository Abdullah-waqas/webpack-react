import { API_KEY, BASE_API_URL } from "../constants"
import { fetchWrapper } from "./fetch"


export const getMovieList = () => {
    return fetchWrapper.get(`${BASE_API_URL}/3/trending/movie/week?api_key=${API_KEY}`)
}

export const getMovieDetails = (id) => {
    return fetchWrapper.get(`${BASE_API_URL}/3/movie/${id}?api_key=${API_KEY}&language=en-US`)
}