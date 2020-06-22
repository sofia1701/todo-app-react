import React from "react";
import Header from "./components/layout/Header";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";
import axios from "axios";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [],
    };
  }

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then((response) => {
        this.setState({ todos: response.data });
      });
  }

  //Mark complete or incomplete
  handleChange = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };
  //Deletes task when x button is pressed
  handleClick = (id) => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((response) => {
        this.setState({
          todos: [...this.state.todos.filter((todo) => todo.id !== id)],
        });
      });
  };

  //Adds todo to the list
  addTodo = (title) => {
    axios
      .post("https://jsonplaceholder.typicode.com/todos", {
        title,
        completed: false,
      })
      .then((response) => {
        this.setState({ todos: [...this.state.todos, response.data] });
      });
  };

  render() {
    return (
      <>
        <Header />
        <div className="todo-list">
          <Todos
            todos={this.state.todos}
            handleChange={this.handleChange}
            handleClick={this.handleClick}
          />
        </div>
        <AddTodo addTodo={this.addTodo} />
      </>
    );
  }
}



export default App;
