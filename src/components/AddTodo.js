import React from 'react';
import PropTypes from 'prop-types'


class AddTodo extends React.Component {
  state = {
    title: ''
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title:"" })
  }

  onChange = (event) => {
    this.setState({title: event.target.value})
  }

  render() {
    return (
      <form style={formStyle} onSubmit={this.onSubmit}>
         <input 
          style={{ flex:"10" }} 
          type="text" name="title" 
          placeholder="Enter a todo..."
          value={this.state.title}
          onChange={this.onChange}> 
         </input>
         <input 
          type="submit" 
          value="Submit">
            
         </input>
      </form>
    )
  }
}

const formStyle = {
  display: "flex",
  alignItems: "center",
  width: "50%",
  padding: "30px",
  margin: "auto",
}

AddTodo.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
}

export default AddTodo;