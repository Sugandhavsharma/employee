import React, { Component } from 'react';
import HeaderFooter from './hoc/HeaderFooter';

class App extends Component
{
    render()
    {
        return(
            <div className="App">
                <HeaderFooter/>
            </div>
        )
    }
}

export default App;