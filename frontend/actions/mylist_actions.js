import * as MylistAPI from '../util/mylist_api_util';

export const FETCH_MY_LISTS = "FETCH_MY_LISTS";
export const ADD_TO_MYLIST = "ADD_TO_MYLIST";
export const DELETE_FROM_MYLIST = "DELETE_FROM_MYLIST";

const fetchMylist = (videos) =>({
    type: FETCH_MY_LISTS,
    videos
})

const addToMylist = (videoId) => ({
    type: ADD_TO_MYLIST,
    videoId
})

const deleteFromMylist = (videoId) => ({
    type: DELETE_FROM_MYLIST,
    videoId
})

export const requestLists = () => dispatch => (
    MylistAPI.getMyLists().then(videos => dispatch(fetchMylist(videos)))
)

export const addToList = (videoId) => dispatch => (
    MylistAPI.addList(videoId).then(videoId => dispatch(addToMylist(videoId)))
)

export const deleteFromList = (videoId) => dispatch => (
    MylistAPI.deleteFromList(videoId).then(videoId => dispatch(deleteFromMylist(videoId)))
)