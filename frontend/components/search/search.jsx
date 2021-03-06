import React from 'react'
import VideoIndexItem from '../VideosIndex/videoIndexItem'

class SearchPage extends React.Component{
    constructor(props){
        super(props);
        this.state ={}
    }

    componentWillMount(){
        this.props.requestGenres()
        this.props.requestVideos()
    }

    render(){
        if (this.props.videos.length === 0 || this.props.genres.length === 0) {
            return null;
        }
        const { videos, history, addToList, deleteFromList, mylist } = this.props;
        let search = this.props.location.pathname.slice(8)
        console.log(search)
        // debugger
        let searchVids = videos.filter(video =>(
            video.title.toLowerCase().includes(search.toLowerCase())
        ))
        if (searchVids.length !==0 && search.length!==0){
            return(
                <div className='videoIndex'>
                    <strong className='SearchTitle'>Your Search: {search}</strong>
                    <div className='SearchPageCss'>
                        <div className='carouselRowSearch'>
                            {
                                searchVids.map(video => (
                                    <VideoIndexItem key={video.id} video={video} history={history} addToList={addToList} deleteFromList={deleteFromList} mylist={mylist} />
                                ))
                            }
                        </div>
                    </div>
                </div>
            )
        }
        else {
            return(
                <div className='videoIndex'>
                    <div className='EmptySearchPageCss'>
                        <p>kill me now</p>
                    </div>
                </div>
            )
        }
    }
}

export default SearchPage;