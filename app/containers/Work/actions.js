export function updateProjectAction(project, bool) {
  return {
    type: 'UPDATE_PROJECT',
    project,
    showProject: bool,
    id: 0,
  };
}

export function updateTextAction(text) {
  return {
    type: 'UPDATE_TEXT',
    text,
    id: 1,
  };
}

export function resetWorkAction() {
  return {
    type: 'RESET_WORK',
    id: 2,
  };
}

export function setGalleryBooleanAction(bool) {
  return {
    type: 'SET_GALLERY_BOOL',
    showGallery: bool,
    id: 3,
  };
}
