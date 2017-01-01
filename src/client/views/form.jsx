import React from 'react';
import {render} from 'react-dom';
import Input from './input.jsx';
import RadioImage from './radio-component.jsx';
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
            return <RadioImage key = {school.title} clickable = {<img src={school.img} onClick={this.props.onSelectSchool.bind(this, school.title)}/>} title = {school.title} name = "schools" />
        });
    }

    renderSemesters() {
        return Constants.semesterYears.map((year) => {
            return (
              <div id = "semesters-container" key = {year}>
                  <RadioImage clickable = {this.renderSemester("fall", year)} title = "" name = "semesters" />
                  <RadioImage clickable = {this.renderSemester("spring", year)} title = "" name = "semesters" />
              </div>
            );
        });
    }

    renderSemester(season, year) {
        return(
          <div id = "semester">
              <div id = "season" className = {season}>
                  {season.toUpperCase()}
              </div>
              <div id = "year" className = {season}>
                  {"'"+year}
              </div>
          </div>
        );
    }

    render() {
        return (
            <form autoComplete="off">
                <div id = "form-container">
                    <div id = "radio-container">
                        <p id = "form_title">School:</p>
                        {this.renderSchools()}
                    </div>
                    <hr/>
                    <Input field = "Major:" example = "Computer Science" suggestions = {Constants.majors} internalBubbles = {true} />
                    <Input field = "Minor(s):" example = "Cognitive Science" suggestions = {Constants.minors} internalBubbles = {true} align = "right"/>
                    <hr/>
                    <Input field = "Classes Taken:" example = "AEM 2940" suggestions = {Constants.classesTaken} />
                    <hr/>
                    <Input field = "Desired Classes:" example = "CS 4700" suggestions = {Constants.classesDesired} />
                    <hr/>
                    <div id = "radio-container">
                        <p id = "form_title">Graduating Semester:</p>
                        {this.renderSemesters()}
                    </div>
                </div>
            </form>
        );
    }
}

export default Form;