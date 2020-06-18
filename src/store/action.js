import { CLEAR_FORM, HYDRATE_FORM } from './actionType'


export const hydateForm = info => ({type: HYDRATE_FORM, info})
export const clearForm = () => ({type: CLEAR_FORM})
