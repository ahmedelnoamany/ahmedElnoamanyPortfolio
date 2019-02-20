import { webProjects, mobileProjects } from 'assets/projectDetails';
import {
  CHANGE_VIEW
} from 'redux/actions/types';

const initialState = {
  projectsWeb: webProjects,
  projectsMobile: mobileProjects,
  currentView: 0
};

export default function (state = initialState, action) {
  switch(action.type) {
    case CHANGE_VIEW: {
      return {...state, currentView: action.payload}
    }
    default:
      return state;
  }
}