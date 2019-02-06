//WORK ACTIONS
export function resetWorkAction(){
    return {
      type: 'RESET_WORK',
      id: 3,
    }
}
export function updateProjectAction(project,bool){
  return {
    type: 'UPDATE_PROJECT',
    project,
    showProject: bool,
  }
};
export function updateTextAction(text){
  return{
    type: 'UPDATE_TEXT',
    text,
  }
}