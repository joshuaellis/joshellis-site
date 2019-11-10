import { PUT_PROJECT_LIST_DATA } from '../constants/globalConstants';

export const putProjectListDataAction = projectArray => ({
  type: PUT_PROJECT_LIST_DATA,
  data: projectArray,
});
