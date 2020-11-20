import React from 'react';
import './App.css';
import TodoItem from './TodoItem';
import { Button, Input, TextField } from '@material-ui/core';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {todoList: []};
  }

  render() {
    return (
        <div className="App">
          <h1>React app</h1>
          <form className="app_form"
            onSubmit={e => {
              e.preventDefault();
              const title = e.target.elements["title"];
              const body = e.target.elements['description'];

              this.setState({
                todoList: this.state.todoList.concat({
                  title: title.value,
                  body: body.value,
                })
              },
              () => {
                title.value = '';
                body.value = '';
              });
            }}> 
            <div>
              <Input type="text" id="title" placeholder="title" />
              <br />
              <TextField id="description" placeholder="description" />
            </div>
            <div>
              <Button 
                variant="contained"
                color="primary"
                type="submit"
              >
                Send
              </Button>
            </div>
          </form>
          {this.state.todoList.map(todo => {
            return <TodoItem key={todo.title} title={todo.title} body={todo.body} onClick={() => {
              this.setState({
                todoList: this.state.todoList.filter(x => x !== todo)
              })
            }} />
          })}
        </div>
    );
  }
}

export default App;
