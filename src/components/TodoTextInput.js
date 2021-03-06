import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default class TodoTextInput extends Component {
    static propTypes = {
        onSave: PropTypes.func.isRequired,
        text: PropTypes.string,
        placeholder: PropTypes.string,
        editing: PropTypes.bool,
        newTodo: PropTypes.bool,
    }

    state = {
        text: this.props.text || '',
    }

    handleSubmit = e => {
        const text = e.target.value.trim();
        if (e.which === 13) {
            console.log('in todo text input1');
            this.props.onSave(text);
            console.log('in todo text input2');
            if (this.props.newTodo) {
                this.setState({ text: '' });
            }
        }
    }

    handleChange = e => {
        this.setState( {text: e.target.value} );
    }

    handleBlue = e => {
        if (!this.props.newTodo) {
            this.props.onSave(e.target.value);
        }
    }

    render() {
        return (
            <input className={
                classnames({
                    edit: this.props.editing,
                    'new-todo': this.props.newTodo,
                })}
                type="text"
                placeholder={this.props.placeholder}
                autoFocus={true}
                value={this.state.text}
                onBlur={this.handleBlue}
                onChange={this.handleChange}
                onKeyDown={this.handleSubmit}
            />
        )
    }
}