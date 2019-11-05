import React from 'react';
import ReactDOM from 'react-dom';
import Header from './component/Header.js';
import Footer from './component/Footer.js';
import AppRoutes from './Routes.js';
import { BrowserRouter } from 'react-router-dom';
import './component/Body.css';

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Header />
                <div className = "routes-footer">
                <AppRoutes />
                </div>
                <Footer />
             
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

