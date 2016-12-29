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
        let schools = Constants.schools;

        let majors = ["Computer Science", "Hotel Things", "Economics", "Accounting", "Applied and Engineering Physics", "Art History", "Basket Weaving"];
        let minors = majors;
        let classesTaken = ["AEM 2540", "CS 4780", "ECE 3210", "MATH 2930"];
        let graduatingSemester = ["Spring 2017", "Fall 2017", "Spring 2018", "Fall 2018", "Spring 2019"]
        let desiredClasses = classesTaken;

        return (
            <div>
                <div id = "input-container">
                    <div id = "input">
                        <div id = "radio-container">
                            <p id = "form_title">School:</p>
                            {this.renderSchools()}
                        </div>
                    </div>
                    <div id = "input">
                        <Input field = "Major" example = "Computer Science" items = {majors} />
                    </div>
                    <div id = "input">
                        <Input field = "Minor(s)" example = "Cognitive Science" items = {minors} />
                    </div>
                    <div id = "input">
                        <Input field = "Classes Taken" example = "AEM 2940" items = {classesTaken} />
                    </div>
                    <div id = "input">
                        <Input field = "Graduating Semester" example = "Spring 2019" items = {graduatingSemester} />
                    </div>
                    <div id = "input">
                        <Input field = "Desired Classes" example = "CS 4700" items = {desiredClasses} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Form;