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

    }

    toggleHidden(e) {
        e.currentTarget.classList.remove('hidden')
    }

    onHoverPlay(e) {
        let video = e.currentTarget.children[0];
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
        let video = e.currentTarget.children[0];
        video.pause();
        video.currentTime = 0;
        video.load();

    }

    render(){
        const {video,history} = this.props;
        // console.log(this.props);
        return(
            <div className='carousel hidden' onMouseLeave={this.onLeaveStop} onMouseOver={this.onToggle} >
                <i className="fas fa-plus-circle fa-3x" onClick={()=> console.log('sami is awesome')}></i>
                <strong className='MovieName'>{video.title}</strong>
                <video poster={video.photo_url} onClick={() => history.push(`/browse/${video.id}`)} >
                    <source src={video.video_url} type="video/mp4" />
                </video>
            </div>
        );
    }
}

export default VideoIndexItem