import React from 'react'
import {Link} from 'react-router-dom'

class NavBar extends React.Component{
    constructor(props){
        super(props)
        this.toggledropdownClick = this.toggledropdownClick.bind(this)
        this.toggleSearchClick = this.toggleSearchClick.bind(this)
    }
    
    toggledropdownClick(){
        $(function (){
            $('.dropdown-toggle').toggleClass('hidden')
        })
    }

    toggleSearchClick() {
        $(function () {
            $('.searchbar').toggleClass('hidden')
        })
    }


    componentDidMount(){
      
    }

    render(){
        return(
            <div className='navbar-container sticky'>
                <div className='navbar-leftSide'>
                    <Link to='/browse'><img src={window.logo} alt="logo" className='watchFlixlogo-nav' /></Link>
                    <ul>
                        <Link to='/browse' className='navNav'>Home</Link >
                        <Link to={`/browse/TvShows`} className='navNav'>TV Shows</Link >
                        <Link to={`/browse/Movies`} className='navNav'>Movies</Link >
                        <Link to='/browse/my-list' className='navNav'>MyList</Link>  
                    </ul>
                </div>

                <ul className='navbar-rightSide'>

                    <li className='navbar-icons'><i className="fas fa-search fa-lg" onClick={this.toggleSearchClick}></i>
                        <input className='searchbar hidden' type="text"/>
                    </li>
                    <li className='navbar-icons'><a href="https://github.com/samisherif95" target="_blank" ><i className="fab fa-github fa-lg"></i></a></li>
                    <li className='navbar-icons'><a href="https://www.linkedin.com/in/sami-ellaboudy-667883161/" target="_blank"><i className="fab fa-linkedin fa-lg"></i></a></li>
                    <li className='navbar-icons'><a href="https://angel.co/sami-ellaboudy" target="_blank"><i className="fab fa-angellist fa-lg"></i></a></li>
                    <li className='navbar-icons'><i className="fas fa-user fa-lg" onClick={this.toggledropdownClick}></i>
                        <ul className='dropdown-toggle hidden'>
                            <li> Welcome,</li>
                            <li>{this.props.currentUser.email}</li>
                            <li onClick={this.props.logout} id='signOut'>Sign Out</li>
                        </ul>
                    </li>

                    {/* <li><button onClick={this.props.logout} >Sign Out</button></li>   */}
                </ul>
            </div>
        );
        
    }
}
export default NavBar;