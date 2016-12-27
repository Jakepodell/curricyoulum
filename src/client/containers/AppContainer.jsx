import Form from '../views/form.jsx';
import Banner from '../views/Banner.jsx';
import React from 'react';
import {render} from 'react-dom';
import {Container} from 'flux/utils';
import Store from '../data/FormStore.jsx';
import FormActions from '../data/FormActions.jsx';

class AppContainer extends React.Component {
    static getStores() {
        return [Store];
    }

    static calculateState(prevState) {
        return {
            state: Store.getState(),
            onSelectSchool: FormActions.selectSchool,
            onChangeMajor: FormActions.changeMajor,
            onChangeMinor: FormActions.changeMinor,
            onChangeClassesTaken: FormActions.changeClassesTaken,
            onChangeClassesDesired: FormActions.changeClassesDesired,
            onChangeGraduation: FormActions.changeGraduation,
        };
    }

    render() {
        return (
            <div>
                <Banner />
                <Form onSelectSchool = {this.state.onSelectSchool}
                      onChangeMajor = {this.state.onChangeMajor}
                      onChangeMinor = {this.state.onChangeMinor}
                      onChangeClassesTaken = {this.state.onChangeClassesTaken}
                      onChangeClassesDesired = {this.state.onChangeClassesDesired}
                      onChangeGraduation = {this.state.onChangeGraduation}
                />
            </div>
        );
    }
}

export default Container.create(AppContainer);