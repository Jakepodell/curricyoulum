import React from 'react';
import {render} from 'react-dom';
import InputForm from './input.jsx'

class App extends React.Component {
    render () {
        return (
            <InputForm />
        );
    }
}

render(<App/>, document.getElementById('app'));