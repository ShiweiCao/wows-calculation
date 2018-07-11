import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';

import Userlist from './Components/Userlist';
import Addnew from './Components/Addnew';
import Update from './Components/Update';

class App extends React.Component {
    render() {
        let routes = (
            <Switch>
                <Route path="/addNew" component={Addnew} />
                <Route path="/update" component={Update} />
                <Route path="/" component={Userlist} />
                <Redirect to="/" />
            </Switch>
        )

        return (
            <div className="Main">
                <MuiThemeProvider>
                    {routes}
                </MuiThemeProvider>
            </div>
        );
    }

}

export default App;