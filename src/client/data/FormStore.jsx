import {ReduceStore} from 'flux/utils';
import FormActionTypes from './FormActionTypes.jsx';
import Dispatcher from './Dispatcher.jsx';

class FormStore extends ReduceStore {
    constructor() {
        super(Dispatcher);
    }

    getInitialState() {
        return {
            school: "",
            major: "",
            minor: "",
            classesTaken: "",
            classesDesired: "",
            graduation: "",
        };
    }

    reduce(state, action) {
        switch (action.type) {
            case FormActionTypes.SELECT_SCHOOL:
                state.school = action.id;
                return state;
            case FormActionTypes.CHANGE_MAJOR:
                state.major = action.text;
                return state;
            case FormActionTypes.CHANGE_MINOR:
                state.minor = action.text;
                return state;
            case FormActionTypes.CHANGE_CLASSES_TAKEN:
                state.classesTaken = action.text;
                return state;
            case FormActionTypes.CHANGE_CLASSES_DESIRED:
                state.classesDesired = action.text;
                return state;
            case FormActionTypes.CHANGE_GRADUATION:
                state.graduation = action.text;
                return state;
            default:
                return state;
        }
    }
}

export default new FormStore();