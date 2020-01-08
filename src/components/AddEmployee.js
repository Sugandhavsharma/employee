import React, { Component } from 'react';
import { Header, Icon, Button, Form, Checkbox, Divider } from 'semantic-ui-react';
import { connect } from 'react-redux';
import * as actions from '../store/actions/action';
import '../assets/mystyle.css';

class AddEmployee extends Component
{   constructor(props)
    {   super(props);
        this.state= 
        {
            user:{
            name: '',
            age: '',
            salary: ''
        }
        }
    }

    update = (key, value) =>
    {
        let user1 = {...this.state.user};
        user1[key] = value;
        this.setState({user: user1})
    } 

    addEmp()
    {
        this.props.addData1 (this.state.user )
        console.log('this.state', this.state);
    }

    render()
    {
        return( 
            <div>
                <div className="padding-top-20px">
                    <Header as='h2' icon textAlign='center'>
                    <Icon name='user plus' circular />
                    <Header.Content>BE A PART OF OUR COMPANY!!</Header.Content>
                    </Header>  
                </div>  
                <Divider/>
                <div className="margin-left-10px margin-right-10px" >
                    <Form>
                        <Form.Field  className="padding-top-10px" >
                            <label>Enter your Name</label>
                            <input onChange ={ event => this.update("name", event.target.value) } placeholder='My Name is...' />
                        </Form.Field>
                        <Form.Field  className="padding-top-10px">
                            <label>Enter your Age</label>
                            <input onChange ={ event => this.update("age", event.target.value) } placeholder='My Age is...' />
                        </Form.Field>
                        <Form.Field className="padding-top-10px">
                            <label>Enter your Salary</label>
                            <input onChange ={ event => this.update("salary",event.target.value ) } placeholder='My salary is...' />
                        </Form.Field>
                        <Form.Field className="padding-top-10px">
                            <Checkbox label='The above data filled by me is correct' />
                        </Form.Field>
                        <div className="padding-top-20px">
                            <Button onClick = { () => this.addEmp() } fluid content='Add Me!!' secondary />
                        </div>
                    </Form>
                </div>
                <br/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        employee: state.employee.addData
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addData1: (user) => dispatch(actions.addData(user))
    };
};

export default connect (mapStateToProps,mapDispatchToProps) (AddEmployee);