import { GET_SHOES, SHOES_LOADING } from './types';
import axios from 'axios';

export const getShoes = () => dispatch => {
  dispatch(setShoesLoading());
  axios.get('API/shoedata').then(res =>
    dispatch({
      type: GET_SHOES,
      payload: res.data
    })
  );
};

export const setShoesLoading = () => {
  return {
    type: SHOES_LOADING
  };
};
