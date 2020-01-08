import React, { Component } from 'react';
import { Icon, Button, Form, Checkbox, Divider } from 'semantic-ui-react';
import '../assets/mystyle.css';
import {connect} from 'react-redux';
import * as actions from '../store/actions/action';

class EditEmployee extends Component
{
    constructor(props)
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

    updateEmp()
    {
        let id = this.props.match.params.id;
        console.log('id is:', id);
        this.props.updateData1 (id,this.state.user )
        console.log('updated state is:', this.state);

        
    }

    render()
    {
        return(
            <div>
                <div className="padding-top-20px center">
                    <Icon.Group size='huge'>
                    <Icon loading size='big' name='circle notch' />
                    <Icon name='user' />
                    </Icon.Group>
                </div>  
                <Divider/>
                <div className="margin-left-10px margin-right-10px" >
                    <Form>
                        <Form.Field  className="padding-top-10px" >
                            <label>Update your Name</label>
                            <input onChange ={ event => this.update("name", event.target.value) } placeholder='My Name is...' />
                        </Form.Field>
                        <Form.Field  className="padding-top-10px">
                            <label>Update your Age</label>
                            <input onChange ={ event => this.update("age", event.target.value) } placeholder='My Age is...' />
                        </Form.Field>
                        <Form.Field className="padding-top-10px">
                            <label>Update your Salary</label>
                            <input onChange ={ event => this.update("salary", event.target.value) } placeholder='My salary is...' />
                        </Form.Field>
                        <Form.Field className="padding-top-10px">
                            <Checkbox label='The above data filled by me is updated' />
                        </Form.Field>
                        <div className="padding-top-20px">
                            <Button onClick = { () => this.updateEmp() } fluid content='Update My Details!!' secondary  />
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
        employee: state.employee.updateData
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateData1: (id,user) => dispatch(actions.updateData(id,user))
    };
};

export default connect (mapStateToProps, mapDispatchToProps) (EditEmployee);