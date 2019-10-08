import { SET_PROJECT, OPEN_MODAL } from '../constants/project-constants';

export const setProjectAction = projectTitle => ({
  type: SET_PROJECT,
  project: projectTitle,
});

export const openModalAction = (bool, object, id) => ({
  type: OPEN_MODAL,
  modalOpen: bool,
  imageObj: object,
  carouselId: id,
});
