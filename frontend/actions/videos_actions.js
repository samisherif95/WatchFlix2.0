import *  as VideoActions from '../util/videos_api_util'

export const FETCH_ALL_VIDEOS = 'FETCH_ALL_VIDEOS';
export const FETCH_VIDEO = 'FETCH_VIDEO';

const fetchAllVideos = videos =>({
    type: FETCH_ALL_VIDEOS,
    videos
})

const fetchVideo = video =>({
    type: FETCH_VIDEO,
    video
})

export const requestVideos = () => dispatch =>(
    VideoActions.fetchAllVideos().then((videos) => dispatch(fetchAllVideos(videos)))
)

export const requestVideo = (videoId) => dispatch => (
    VideoActions.fetchAVideo(videoId).then((video) => dispatch(fetchVideo(video)))
)