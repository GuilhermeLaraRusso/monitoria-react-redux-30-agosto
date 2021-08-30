export const LOADING = 'LOADING';
export const SAVE_COINS = 'SAVE_COINS';
export const FETCH_ERROR = 'FETCH_ERROR';

export const loading = () => ({
  type: LOADING
})
export const saveCoins = (currency) => ({
  type: SAVE_COINS,
  payload: { currency }
})
export const fetchError = (error) => ({
  type: FETCH_ERROR,
  payload: { error }
})

const thunkAPI = (URL) => async (dispatch) =>{
  dispatch(loading());
  try{
    const response = await fetch(URL);
    const moedas = await response.json();
    dispatch(saveCoins(moedas));
  } catch(error){
    dispatch(fetchError(error));
  }
}

export default thunkAPI;
