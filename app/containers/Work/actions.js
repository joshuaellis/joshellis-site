/*
 *
 * Work actions
 *
 */

import { DEFAULT_ACTION } from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
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