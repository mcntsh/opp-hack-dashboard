import React, { Component, Fragment } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';

import { FormField } from '../shared';
import formFields from './formFields';

class CollegeForm extends Component {
    renderFields = () => {
        return formFields.map(({ label, name }) => {
            return (
                <Field
                    key={name}
                    component={}
                    type="text"
                    label={label}
                    name={name} />
            );
        });
    };

    render() {
        return (
            <Fragment>
                <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
                    {this.renderFields()}
                    <Link to="/surveys" className="">Cancel</Link>
                    <button type="submit" className="">Next</button>
                </form>
            </Fragment>
        );
    }
}

function validate(values) {
    return errors;
}

export default reduxForm({
    validate,
    form: 'collegeForm',
    destroyOnUnmount: false
})(CollegeForm);
