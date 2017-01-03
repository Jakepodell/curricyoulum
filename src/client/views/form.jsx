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
        this.state = {school: "", semester: ""}
    }

    onSelectSchool(school) {
        this.setState({school: school})
        this.props.onSelectSchool(school);
    }

    onSelectSemester(semester) {
        this.setState({semester: semester});
        console.log(semester);
    };

    renderSchools() {
        return Constants.schools.map((school) => {
            return <RadioImage key = {school.title} clickable = {<img src={school.img} onClick={this.onSelectSchool.bind(this, school.title)}/>} id = {school.title} title = {school.title} name = "schools" selected = {this.state.school} />
        });
    }

    renderSemesters() {
        return Constants.semesterYears.map((year) => {
            return (
              <div id = "semesters-container" key = {year}>
                  <RadioImage clickable = {this.renderSemester("fall", year)}  id = {year + "fall"} title = "" name = "semesters" selected = {this.state.semester} />
                  <RadioImage clickable = {this.renderSemester("spring", year)} id = {year + "spring"} title = "" name = "semesters" selected = {this.state.semester} />
              </div>
            );
        });
    }

    renderSemester(season, year) {
        return(
          <div id = "semester" onClick = {this.onSelectSemester.bind(this, year + season)}>
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
            <form autoComplete="off" id = "form">
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
                <input id = "submit" type="submit" value = "Submit"/>
            </form>
        );
    }
}

export default Form;