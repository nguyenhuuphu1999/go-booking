import { createSlice } from '@reduxjs/toolkit';
import apartmentApi from '../api/apartmentApi';

const homeSlice = createSlice({
    name: 'home',
    initialState: {
        apartments: [],
    },
    reducers: {
      fetchApartmentsSuccess(state, action) {
          state.apartments = action.payload;
      }
    }
});

const { fetchApartmentsSuccess } = homeSlice.actions;

// async action
export const fetchApartments = () => async dispatch => {
    const res = await apartmentApi.getAll();
    return dispatch(fetchApartmentsSuccess(res.data));
}

export default homeSlice.reducer;