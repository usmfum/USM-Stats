import {combineReducers} from 'redux';

function app(state = {}, action) {
  switch (action.type) {
    case 'RAMP_LOADED':
      return { ...state, ramp: action.ramp }
    case 'COMP_CETH_LOADED':
      return { ...state, cEthInstance: action.cEthInstance}
    default:
      return state;
  }
}

const rootReducer = new combineReducers({
  app
});

export default rootReducer;
