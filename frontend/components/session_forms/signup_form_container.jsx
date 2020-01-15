import { connect } from 'react-redux';
import SessionForm from '../session_forms/session_form';
import { signUp, deleteErrors } from '../../actions/session_actions';

const mapStateToProps = (state) => ({
    errors: state.errors.session,
    formType: 'signup/'
})

const mapDispatchToProps = dispatch => ({
    processForm: (formUser) => dispatch(signUp(formUser)),
    clearErrors: () => dispatch(deleteErrors())
})

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);