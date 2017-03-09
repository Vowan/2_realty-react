import React, { PropTypes } from 'react'

const Todo = ({ onClick, onPend, onCancel, completed,  pending, canceled, text }) => (
  <li
    
    style={{
      textDecoration: completed ? 'line-through' : 'none',
      color: pending? 'yellow': canceled? "red" :"black",
    }}
  >
    {text}
            <button onClick={onClick}>Complete</button>
            <button onClick={onPend}>Pend</button>
            <button onClick={onCancel}>Cancel</button>
  </li>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo
