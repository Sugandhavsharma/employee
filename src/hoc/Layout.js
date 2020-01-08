import React, { Component } from 'react';
import { Router, Route } from 'react-router';
import {createBrowserHistory} from 'history';
import AddEmployee from '../components/AddEmployee';
import EditEmployee from '../components/EditEmployee';
import EmployeeList from '../components/EmployeeList';

const browserHistory = createBrowserHistory();

class Layout extends Component
{
    render() 
    { 
        return (  
            <Router path= "/" history = { browserHistory } >
                <Route path = "/" exact component = {EmployeeList} />
                <Route path = "/AddEmployee" component = {AddEmployee} />
                <Route path = "/EditEmployee/:id" component = {EditEmployee} />
                
        </Router>
        )
    }
}

export default Layout;