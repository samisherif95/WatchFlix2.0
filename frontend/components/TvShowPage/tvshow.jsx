import React from 'react'
import VideoIndexItem from '../VideosIndex/videoIndexItem'

class TvShowPage extends React.Component {
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

    getvideosforGenre(id) {
        let videos = this.props.videos;
        let result = [];
        for (let i = 0; i < videos.length; i++) {
            if (videos[i].genre_ids.includes(id)) {
                result.push(videos[i])
            }
        }
        return result;
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
            // return('mute on')
            this.setState({
                muted: true
            })
        } else {
            vid.muted = false;
            // return ('mute off')
            this.setState({
                muted: false
            })
        }
    }


    render() {
        if (this.props.videos.length === 0 || this.props.genres.length === 0) {
            return null;
        }
        
        
        const { videos, history, addToList,deleteFromList , mylist} = this.props;
        let tvshowVids = videos.filter(video =>(
            video.video_type === 'TvShow'
        ))

        const muteToggle = this.state.muted ? (
            <i className="fas fa-volume-mute fa-3x" onClick={this.toggleMute}></i>
            ) : (
            <i className="fas fa-volume-up fa-3x" onClick={this.toggleMute}></i>
        )
        return (
            <div className='videoIndex'>
                <div className='mainVideoDisplay'>
                    {muteToggle}
                    <video poster={tvshowVids[0].photo_url} onMouseOver={this.playMainVideo} id='vids' muted><source src={tvshowVids[0].video_url} type="video/mp4" /></video>
                    <div className='carouselRow'>
                        {
                            tvshowVids.slice(0, 5).map(video => (
                                <VideoIndexItem key={video.id} video={video} history={history} addToList={addToList} deleteFromList={deleteFromList} mylist={mylist}/>
                            ))
                        }
                    </div>
                </div>

                <div className='restOfVidIndex'>
                    <div className='carouselRow'>
                        {
                            tvshowVids.slice(5).map(video => (
                                <VideoIndexItem key={video.id} video={video} history={history} addToList={addToList} deleteFromList={deleteFromList} mylist={mylist}/>
                            ))
                        }

                    </div>
                </div>

            </div>
        );
    }
}
export default TvShowPage;