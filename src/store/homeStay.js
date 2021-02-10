import { createSlice } from '@reduxjs/toolkit'
import homeStayApi from '../api/homeStayApi'

const homeStaySlice = createSlice({
  name: 'homeStay',
  initialState: {
    typeHouse: [],
    typeApartment: [],
    RattingGood: []
  },
  reducers: {
    fetchHomeStaySuccess(state, action) {
      state = action.payload
      return state
    },
  },
})

const { fetchHomeStaySuccess } = homeStaySlice.actions

// async action
export const fetchHomeStay = (id) => async dispatch => {
  const res = await homeStayApi.get(id)
  return dispatch(fetchHomeStaySuccess(res))
}

export default homeStaySlice.reducer
