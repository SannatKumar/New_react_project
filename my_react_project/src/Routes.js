import React from 'react';
import {NavLink, Route, Switch} from 'react-router-dom';
import Header from './component/Header.js';
import Footer from './component/Footer.js';
import SignUp from './component/SignUp.js';
import Home from './component/Home.js';
import VisitorsLogin from './component/VisitorsLogin.js';
import MemberLogin from './component/MemberLogin.js';
import './component/Body.css';

class AppRoutes extends React.Component{
    render(){
        return(
            <div id = "approutes-content">
                <div className = "menu-content">
                    <NavLink exact to = "/">
                        Home
                    </NavLink>
                    <br />
                    <NavLink exact to = "/memberlogin">
                        Member Login
                    </NavLink>
                    <br />
                    <NavLink exact to = "/signup">
                        Sign Up
                    </NavLink>
                    <br />
                    <NavLink exact to = "/visitorslogin">
                        Visitors Login
                    </NavLink>
                </div>
                <div className = "routes-content">
                <Switch>
                    <Route exact path = "/" component={Home} />
                    <Route exact path = "/header" component={Header} />
                    <Route exact path = "/footer" component={Footer} />
                    <Route exact path = "/memberlogin" component={MemberLogin} />
                    <Route exact path = "/signup" component={SignUp} />
                    <Route exact path = "/visitorslogin" component={VisitorsLogin} />
                </Switch>
                </div>
            </div>
        );
    }
}

export default AppRoutes;