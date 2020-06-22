import React from 'react';

function Header() {
  return(
    <header style={headerStyle}>
      <h2>Todo List</h2>
    </header>
    
  )
}

const headerStyle = {
  backgroundColor: "lightBlue",
  display: "flex",
  alignItems: "center",
  width: "50%",
  padding: "30px",
  margin: "auto",

}

export default Header;