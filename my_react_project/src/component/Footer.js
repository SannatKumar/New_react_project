import React from 'react';
import './Footer.css';

class Footer extends React.Component{
    render() {
        return(    
            <div id = "appfooter">
                
                <div className = "services">
                    Services
                </div>
                
                <div className = "contact">
                    Contacts
                </div>

                <div className = "about">
                    About
                </div>
                
                <div className = "legal">
                    Legal
                </div>

            </div>
        );
    }
}

export default Footer;