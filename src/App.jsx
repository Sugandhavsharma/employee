import React, { Component } from 'react';
// import { Button, Segment } from 'semantic-ui-react'
// import 'semantic-ui-css/semantic.min.css';
//import AddEmployee from './components/AddEmployee';
//import EditEmployee from './components/EditEmployee';
//import EmployeeList from './components/EmployeeList';
// import Layout from './hoc/Layout';
import HeaderFooter from './hoc/HeaderFooter';

class App extends Component
{
    render()
    {
        return(
            <div className="App">
                {/* <AddEmployee /> */}
                {/* <EditEmployee/> */}
                {/* <EmployeeList/> */}
                <HeaderFooter/>
            </div>
        )
    }
}

export default App;