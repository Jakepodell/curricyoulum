import React from 'react';
import {render} from 'react-dom';

//----------------------INPUT--------------------------------------------

/**
 * A single input field, derives its heading and search text from the field prop
 */
class Input extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange() {
        //TODO
    }

    render() {
        return (
            <div>
                <form>
                    {this.props.field}
                    <br/>
                    <input
                        type="text"
                        placeholder={this.props.field}
                        onChange={this.handleChange}
                    />
                </form>
            </div>
        );
    }
}

//----------------------INPUT FORM---------------------------------------

/**
 * A list of inputs, created from elements of the fields prop
 */
class InputForm extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>CurricYOUlum!</h1>
                <ul id = "input-container">
                    {this.props.fields.map(function(field) {
                        return (
                            <li key = {field}>
                                <Input field = {field}/>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

export default InputForm;