import produce from 'immer'

import { PUT_PROJECT_LIST_DATA } from '../constants/globalConstants'

export const initialState = {
  projectList: []
}

const globalReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case PUT_PROJECT_LIST_DATA:
        draft.projectList = action.data
        break
    }
  })

export default globalReducer
