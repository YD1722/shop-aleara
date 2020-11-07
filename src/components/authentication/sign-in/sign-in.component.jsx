import React from 'react';
import { signInWithGoogle, defaultAuth} from '../../../firebase/firebase.utils';
import CustomButton from '../../common/custom-button/custom-button.component';
import FormInput from '../../common/form-input/form-input.component';
import './sign-in.styles.scss';

class SignIn extends React.Component{
    constructor(){
        super();

        this.state = {
            email  : '',
            password: ''
        }
    }

    handleSubmit = async event=>{
        event.preventDefault();

        const {email, password}  = this.state;

        try{
            await defaultAuth.signInWithEmailAndPassword(
                email,
                password
              );

              this.setState({
                email:'',
                password:''
            })
        }catch(err){
            console.log(err)
        }
    
    }

    handleChange = event=> {
        const {value, name} = event.target;

        this.setState({[name]:value});
    }

    render(){
        return(
            <div className='sign-in'>
                <div className='title'>
                    <h1>I already have an account</h1>
                    <span>sign in with your email and password</span>
                </div>

                <form onSubmit={this.handleSubmit}>
                    <FormInput label="email" name="email" type="email" value={this.state.email} handleChange={this.handleChange} required/>
                    <FormInput label="paswrod" name="password" type="password" value={this.state.password} handleChange={this.handleChange} required/>

                    <div className="buttons">
                        <CustomButton type="submit"> SIGN IN </CustomButton>
                        <CustomButton isGoogleSignIn onClick={signInWithGoogle}> Sign in with Google</CustomButton>
                    </div>
                </form> 
            </div>
        )
    }
}

export default SignIn;