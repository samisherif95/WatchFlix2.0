import { FETCH_ALL_VIDEOS, FETCH_VIDEO } from '../actions/videos_actions'

export default (state = {}, action) => {
    Object.freeze(state);
    switch(action.type){
        case FETCH_ALL_VIDEOS:
            return action.videos;
        case FETCH_VIDEO:
            return Object.assign({},state, {[action.video.id]: action.video});
        default:
            return state;
    }
}