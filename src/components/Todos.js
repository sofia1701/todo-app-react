import React from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends React.Component {

 render() {

  return this.props.todos.map(item => 
    (<TodoItem 
      key= {item.id} 
      item={item} 
      handleChange={this.props.handleChange}
      handleClick={this.props.handleClick}
    />))

 }
}

Todos.propTypes = {
  todos: PropTypes.array.isRequired,
 
}

export default Todos;

