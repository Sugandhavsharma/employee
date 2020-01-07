import React, { Component } from 'react';
import { Header, Icon, Button, Form, Checkbox, Divider } from 'semantic-ui-react';
import '../assets/mystyle.css';
// import '../App.css';
// import HeaderFooter from '../hoc/HeaderFooter';

class AddEmployee extends Component
{ 
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
                            <input placeholder='My Name is...' />
                        </Form.Field>
                        <Form.Field  className="padding-top-10px">
                            <label>Enter your Age</label>
                            <input placeholder='My Age is...' />
                        </Form.Field>
                        <Form.Field className="padding-top-10px">
                            <label>Enter your Salary</label>
                            <input placeholder='My salary is...' />
                        </Form.Field>
                        <Form.Field className="padding-top-10px">
                            <Checkbox label='The above data filled by me is correct' />
                        </Form.Field>
                        <div className="padding-top-20px">
                            <Button fluid content='Add Me!!' secondary />
                        </div>
                    </Form>
                </div>
                <br/>
            </div>
        )
    }
}

export default AddEmployee;