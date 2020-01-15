import { connect } from 'react-redux';
import { requestVideos} from '../../actions/videos_actions';
import { requestGenres} from '../../actions/genre_actions';
import { requestLists } from '../../actions/mylist_actions';
import VideoIndex from './videoIndex';
import {withRouter} from 'react-router-dom'

const mapStateToProps = (state) => ({
    currentUser: state.entities.users[state.session.id],
    videos: Object.values(state.entities.videos),
    genres: Object.values(state.entities.genres),
    // mylists: Object.values(state.entities.mylists)
})

const mapDispatchToProps = dispatch => ({   
    requestVideos: () => dispatch(requestVideos()),
    requestGenres: () => dispatch(requestGenres()),
    requestLists: () => dispatch(requestLists()),
    deleteFromList: (videoId) => dispatch(deleteFromList(videoId)),
    addToList: (videoId) => dispatch(addToList(videoId))
})


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(VideoIndex))