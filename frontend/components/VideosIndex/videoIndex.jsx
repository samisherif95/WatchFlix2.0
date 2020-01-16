import React from 'react';
import VideoIndexItem from './videoIndexItem'

class VideoIndex extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            mainVideo: 0,
        }
        this.playMainVideo = this.playMainVideo.bind(this);
        this.toggleMute = this.toggleMute.bind(this);
    }


    componentDidMount(){
        this.props.requestGenres()
        this.props.requestVideos()
        this.props.requestLists()
    }

    

    getvideosforGenre(id){
        let videos = this.props.videos;
        let result = [];
        for(let i=0 ;i < videos.length; i++){
            if(videos[i].genre_ids.includes(id)){
                result.push(videos[i])
            }
        }
        return result;
    }

    playMainVideo() {
        let newMainVideo = this.state.mainVideo+1
        this.setState({
            mainVideo: newMainVideo
        })
        let video = document.getElementById('vids');
        if(this.state.mainVideo < 1)
        {
            video.play();
            video.addEventListener('ended', function () {
                video.load();
            });
        }
    }

    toggleMute(){
        let vid = document.getElementById('vids')
        if(vid.muted === false){
            vid.muted = true;
            console.log('mute on')
        }else{
            vid.muted = false;
            console.log('mute off')
        }
    }


    render(){
        if(this.props.videos.length === 0 || this.props.genres.length===0){
            return null;
        }
        const { videos, genres, history, addToList, deleteFromList} = this.props;
        return (
            <div className='videoIndex'>
                <div className='mainVideoDisplay'>
                    <i className="fas fa-volume-mute fa-3x" onClick={this.toggleMute}></i>
                    <video poster={videos[0].photo_url} onMouseOver={this.playMainVideo} id='vids' muted><source src={videos[0].video_url} type="video/mp4" autoPlay/></video>       
                    <div className='carouselRow'>
                        {
                            videos.slice(0,9).map(video => (
                                <VideoIndexItem key={video.id} video={video} history={history} addToList={addToList} deleteFromList={deleteFromList} />
                            ))
                        }
                    </div>
                </div>

                <div className='restOfVidIndex'>
                    <p className='genreName'>{genres[0].genre}</p>
                    <div className='carouselRow'>
                        {
                            this.getvideosforGenre(genres[0].id).map(video => (
                                <VideoIndexItem key={video.id} video={video} history={history}/>
                            ))
                        }

                    </div>

                    <p className='genreName'>{genres[1].genre}</p>
                    <div className='carouselRow'>
                        {
                            this.getvideosforGenre(genres[1].id).map(video => (
                                <VideoIndexItem key={video.id} video={video} history={history} />
                            ))
                        }

                    </div>
                    
                    <p className='genreName'>{genres[2].genre}</p>
                    <div className='carouselRow'>
                        {
                            this.getvideosforGenre(genres[2].id).map(video => (
                                <VideoIndexItem key={video.id} video={video} history={history} />
                            ))
                        }

                    </div>

                    <p className='genreName'>{genres[3].genre}</p>
                    <div className='carouselRow'>
                        {
                            this.getvideosforGenre(genres[3].id).map(video => (
                                <VideoIndexItem key={video.id} video={video} history={history} />
                            ))
                        }

                    </div>

                    <p className='genreName'>{genres[4].genre}</p>
                    <div className='carouselRow' id ='lastCar'>
                        {
                            this.getvideosforGenre(genres[4].id).map(video => (
                                <VideoIndexItem key={video.id} video={video} history={history} />
                            ))
                        }

                    </div>
                </div>

            </div>
        );
    }
}
export default VideoIndex;