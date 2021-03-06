import React from 'react';
import PropsTypes from 'prop-types';
import TodoTextInput from './TodoTextInput';

const Header = ({ addTodo }) => (
    <header className="header">
        <h1>Todos</h1>
        <TodoTextInput 
            newTodo
            onSave={(text) => {
                console.log('header onsave');
                if (text.length !== 0) {
                    addTodo(text)
                }
                console.log('header onsaveds');
            }}
            placeholder="enter your todo"
        />
    </header>
)

Header.propTypes = {
    addTodo: PropsTypes.func.isRequired,
}

export default Header;