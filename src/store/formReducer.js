import { CLEAR_FORM, HYDRATE_FORM } from './actionType'

const initialState = {
  currentForm: null,
  // something else
}

export default (state = initialState, action) => {
  switch (action.type) {
    case CLEAR_FORM:
      return initialState
    case HYDRATE_FORM:
      let currentForm = state.currentForm || {}

      state = {
        ...state,
        currentForm: {
          ...currentForm,
          ...action.info
        }}

      return state
  }
  return state
}
