import { connect } from 'react-redux';
import SessionForm from '../session_forms/session_form';
import { logIn, deleteErrors} from '../../actions/session_actions'

const mapStateToProps = (state) => ({
    errors: state.errors.session,
    formType: 'login/'
})

const mapDispatchToProps = dispatch => ({
    processForm: (formUser) => dispatch(logIn(formUser)),
    clearErrors: () => dispatch(deleteErrors())
})

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);