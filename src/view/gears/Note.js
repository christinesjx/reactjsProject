import React from 'react';

class Note extends React.Component 
{
  constructor(props){
    super(props);
    this.state = {
      todosInit: ['gloves', 'ski'],
      todos: [],
      todoText: '',
  };
    this.updateTodoText = this.updateTodoText.bind(this);
    this.createTodo = this.createTodo.bind(this);
    this.deleteTodoText = this.deleteTodoText.bind(this);
  }
  
  componentDidMount()
  {
    this.setState({
      todos: this.state.todosInit,
    });
  }
  
  updateTodoText (e)
  {
      this.setState({
        todoText: e.target.value
      });
  }

  deleteTodoText (i)
  {
    let todos = this.state.todos.slice();
    todos.splice(i, 1);
    this.setState({
        todos
    });
  }
  
  createTodo (e)
  {
    e.preventDefault();
    this.setState({ 
      todos: [...this.state.todos, this.state.todoText],
      todoText: '',
    });
  }
  

  render() 
  {
    return (
      <div val = "border">
      <div>
        <div>
          <div>
             <h2 val = "title">Gear List</h2>
          </div>
        </div>
      </div>
         <div className="container wb">
        <div className="row">
          <form onSubmit={this.createTodo}>
          <div className="input-group">
             <input type="text"
               className="center-block"
               placeholder="Insert here..."
               value={this.state.todoText}
               onChange={this.updateTodoText}
               />
            <button className="btn btn-success center-block">Add</button>
          </div>
        </form>
            <ul val ="list">
                { this.state.todos.map((todo,i) => {
                    return <li onClick={() => { this.deleteTodoText(i)}} key={Math.floor(Math.random() * 10000) + 1}>{ todo }</li>
                })}
            </ul>
        </div>
  
      </div>
        </div>
    );  
  }
  
}
export default Note;

