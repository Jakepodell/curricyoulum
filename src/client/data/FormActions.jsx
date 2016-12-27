import FormActionTypes from './FormActionTypes.jsx';
import Dispatcher from './Dispatcher.jsx';

const FormActions = {
    selectSchool(id) {
        Dispatcher.dispatch({
            type: FormActionTypes.SELECT_SCHOOL,
            id,
        });
    },

    changeMajor(text) {
        Dispatcher.dispatch({
            type: FormActionTypes.CHANGE_MAJOR,
            text,
        })
    },

    changeMinor(text) {
        Dispatcher.dispatch({
            type: FormActionTypes.CHANGE_MINOR,
            text,
        })
    },

    changeClassesTaken(text) {
        Dispatcher.dispatch({
            type: FormActionTypes.CHANGE_CLASSES_TAKEN,
            text,
        })
    },

    changeClassesDesired(text) {
        Dispatcher.dispatch({
            type: FormActionTypes.CHANGE_CLASSES_DESIRED,
            text,
        })
    },

    changeGraduation(text) {
        Dispatcher.dispatch({
            type: FormActionTypes.CHANGE_GRADUATION,
            text,
        })
    },

};

export default FormActions;