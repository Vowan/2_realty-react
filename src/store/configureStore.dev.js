import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from '../reducers'
import DevTools from '../containers/DevTools'

export default function configureStore(initialState) {
        
     
  const store = createStore(
    rootReducer,
    initialState,
    compose(
      
      DevTools.instrument()
    )
  )

    return store;
}

