const todo = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false,
        pending: false,
        canceled:false,
      }
    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return state
      }

      return {
        ...state,
        completed: !state.completed
      }
    case 'PENDING_TODO':
      if (state.id !== action.id) {
        return state
      }

      return {
        ...state,
        pending: !state.pending
      }
    case 'CANCELED_TODO':
      if (state.id !== action.id) {
        return state
      }

      return {
        ...state,
        canceled: !state.canceled
      }
    default:
      return state
      
  }
}

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        todo(undefined, action)
      ]
    case 'TOGGLE_TODO':
      return state.map(t =>
        todo(t, action)
      )
    case 'PENDING_TODO':
      return state.map(t =>
        todo(t, action)
      )
     case 'CANCELED_TODO':
      return state.map(t =>
        todo(t, action)
      )
    default:
      return state
  }
}

export default todos
