import React from 'react';
import VideoIndexItem from './videoIndexItem'

class VideoIndex extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            mainVideo: 0,
            muted: true
        }
        this.playMainVideo = this.playMainVideo.bind(this);
        this.toggleMute = this.toggleMute.bind(this);
    }


    componentDidMount(){
        this.props.requestGenres()
        this.props.requestVideos()
        this.props.requestLists()
    }

    getvideosfromList() {
        let videos = this.props.videos;
        let mylist = this.props.mylist;
        let result = [];
        for (let i = 0; i < mylist.length; i++) {
            for (let j = 0; j < videos.length; j++) {
                if (mylist[i].video_id === videos[j].id && mylist[i].user_id === this.props.currentUser.id) {
                    result.push(videos[j])
                }
            }
        }
        return result
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
        console.log('hitting here')
        let vid = document.getElementById('vids')
        if(vid.muted === false){
            vid.muted = true;
            // return('mute on')
            this.setState({
                muted: true
            })
        }else{
            vid.muted = false;
            // return ('mute off')
            this.setState({
                muted: false
            })
        }
    }


    render(){
        if(this.props.videos.length === 0 || this.props.genres.length===0){
            return null;
        }
        const ListVideoIndex = this.getvideosfromList().length !== 0 ? (
            <>
                <p className='genreName'>MyList</p>
                <div className='carouselRow'>
                    {
                        this.getvideosfromList().map(video => (
                            <VideoIndexItem key={video.id} video={video} history={history} addToList={addToList} deleteFromList={deleteFromList} mylist={mylist} />
                        ))
                    }

                </div>
            </>
        ) : <p></p>

        const muteToggle = this.state.muted ? (
            <div className='volBT' onClick={this.toggleMute}><i className="fas fa-volume-mute fa-3x" ></i></div>
            ) : (
            <div className='volBT' onClick={this.toggleMute}><i className="fas fa-volume-up fa-3x" ></i></div>
        )
        const { videos, genres, history, addToList, deleteFromList ,mylist} = this.props;
        return (
            <div className='videoIndex'>
                <div className='mainVideoDisplay'>
                    {muteToggle}
                    <video poster={videos[0].photo_url} onMouseOver={this.playMainVideo} id='vids' muted>
                        <source src={videos[0].video_url} type="video/mp4" autoPlay/>
                        </video>       
                    <div className='carouselRowFirst'>
                        {
                            videos.slice(0,9).map(video => (
                                <VideoIndexItem key={video.id} video={video} history={history} addToList={addToList} deleteFromList={deleteFromList} mylist={mylist}/>
                            ))
                        }
                    </div>
                </div>

                <div className='restOfVidIndex'>
                    {this.getvideosfromList().length !== 0 && <p className='genreName'>MyList</p> }
                    {this.getvideosfromList().length !== 0 && <div className='carouselRow'>
                        {
                            this.getvideosfromList().map(video => (
                                <VideoIndexItem key={video.id} video={video} history={history} addToList={addToList} deleteFromList={deleteFromList} mylist={mylist} />
                            ))
                        }

                    </div>}

                    <p className='genreName'>{genres[0].genre}</p>
                    <div className='carouselRow'>
                        {
                            this.getvideosforGenre(genres[0].id).map(video => (
                                <VideoIndexItem key={video.id} video={video} history={history} addToList={addToList} deleteFromList={deleteFromList} mylist={mylist}/>
                            ))
                        }

                    </div>

                    <p className='genreName'>{genres[1].genre}</p>
                    <div className='carouselRow'>
                        {
                            this.getvideosforGenre(genres[1].id).map(video => (
                                <VideoIndexItem key={video.id} video={video} history={history} addToList={addToList} deleteFromList={deleteFromList} mylist={mylist}/>
                            ))
                        }

                    </div>
                    
                    <p className='genreName'>{genres[2].genre}</p>
                    <div className='carouselRow'>
                        {
                            this.getvideosforGenre(genres[2].id).map(video => (
                                <VideoIndexItem key={video.id} video={video} history={history} addToList={addToList} deleteFromList={deleteFromList} mylist={mylist}/>
                            ))
                        }

                    </div>

                    <p className='genreName'>{genres[3].genre}</p>
                    <div className='carouselRow'>
                        {
                            this.getvideosforGenre(genres[3].id).map(video => (
                                <VideoIndexItem key={video.id} video={video} history={history} addToList={addToList} deleteFromList={deleteFromList} mylist={mylist}/>
                            ))
                        }

                    </div>

                    <p className='genreName'>{genres[4].genre}</p>
                    <div className='carouselRow' id ='lastCar'>
                        {
                            this.getvideosforGenre(genres[4].id).map(video => (
                                <VideoIndexItem key={video.id} video={video} history={history} addToList={addToList} deleteFromList={deleteFromList} mylist={mylist}/>
                            ))
                        }

                    </div>
                </div>

            </div>
        );
    }
}
export default VideoIndex;