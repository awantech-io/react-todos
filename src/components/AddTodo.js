import React, { Component } from 'react'
import PropTypes from 'prop-types'; 

export class AddTodo extends Component {

    // set state for input value
    state = {
        title:''
    }

    // on submit form method. set the form value as a prop to send to app.js
    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        // set the state title value back to blank
        this.setState({ title:''});
    }

    // on change method for form value
    onChange = (e) => this.setState({ [e.target.name] : e.target.value });
    render() {
        return (
            <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
            <input
            type="text"
            name="title"
            style={{ flex: '10', padding: '5px'}}
            palceholder="Add todo ..."
            value={this.state.title}
            onChange={this.onChange}
            />
            <input 
            type="submit"
            name="Submit"
            className="btn"
            style={{flex: '1'}}
            />
        </form>
        )
    }
}

// Proptypes
AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired
}

export default AddTodo
