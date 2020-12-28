import {combineReducers} from 'redux';

function app(state = {}, action) {
  switch (action.type) {
    case 'NETWORK_LOADED':
      return { ...state, provider: action.provider }
    default:
      return state;
  }
}

const rootReducer = new combineReducers({
  app
});

export default rootReducer;
