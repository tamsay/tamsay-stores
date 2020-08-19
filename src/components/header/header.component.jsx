import React from 'react'
import './header.styles.scss'
import {ReactComponent as Logo} from '../../assets/images/crown.svg'
import {Link} from 'react-router-dom'

const Header=()=>{
    return(
        <div className = 'header'>

            <Link to = '/' className = 'logo-container'>
                <Logo  className = 'logo'/>
            </Link>
            <div className = 'options'>
                <Link to = '/' className = 'option'>
                    HOME
                </Link>

                <Link to = '/shop' className = 'option'>
                    SHOP
                </Link>

                <Link className = 'option' to = '/signin'>
                    SIGNIN
                </Link>
            </div>

        </div>
    )
}

export default Header;