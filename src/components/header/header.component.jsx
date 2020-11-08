import React from 'react'
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {ReactComponent as Logo} from '../../assets/logo.svg'
import { defaultAuth } from '../../firebase/firebase.utils';

import './header.styles.scss'

const Header = ({currentUser})=>(
    <div className="header">
        <Link className="logo-container" to="/">
            <Logo className="logo" />
        </Link>

        <div className="options">
            <Link className="option" to="/shop">SHOP</Link>
            <Link className="option" to="contact">CONTACT</Link>
            {
                currentUser?
                <div className="option" onClick={()=> defaultAuth.signOut()}>SIGN OUT</div>
                :
                <Link className="option" to="/signin">SIGN IN</Link>
            }
        </div>
    </div>
)



const mapStateToProps = rootReducer => ({
    currentUser : rootReducer.user.currentUser
})

/**
 * If a mapStateToProps function is specified, the new wrapper component will subscribe to Redux store updates. 
 * This means that any time the store is updated, mapStateToProps will be called. 
 * The results of mapStateToProps must be a plain object, which will be merged into the wrapped component’s props. 
 * If you don't want to subscribe to store updates, pass null or undefined in place of mapStateToProps.
 */
export default connect(mapStateToProps)(Header);