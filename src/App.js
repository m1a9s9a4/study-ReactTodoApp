import React from 'react';
import './App.css';
import TodoItem from './TodoItem';

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
                console.log("this.state");
                console.log(this.state);
                title.value = '';
                body.value = '';
              });
            }}> 
            <div>
              <input id="title" placeholder="title" />
              <textarea id="description" placeholder="description" />
            </div>
            <div>
              <button type="submit">追加</button>
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
