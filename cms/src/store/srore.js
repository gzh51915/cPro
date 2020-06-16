import {createStore} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from './reducer'

const devTools = composeWithDevTools();

const store = createStore(reducer,devTools)

export default store