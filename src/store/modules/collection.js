import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  data: {},
  fetching: false
}

export const collection = createSlice({
  name: 'collection',
  initialState,
  reducers: {
    SET_STATE (state, {payload: {key, value}}) {
      state[key] = value
    },
    SET_DATA_VALUE (state, {payload: {key, value}}) {
      state.data[key] = value
    }
  },
})

// Action creators are generated for each case reducer function
export const { SET_STATE, SET_DATA_VALUE } = collection.actions

export const get_collection = () =>
  async function (dispatch) {
    try {
      // const url = '/api/collection'
      // const response = await axios.get(url)
      const value = {
        id: '123456',
        title: 'This is a brand bew collection',
        locale: 'en_GB'
      }
      dispatch(SET_STATE({key: 'fetching', value: true}))
      setTimeout(() => {
        dispatch(SET_STATE({key: 'data', value}))
        dispatch(SET_STATE({key: 'fetching', value: false}))
      }, 500)
    } catch (e) {

    }
  }

export default collection.reducer
