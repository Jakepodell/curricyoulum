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
                        placeholder= {"e.g. "+this.props.example}
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
                <div id = "input-container">
                    <div id = "input">
                        <select>
                            <option value="Engineering">Engineering</option>
                            <option value="AEM">AEM</option>
                            <option value="Hotel">Hotel</option>
                        </select>
                    </div>
                    <div id = "input">
                        <Input field = "Major" example = "Computer Science"/>
                    </div>
                    <div id = "input">
                        <Input field = "Minor(s)" example = "Cognitive Science"/>
                    </div>
                    <div id = "input">
                        <Input field = "Classes Taken" example = "AEM 2940"/>
                    </div>
                    <div id = "input">
                        <Input field = "Graduating Semester" example = "Spring 2019"/>
                    </div>
                    <div id = "input">
                        <Input field = "Desired Classes" example = "CS 4700"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default InputForm;