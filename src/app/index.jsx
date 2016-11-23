import React from 'react';
import {render} from 'react-dom';
import InputForm from './input.jsx'

class App extends React.Component {
    render () {
        return (
            <InputForm fields = {["School", "Minor(s)", "Classes Taken", "Graduation Year", "Desired Classes"]}/>
        );
    }
}

render(<App/>, document.getElementById('app'));