import { FETCH_ERROR, LOADING, SAVE_COINS } from "../actions";

const INITIAL_STATE = {
  loading: false,
  errorMessage: null,
  currencies: {},
}
const currencyReducer = (state = INITIAL_STATE, action) => {
  switch(action.type){
    case LOADING:
      return {
        ...state,
        loading: true
      };
    case SAVE_COINS:
      return {
        ...state,
        currencies: action.payload.currency
      };
    case FETCH_ERROR:
      return {
        ...state,
        errorMessage: action.payload.error
      }
    default:
      return state;
  }
}

export default currencyReducer;
