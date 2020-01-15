import { connect } from 'react-redux';
import VideoPlayer from './videoplayer';
import {withRouter} from 'react-router-dom'
import { requestVideo } from '../../actions/videos_actions';

const mapStateToProps = (state, ownProps) => ({
    video: state.entities.videos[ownProps.match.params.videoId]
})

const mapDispatchToProps = dispatch => {
    return ({
        requestVideo: videoId => dispatch(requestVideo(videoId))
    });
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(VideoPlayer))