import React, { Component } from 'react';
import { Container,  Grid, Menu, Divider } from 'semantic-ui-react';
import Layout from './Layout';
import '../assets/mystyle.css'; 

class HeaderFooter extends Component
{
    render()
    {
        return(
            <div>
                <div className="container">
                    <Container>
                        <Grid columns={3} doubling>
                            <Grid.Column>
                                <Menu
                                        items={[
                                            { key: '1', name: './', content: 'Home' },
                                            { key: '2', name: 'link-2', content: 'About Us' },
                                            { key: '3', name: 'link-3', content: 'Contact Us' },
                                        ]}
                                    pointing
                                    secondary
                                />
                            </Grid.Column>
                        </Grid>
                    </Container>
                </div> 
                <Layout/>
                <div className="footer center">
                    <Divider className="center"/>
                    @copyRight
                    <Divider/>
                </div>
            </div>
        )
    }
}

export default HeaderFooter;