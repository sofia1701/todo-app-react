import React from 'react';
import '../App.css';
import PropTypes from 'prop-types'

function TodoItem(props) {
  const completedStyle = {
    fontStyle: "italic",
    textDecoration: "line-through"
  }

  return (
      <div className='todo-item'>
        <input 
          type='checkbox' 
          checked={props.item.completed}
          onChange={() => props.handleChange(props.item.id)}
        />
        <p style={props.item.completed ? completedStyle:null}>
          {props.item.title}
        </p>
        <button onClick={() => props.handleClick(props.item.id)} style={buttonStyle}>x</button>
        
      </div> 
  ) 
} 

TodoItem.propTypes = {
  item: PropTypes.object.isRequired,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
}

const buttonStyle = {
  backgroundColor: "red",
  color: "white",
  marginLeft: "auto",
}



export default TodoItem;