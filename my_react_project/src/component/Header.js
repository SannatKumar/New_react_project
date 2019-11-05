import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';

class Header extends React.Component{
    render() {
        return(    
            <div id = "appheader">

                <NavLink exact to = "/news">
                        News
                    </NavLink>
                
                <div className = "apptitle">
                    RajApp
                </div>

            </div>
        );
    }
}

export default Header;