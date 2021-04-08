import React, { Component } from 'react';
import Header from './Layout/Header';
import Projectitem from './Project/ProjectItem';

class Dashboard extends Component {
    render() {
        return (
            <React.Fragment>
                <Header/>
                <Projectitem/>
            </React.Fragment>
        );
    }
}

export default Dashboard;