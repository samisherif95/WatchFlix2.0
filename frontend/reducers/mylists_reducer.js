import {FETCH_MY_LISTS,CREATE_MYLIST,DELETE_FROM_MYLIST} from '../actions/mylist_actions';
import { merge } from 'lodash';

export default (oldstate = {}, action) => {
    Object.freeze(oldstate);
    switch (action.type) {
        case FETCH_MY_LISTS:
            return action.videos;
        case CREATE_MYLIST:
            return Object.assign({}, oldstate, { [action.videoId.id]: action.videoId });
        case DELETE_FROM_MYLIST:
            let newstate = merge({}, oldstate);
            delete newstate[action.videoId];
            return newstate;
        default:
            return oldstate;
    }
};