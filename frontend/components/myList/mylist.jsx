import React from 'react'
import VideoIndexItem from '../VideosIndex/videoIndexItem'

class MyListPage extends React.Component {
    constructor(props) {
        super(props);
        this.playMainVideo = this.playMainVideo.bind(this)
        this.state = {
            mainVideo: 0,
            muted: true
        }
        this.toggleMute = this.toggleMute.bind(this)
    }

    componentDidMount() {
        this.props.requestGenres()
        this.props.requestVideos()
        this.props.requestLists()
    }

    getvideosfromList() {
        let videos = this.props.videos;
        let mylist = this.props.mylist;
        let result = [];
        for(let i =0 ; i < mylist.length;i++){
            for (let j = 0; j < videos.length; j++){
                if (mylist[i].video_id === videos[j].id && mylist[i].user_id === this.props.currentUser.id){
                    result.push(videos[j])
                }
            }
        }
        return result
    }

    playMainVideo() {
        let newMainVideo = this.state.mainVideo + 1
        this.setState({
            mainVideo: newMainVideo
        })
        let video = document.getElementById('vids');
        if (this.state.mainVideo < 1) {
            video.play();
            video.addEventListener('ended', function () {
                video.load();
            });
        }
    }

    toggleMute() {
        let vid = document.getElementById('vids')
        if (vid.muted === false) {
            vid.muted = true;
            this.setState({
                muted: true
            })
        } else {
            vid.muted = false;
            this.setState({
                muted: false
            })
        }
    }


    render() {
        if (this.props.videos.length === 0 || this.props.genres.length === 0) {
            return null;
        }


        const {history, mylist, deleteFromList, addToList} = this.props;
        
        const muteToggle = this.state.muted ? (
            <i className="fas fa-volume-mute fa-3x" onClick={this.toggleMute}></i>
            ) : (
             <i className="fas fa-volume-up fa-3x" onClick={this.toggleMute}></i>
        )
 
        if (this.getvideosfromList().length !== 0){
            return (
                <div className='videoIndex'>
                    <div className='mainVideoDisplay'>
                        {muteToggle}
                        <video poster={this.getvideosfromList()[0].photo_url} onMouseOver={this.playMainVideo} id='vids' muted><source src={this.getvideosfromList()[0].video_url} type="video/mp4" /></video>
                        <div className='carouselRowFirst'>
                            {
                                this.getvideosfromList().map(video => (
                                    <VideoIndexItem key={video.id} video={video} history={history} deleteFromList={deleteFromList} addToList={addToList} mylist={mylist} />
                                ))
                            }
                        </div>
                    </div>
                </div>
            );

        }else{
            return(
                <div className='EmptyPage'>
                    <div className='EmptyList'>
                        <h1>You have no videos in your list</h1>
                    </div>
                </div>
            )
        }
    }
}
export default MyListPage;