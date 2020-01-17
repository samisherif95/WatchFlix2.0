import { connect } from 'react-redux';
import { requestVideos } from '../../actions/videos_actions';
import { requestGenres } from '../../actions/genre_actions';
import { requestLists,deleteFromList,addToList } from '../../actions/mylist_actions';
import  MyListPage from './mylist'
import { withRouter } from 'react-router-dom'

const mapStateToProps = (state) => ({
    currentUser: state.entities.users[state.session.id],
    videos: Object.values(state.entities.videos),
    genres: Object.values(state.entities.genres),
    mylist: Object.values(state.entities.mylist)
})

const mapDispatchToProps = dispatch => ({
    requestVideos: () => dispatch(requestVideos()),
    requestGenres: () => dispatch(requestGenres()),
    requestLists: () => dispatch(requestLists()),
    deleteFromList: (videoId) => dispatch(deleteFromList(videoId)),
    addToList: (videoId) => dispatch(addToList(videoId))

})


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MyListPage))