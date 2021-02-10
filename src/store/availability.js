import { createSlice } from '@reduxjs/toolkit'
import availabilityApi from '../api/availabilityApi'

const availabilitySlice = createSlice({
  name: 'availability',
  initialState: {
    city: {},
    diaDiemNoiBatChiTiet: []
  },
  reducers: {
    fetchAvailabilitySuccess(state, action) {
      state = action.payload
      return state
    },
  },
})

const { fetchAvailabilitySuccess } = availabilitySlice.actions

// async action
export const fetchAvailability = (id) => async dispatch => {
  const res = await availabilityApi.get(id)
  return dispatch(fetchAvailabilitySuccess(res))
}

export default availabilitySlice.reducer
