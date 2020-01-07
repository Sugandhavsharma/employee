import React, { Component } from 'react';
import {  Header,Icon } from 'semantic-ui-react';
// import HeaderFooter from '../hoc/HeaderFooter';
import '../assets/mystyle.css';


class EmployeeList extends Component
{
    render()
    {
        return(
            <div>
                <div className="padding-top-20px">
                    <Header as='h2' icon textAlign='center'>
                        <Icon name='users' circular />
                        <Header.Content>OUR EMPLOYEES</Header.Content>
                    </Header>
                </div>
            </div>
        )
    }
}

export default EmployeeList;