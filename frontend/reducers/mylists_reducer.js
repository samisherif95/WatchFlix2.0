import {FETCH_MY_LISTS,ADD_TO_MYLIST,DELETE_FROM_MYLIST} from '../actions/mylist_actions';
import { merge } from 'lodash';

export default (oldstate = {}, action) => {
    Object.freeze(oldstate);
    switch (action.type) {
        case FETCH_MY_LISTS:
            return action.videos;
        case ADD_TO_MYLIST:
            return Object.assign({}, oldstate, { [action.videoId.video_id]: action.videoId });
        case DELETE_FROM_MYLIST:
            let newstate = Object.assign({}, oldstate);
            delete newstate[action.videoId.video_id];
            return newstate;
        default:
            return oldstate;
    }
};