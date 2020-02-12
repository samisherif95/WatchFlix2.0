import { connect } from 'react-redux';
import Navbar from './navbar';
import { logOut } from '../../actions/session_actions';
const mSTP = (state,ownProps) => ({
    currentUser: state.entities.users[state.session.id]
})
const mDTP = dispatch => ({
    logout: () => dispatch(logOut()),
})
export default connect(mSTP, mDTP)(Navbar);