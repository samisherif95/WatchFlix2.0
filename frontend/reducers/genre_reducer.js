import { FETCH_ALL_GENRE }  from '../actions/genre_actions';

export default (oldstate = {}, action) => {
    Object.freeze(oldstate);
    switch (action.type) {
        case FETCH_ALL_GENRE:
            return action.genres;
        default:
            return oldstate;
    }
};