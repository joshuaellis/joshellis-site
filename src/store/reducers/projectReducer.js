import produce from 'immer'

import { SET_IMAGE_MODAL_STATE } from '../constants/projectConstants'

export const initialState = {
  imageModal: {
    imageId: null,
    show: false
  }
}

const projectReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case SET_IMAGE_MODAL_STATE:
        draft.imageModal.imageId = action.id
        draft.imageModal.show = action.show
        break
    }
  })

export default projectReducer
