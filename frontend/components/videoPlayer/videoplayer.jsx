import React from 'react';

class VideoPlayer extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount() {
        this.props.requestVideo(this.props.match.params.videoId);
    }

    render(){
        return(
            <div className='fullScreenPlayer'>
                {
                    this.props.video ? <div className='watchVideoParent'><video controls autoPlay className="watchVideo"> <source src={this.props.video.video_url} type="video/mp4" /> </video> </div> : 
                    null
                }
            </div>
        );
    }
}

export default VideoPlayer;