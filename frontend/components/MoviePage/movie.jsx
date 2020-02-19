import React from 'react'
import VideoIndexItem from '../VideosIndex/videoIndexItem'

class MoviePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mainVideo: 0,
            muted: true
        }
        this.playMainVideo = this.playMainVideo.bind(this)
        this.toggleMute = this.toggleMute.bind(this);

    }

    componentDidMount() {
        this.props.requestGenres()
        this.props.requestVideos()
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

    render() {
        if (this.props.videos.length === 0 || this.props.genres.length === 0) {
            return null;
        }


        const { videos, history, addToList, deleteFromList, mylist } = this.props;
        let MovieVids = videos.filter(video => (
            video.video_type === 'Movie'
        ))

        const muteToggle = this.state.muted ? (
            <div className='volBT' onClick={this.toggleMute}> <i className="fas fa-volume-mute fa-3x" ></i></div>
            ) : (
                <div className='volBT' onClick={this.toggleMute}><i className="fas fa-volume-up fa-3x" ></i></div>
        )

        return (
            <div className='videoIndex'>
                <div className='mainVideoDisplay'>
                    {muteToggle}
                    <video poster={MovieVids[19].photo_url} onMouseOver={this.playMainVideo} id='vids' muted><source src={MovieVids[19].video_url} type="video/mp4" /></video>
                    <div className='carouselRowFirst'>
                        {
                            MovieVids.slice(0, 5).map(video => (
                                <VideoIndexItem key={video.id} video={video} history={history} addToList={addToList} deleteFromList={deleteFromList} mylist={mylist}/>
                            ))
                        }
                    </div>
                </div>
                
                <div className='restOfVidIndex'>
                    <div className='carouselRow'>
                        {
                            MovieVids.slice(5,10).map(video => (
                                <VideoIndexItem key={video.id} video={video} history={history} addToList={addToList} deleteFromList={deleteFromList} mylist={mylist}/>
                            ))
                        }
                    </div>

                    <div className='carouselRow'>
                        {
                            MovieVids.slice(10, 15).map(video => (
                                <VideoIndexItem key={video.id} video={video} history={history} addToList={addToList} deleteFromList={deleteFromList} mylist={mylist}/>
                            ))
                        }
                    </div>

                    <div className='carouselRow'>
                        {
                            MovieVids.slice(15, 20).map(video => (
                                <VideoIndexItem key={video.id} video={video} history={history} addToList={addToList} deleteFromList={deleteFromList} mylist={mylist}/>
                            ))
                        }
                    </div>

                    <div className='carouselRow'>
                        {
                            MovieVids.slice(20).map(video => (
                                <VideoIndexItem key={video.id} video={video} history={history} addToList={addToList} deleteFromList={deleteFromList} mylist={mylist}/>
                            ))
                        }
                    </div>
                    
                </div>

            </div>
        );
    }
}
export default MoviePage;