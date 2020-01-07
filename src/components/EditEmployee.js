import React, { Component } from 'react';
import { Icon, Button, Form, Checkbox, Divider } from 'semantic-ui-react';
import '../assets/mystyle.css';
// import HeaderFooter from '../hoc/HeaderFooter';

class EditEmployee extends Component
{
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
                            <input placeholder='My Name is...' />
                        </Form.Field>
                        <Form.Field  className="padding-top-10px">
                            <label>Update your Age</label>
                            <input placeholder='My Age is...' />
                        </Form.Field>
                        <Form.Field className="padding-top-10px">
                            <label>Update your Salary</label>
                            <input placeholder='My salary is...' />
                        </Form.Field>
                        <Form.Field className="padding-top-10px">
                            <Checkbox label='The above data filled by me is updated' />
                        </Form.Field>
                        <div className="padding-top-20px">
                            <Button fluid content='Update My Details!!' secondary />
                        </div>
                    </Form>
                </div>
                <br/>
            </div>
        )
    }
}

export default EditEmployee;