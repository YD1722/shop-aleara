import React from 'react'

import CustomButton from '../../common/custom-button/custom-button.component';
import FormInput from '../../common/form-input/form-input.component';
import { defaultAuth, createUserProfileDocument } from '../../../firebase/firebase.utils';
import './sign-up.styles.scss';


class SignUp extends React.Component{
    constructor(){
        super();

        this.state = {
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
    
        const { displayName, email, password, confirmPassword } = this.state;
    
        if (password !== confirmPassword) {
          alert("passwords don't match");
          return;
        }
    
        try {
          const { user } = await defaultAuth.createUserWithEmailAndPassword(
            email,
            password
          );
    
          await createUserProfileDocument(user, { displayName });
    
          this.setState({
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
          });
        } catch (error) {
          console.error(error);
        }
      };

    handleChange = event =>{
        const {value, name} = event.target;

        this.setState({[name]:value});
    };

    render(){
        const {displayName, email, password, confirmPassword}  = this.state;

        return(
            <div className="sign-up">
                <h2 className='title'>I do not have a account</h2>
                <span>Sign up with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                  <FormInput label="User name" name="displayName" value={displayName} handleChange={this.handleChange} required/>

                  <FormInput label="Email" name="email" type="email" value={email} handleChange={this.handleChange} required/>

                  <FormInput label="Paswrod" name="password" type="password" value={password} handleChange={this.handleChange} required/>

                  <FormInput label="Confirm Password" name="confirmPassword" type="password" value={confirmPassword} handleChange={this.handleChange} required/>

                  <CustomButton type='submit'>SIGN UP</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignUp;