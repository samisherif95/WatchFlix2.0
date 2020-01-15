import { combineReducers } from "redux";

import usersReducer from "./users_reducer";
import videosReducer from './videos_reducer';
import genreReducer from './genre_reducer';
import myListReducer from './mylists_reducer'

const entitiesReducer = combineReducers({
    users: usersReducer,
    videos: videosReducer,
    genres: genreReducer,
    mylist: myListReducer,
});

export default entitiesReducer;