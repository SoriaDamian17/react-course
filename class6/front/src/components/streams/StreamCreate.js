import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import {createStream} from '../../actions';
class StreamCreate extends React.Component { 
    
    renderInput = ({ input, label, meta }) => {
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} />
                {this.renderError(meta)}
            </div>
        )
    }

    renderError({ touched, error }) {
        if (touched && error) {
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            )
        }

    }

    onSubmit = (formValues) => {
        this.props.createStream(formValues);
        console.log(formValues);
    }

    render() {
        return (
            <form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)} >
                <Field name="title" label="Title" component={this.renderInput} />
                <Field name="description" label="Description" component={this.renderInput} />
                <button className="ui button primary">Submit</button>
            </form>
        )
    }
}

const validate = formValues => {
    const errors = { };

    if (!formValues.title) {
        errors.title = 'you must enter a title';
    }

    if (!formValues.description) {
        errors.description = 'you must enter a description';
    }

    return errors;
}

const formWrapper = reduxForm({ 
    form: 'streamCreate',
    validate: validate
})(StreamCreate);

export default connect(null, { createStream })(formWrapper);