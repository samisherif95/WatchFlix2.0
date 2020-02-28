import React from 'react'

class VideoIndexItem extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            checked: false,
            mute: false
        }
        this.onHoverPlay = this.onHoverPlay.bind(this);
        this.showDropDown = this.showDropDown.bind(this);
        this.onLeaveStop = this.onLeaveStop.bind(this);
        this.onToggle = this.onToggle.bind(this);
        this.addMovietoList = this.addMovietoList.bind(this)
    }

    componentDidMount(){
        // this.setState({
        //     checked: this.props.mylist[this.props.video.id] ? true : false
        // })
    }

    addMovietoList(id) {
        this.props.addToList(id)
        this.setState({
            checked: true
        })
    }

    removeFromList(id){
        this.props.deleteFromList(id)
        this.setState({
            checked: false
        })
    }

    toggleHidden(e) {
        e.currentTarget.classList.remove('hidden')
    }

    onHoverPlay(e) {
        // console.log(e.currentTarget)
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

    showDropDown(){
        console.log('show Info')
    }

    onLeaveStop(e) {
        e.currentTarget.classList.add('hidden')
        let video = e.currentTarget.children[2];
        video.pause();
        video.currentTime = 0;
        video.load();
    }

    //rendering each item in the carousel
    render(){
        const {video,history} = this.props;
        let result= []
        Object.keys(this.props.mylist).forEach( key => {
            result.push(this.props.mylist[key].video_id);
        })
        // debugger
        const toggleList = result.includes(this.props.video.id) ? (
            <i className= "fas fa-check-circle fa-lg addToList" value = {video.id} onClick = {() => this.removeFromList(video.id)}></i >
            
            ):(
                <i className= "fas fa-plus-circle fa-lg addToList" value = {video.id} onClick = {() => this.addMovietoList(video.id)}></i >
        )

        return(
            <div className='carousel hidden' onMouseLeave={this.onLeaveStop} onMouseOver={this.onToggle} >
                {toggleList}
                <strong className='MovieName'>{video.title}</strong>
                <video poster={video.photo_url} onClick={() => history.push(`/browse/${video.id}`)} >
                    <source src={video.video_url} type="video/mp4" />
                </video>
                <div className='dropDownInfo' onClick={this.showDropDown}>
                    <i className="fas fa-caret-down fa-lg"></i>
                </div>
            </div>
        );
    }
}

export default VideoIndexItem