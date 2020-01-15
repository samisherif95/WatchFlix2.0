import React from 'react'
import VideoIndexItem from '../VideosIndex/videoIndexItem'

class TvShowPage extends React.Component {
    constructor(props) {
        super(props);
        this.playMainVideo = this.playMainVideo.bind(this)
        this.state = {
            mainVideo: 0
        }
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

    // playMiniVideos(){
    //     let video = document.getElementById('MiniVids');
    //     video.play();
    //     video.addEventListener('ended', function () {
    //         video.load();
    //     });
    // }


    render() {
        if (this.props.videos.length === 0 || this.props.genres.length === 0) {
            return null;
        }
        
        
        const { videos, genres, history } = this.props;
        let tvshowVids = videos.filter(video =>(
            video.video_type === 'TvShow'
        ))

        console.log(this.props.videos[0].video_url);
        return (
            <div className='videoIndex'>
                <div className='mainVideoDisplay'>
                    <video poster={tvshowVids[0].photo_url} onMouseOver={this.playMainVideo} id='vids' muted><source src={videos[0].video_url} type="video/mp4" /></video>
                    <div className='carouselRow'>
                        {
                            tvshowVids.slice(0, 5).map(video => (
                                <VideoIndexItem key={video.id} video={video} history={history} />
                            ))
                        }
                    </div>
                </div>

                <div className='restOfVidIndex'>
                    <div className='carouselRow'>
                        {
                            tvshowVids.slice(5).map(video => (
                                <VideoIndexItem key={video.id} video={video} history={history} />
                            ))
                        }

                    </div>
                </div>

            </div>
        );
    }
}
export default TvShowPage;