import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import { Router, Route, Switch } from 'react-router-dom';
// import {createBrowserHistory} from 'history';
// import AddEmployee from './components/AddEmployee';
// import EditEmployee from './components/EditEmployee';
// import EmployeeList from './components/EmployeeList';

ReactDOM.render(
    // <Router history = {createBrowserHistory()}>
    //         <Switch>
    //             <Route path='/AddEmployee' exact component={AddEmployee}/>
    //             <Route path='/EditEmployee' exact component={EditEmployee}/>
    //             <Route path='/EmployeeList' exact component={EmployeeList}/>
    //         </Switch>
    // </Router>,
    <App/>,
    document.getElementById( 'root' )
)