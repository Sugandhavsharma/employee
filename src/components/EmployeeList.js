import React, {Component} from 'react';
import { Header, Icon, Button, List } from 'semantic-ui-react';
import {connect} from 'react-redux';
import * as actions from '../store/actions/action';
import { Link } from 'react-router-dom';

class EmployeeList extends Component
{
    componentDidMount()
    {
        this.props.getData1();
        
    }

    // deleteEmp(id)
    // {
    //     this.props.deleteData1 (this.state.deleteData1 )
    //     console.log('deleting employee details',id);
    //     console.log('this.props', this.props);
    // }

    ListEmployee() { 
        return this.props.employee.map( ( employee ) => {
            return (   
                <li key = {employee.id}> { employee.employee_name } { employee.employee_salary } { employee.employee_age }
                    <Button color='black'><Link to = {`/EditEmployee/${employee.id}`}> Update </Link> </Button>
                    <Button color='grey' > Delete </Button>
                </li>            
            )
        })
    }

    render()
    {
        console.log(this.props.employee);
        return(
            <div>
                <div className="padding-top-20px">
                    <Header as='h2' icon textAlign='center'>
                        <Icon name='users' circular />
                        <Header.Content>OUR EMPLOYEES</Header.Content>
                    </Header>
                </div>
                <div>
                    <List divided verticalAlign='middle' >
                        <List.Item>
                            <List.Content floated='right'>
                                </List.Content>                                      
                                <List.Content> { this.ListEmployee() } </List.Content> 
                         </List.Item>  
                    </List>                               
                </div>
                <div>
                    <Button><Link to ={'/AddEmployee'}> ADD ME!!! </Link></Button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        employee: state.employee.getData,
        //employee: state.employee.deleteData
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getData1: () => dispatch(actions.getData()),
        //deleteData1: () => dispatch(actions.deleteData())
    };
};

export default connect (mapStateToProps,mapDispatchToProps) (EmployeeList);