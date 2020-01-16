import React from 'react'

class VideoIndexItem extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            mylist: []
        }
        this.onHoverPlay = this.onHoverPlay.bind(this);
        this.onLeaveStop = this.onLeaveStop.bind(this);
        this.onToggle = this.onToggle.bind(this);
        // this.addMovietoList = this.addMovietoList.bind(this)


    }

    // addMovietoList(e) {
    //     console.log(e.currentTarget)
    //     let vid = e.currentTarget
    //     this.props.addToList(vid)
    // }

    toggleHidden(e) {
        e.currentTarget.classList.remove('hidden')
    }

    onHoverPlay(e) {
        let video = e.currentTarget.children[2];
        e.persist();
        video.play().then(null, () => {
            video.play();
        });
    }
    onToggle(e){
        this.toggleHidden(e);
        this.onHoverPlay(e);
    }

    onLeaveStop(e) {
        e.currentTarget.classList.add('hidden')
        let video = e.currentTarget.children[2];
        video.pause();
        video.currentTime = 0;
        video.load();
    }

    render(){
        const {video,history} = this.props;
        return(
            <div className='carousel hidden' onMouseLeave={this.onLeaveStop} onMouseOver={this.onToggle} >
                <i className="fas fa-plus-circle fa-2x" value={video.id} onClick={this.addMovietoList}></i>
                <strong className='MovieName'>{video.title}</strong>
                <video poster={video.photo_url} onClick={() => history.push(`/browse/${video.id}`)} >
                    <source src={video.video_url} type="video/mp4" />
                </video>
            </div>
        );
    }
}

export default VideoIndexItem