import { GET_SHOES, SHOES_LOADING } from '../actions/types';

const initalState = {
  shoes: [],
  loading: false
};

export default function(state = initalState, action){
  switch(action.type){
    case GET_SHOES:
      return {
        ...state,
        shoes: action.payload,
        loading: false
      }
    case SHOES_LOADING:
      return {
        ...state,
        loading: true
      }
      default:
        return state;
  }
}
