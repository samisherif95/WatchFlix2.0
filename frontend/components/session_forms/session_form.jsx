import React from 'react';
import {Link} from 'react-router-dom' 


class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            password: "",
            email: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemoLogin = this.handleDemoLogin.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user)
            .then(() => this.props.history.push('/browse'))

    }

    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.target.value })
        };
    }

    renderErrors(){
        if(this.props.errors.length > 0){
            return(
                <div className='form-errors'>{this.props.errors[0]}</div>
            );
        }
    }

    handleDemoLogin(){
       this.setState({
           email: 'hire@meplease.com',
           password: 'password'
       }),() =>this.props.processForm(this.state).then(()=> this.props.history.push('/'))
   }

    componentWillUnmount(){
        this.props.clearErrors();
    }

    render() {
        const title = this.props.formType === 'signup/' ? 'Sign Up' : 'Sign In'
        
        const addOns1 = (title === 'Sign In') ? (
            <span>New to watchFlix? </span>
        ) : ( null )
        const addOns2 = (title === 'Sign In') ? (
            <Link to='/'>Sign up now</Link>
        ) : ( null )

        const demoTernary = title === 'Sign In' ? <button className='login btn-sml' onClick={this.handleDemoLogin}>Demo</button> : null
        const alreadyMember1 = title === 'Sign Up' ? <span>Already a member? </span> : null
        const alreadyMember2 = title === 'Sign Up' ? <Link to='/login'>Sign In</Link> : null
        

        return (
            <div className ='head'>
                <img src={window.background} alt="back_image" className='watchFlixBackground' />

                <div className="header">
                    <img src={window.logo} alt="logo" className='watchFlixlogo' />
                    {demoTernary} 
                    {/* change to in above when implemnting demo function */}
                </div>

                <div className='main-session-form'>
                    <div className="session-form">
                        <h1>{title}</h1>
                        <form className='session-form-input'>
                            {this.renderErrors()}
                            <input type="text" value={this.state.email} 
                                onChange={this.handleInput('email')} 
                                placeholder='Email' className='session-form-input-fields'/>

                            <br/>

                            <input type="password" value={this.state.password} 
                                onChange={this.handleInput('password')} 
                                placeholder='Password' className='session-form-input-fields'/>

                            <button onClick={this.handleSubmit}>{title}</button>

                            <label className='remember'>
                                <input type="checkbox"  name="remember"/>
                                Remember me
                            </label>

                            <div className='addOns'>
                                {addOns1}
                                {addOns2}
                                {alreadyMember1}
                                {alreadyMember2}
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        );
    }

}
export default SessionForm;