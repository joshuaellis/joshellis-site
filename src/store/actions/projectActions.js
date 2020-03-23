import { SET_IMAGE_MODAL_STATE } from '../constants/projectConstants'

export const setImageModalStateAction = (id, show) => ({
  type: SET_IMAGE_MODAL_STATE,
  id,
  show
})
