import React from 'react';
import { Link } from 'react-router-dom';
import VideoIndex from '../VideosIndex/videoIndex'



class HomePage extends React.Component{
    constructor(props){
        super(props)
        this.state = {currentUser:this.props.currentUser}
    }

    render(){
        if (this.props.currentUser) {
            return ( null ); 
        } else {
            return (
                <div className='homePage'>

                    <img src={window.background} alt="back_image" className='watchFlixBackground' />
                    
                    <div className="header">
                        <img src={window.logo} alt="logo" className='watchFlixlogo' />
                        <Link to="/login" className="login btn-sml">Sign In</Link>
                    </div>

                    <div className="showcase-content">
                        <h1>All of WatchFlix</h1>
                        <p>Watch anywhere. Cancel anytime</p>
                    </div>
                
                    
                    <Link to="/signup" className="login btn-xl">TRY 30 DAYS FREE</Link>
                </div>
            ); 
        }
    }
}

export default HomePage
