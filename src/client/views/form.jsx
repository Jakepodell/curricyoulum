import React from 'react';
import {render} from 'react-dom';
import Input from './input.jsx';
import RadioImage from './radio-image.jsx';
import Constants from '../constants/constants.jsx';

/**
 * A list of inputs, created from elements of the fields prop
 */
class Form extends React.Component {
    constructor(props) {
        super(props);
    }

    renderSchools() {
        return Constants.schools.map((school) => {
            return <RadioImage key = {school.title} img ={school.img} title = {school.title} name = "schools" onSelectSchool = {this.props.onSelectSchool} />
        });
    }

    render() {
        return (
            <div>
                <div id = "input-container">
                    <div id = "input">
                        <div id = "radio-container">
                            <p id = "form_title">School:</p>
                            {this.renderSchools()}
                        </div>
                    </div>
                    <hr/>
                    <Input field = "Major" example = "Computer Science" items = {Constants.majors} />
                    <Input field = "Minor(s)" example = "Cognitive Science" items = {Constants.minors} />
                    <Input field = "Classes Taken" example = "AEM 2940" items = {Constants.classesTaken} />
                    <Input field = "Graduating Semester" example = "Spring 2019" items = {Constants.graduatingSemester} />
                    <Input field = "Desired Classes" example = "CS 4700" items = {Constants.classesDesired} />
                </div>
            </div>
        );
    }
}

export default Form;