import { fetchAllGenre } from '../util/genre_api_util';

export const FETCH_ALL_GENRE = "FETCH_ALL_GENRE";

const receiveAllGenre = genres => {
    return {
        type: FETCH_ALL_GENRE,
        genres
    }
}

export const requestGenres = () => dispatch => {
    return fetchAllGenre().then(genres => dispatch(receiveAllGenre(genres)));
}
