import React from 'react'
import VideoIndexItem from '../VideosIndex/videoIndexItem'

class MyListPage extends React.Component {
    constructor(props) {
        super(props);
        this.playMainVideo = this.playMainVideo.bind(this)
        this.state = {
            mainVideo: 0,
        }
        this.toggleMute = this.toggleMute.bind(this)
    }

    componentDidMount() {
        this.props.requestGenres()
        this.props.requestVideos()
        this.props.requestLists()
    }

    getvideosfromList() {
        // let videos = this.props.videos;
        // let result = [];
        // for (let i = 0; i < videos.length; i++) {
        //     if (videos[i].genre_ids.includes(id)) {
        //         result.push(videos[i])
        //     }
        // }
        // return result;
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
            console.log('mute on')
        } else {
            vid.muted = false;
            console.log('mute off')
        }
    }


    render() {
        if (this.props.videos.length === 0 || this.props.genres.length === 0) {
            return null;
        }


        const {history, mylist, deleteFromList, addToList} = this.props;
        
        if (this.getvideosfromList().length !== 0){
            return (
                <div className='videoIndex'>
                    <div className='mainVideoDisplay'>
                        <i className="fas fa-volume-mute fa-3x" onClick={this.toggleMute}></i>
                        <video poster={this.getvideosfromList()[0].photo_url} onMouseOver={this.playMainVideo} id='vids' muted><source src={this.getvideosfromList()[0].video_url} type="video/mp4" /></video>
                        <div className='carouselRow'>
                            {
                                this.getvideosfromList().map(video => (
                                    <VideoIndexItem key={video.id} video={video} history={history} deleteFromList={deleteFromList} addToList={addToList} mylist={mylist} />
                                ))
                            }
                        </div>
                    </div>

                    {/* <div className='restOfVidIndex'>
                    <div className='carouselRow'>
                        {
                            mylistVids.slice(5).map(video => (
                                <VideoIndexItem key={video.id} video={video} history={history} deleteFromList={deleteFromList} mylist={mylist} />
                            ))
                        }

                    </div>
                </div> */}

                </div>
            );

        }else{
            return(
                <div className='EmptyList'>
                </div>
            )
        }
    }
}
export default MyListPage;