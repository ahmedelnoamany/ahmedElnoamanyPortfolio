import {
  CHANGE_VIEW 
} from 'redux/actions/types';

export function changeView(view) {
  return {
    type: CHANGE_VIEW,
    payload: view
  };
}