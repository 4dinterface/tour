import { combineReducers } from 'redux'
//import travels from './travels'
import travelFilter from './travelsFilter';
//import { reducer as formReducer } from 'redux-form'

const root = combineReducers({
  //travels,
  //formReducer,
  travelFilter
})

export default root;