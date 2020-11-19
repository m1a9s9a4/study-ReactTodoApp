import logo from './logo.svg';
import './App.css';
import TodoList from './TodoList';

function App() {
  let state = {
    list: [],
  };

  return (
    <div className="App">
      <h1>React app</h1>
      <form className="app_form"
        onSubmit={e => {
          e.preventDefault();
          const title = e.target.elements["title"];
          const body = e.target.elements['description'];

          this.setState(
            {
              list: this.state.list.concat({
                title: title.value,
                body: body.value,
              })
            },
            () => {
              title.value = '';
              body.value = '';
            }
          )
        }}> 
        <div>
          <input id="title" placeholder="title" />
          <textarea id="description" placeholder="description" />
        </div>
        <div>
          <button type="submit">追加</button>
        </div>
      </form>
      <TodoList todos={state.list} />
    </div>
  );
}

export default App;
