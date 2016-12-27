import FormActionTypes from './FormActionTypes.jsx';
import Dispatcher from './Dispatcher.jsx';

const FormActions = {
    selectSchool(id) {
        Dispatcher.dispatch({
            type: FormActionTypes.SELECT_SCHOOL,
            id,
        });
    },

    submitForm(id) {
        Dispatcher.dispatch({
            type: FormActionTypes.SUBMIT_FORM,
            id,
        });
    },

};

export default FormActions;