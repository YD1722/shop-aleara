import React from 'react'
import SignIn from '../sign-in/sign-in.component';
import SignUp from '../sign-up/sign-up.component';
import './auth-home.styles.scss';

const AuthHome = ()=>(
    <div className='auth-home'>
       <SignIn />
       <SignUp />
    </div>
); 

export default AuthHome;