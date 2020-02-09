import React from "react";
import HomePageContainer from '../components/HomePage/homepage_container'
import LoginFormContainer from '../components/session_forms/login_form_container';
import SignUpFormContainer from '../components/session_forms/signup_form_container';
import NavBarContainer from '../components/NavBar/navbar_container';
import VideoIndexContainer from '../components/VideosIndex/videoIndex_container'
import TvShowContainer from '../components/TvShowPage/tvshow_container';
import MovieContainer from '../components/MoviePage/movie_container'
import MylistContainer from '../components/myList/mylist_container'
import { AuthRoute, ProtectedRoute } from '../util/route_util'
import VideoPlayerContainer from '../components/videoPlayer/videoplayer_container';
import {Route} from 'react-router-dom'


const App = () => (
    <>
        <Route exact path="/" component={HomePageContainer} />
        <ProtectedRoute exact path='/browse/TvShows' component={TvShowContainer}/>
        <ProtectedRoute exact path='/browse/Movies' component={MovieContainer}/>
        <ProtectedRoute exact path='/browse/my-list' component={MylistContainer} />
        <ProtectedRoute path='/browse' component= {NavBarContainer} />
        <Route exact path='/browse' component={VideoIndexContainer}/>
        <AuthRoute exact path="/signup" component={SignUpFormContainer} />
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <ProtectedRoute exact path='/browse/:videoId' component={VideoPlayerContainer}/>
    </>
);

export default App;