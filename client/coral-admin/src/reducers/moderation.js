import {Map} from 'immutable';
import * as actions from '../constants/moderation';

const initialState = Map({
  singleView: false,
  modalOpen: false,
  user: Map({}),
  commentId: null,
  userDetailId: null,
  banDialog: false,
  shortcutsNoteVisible: window.localStorage.getItem('coral:shortcutsNote') || 'show'
});

export default function moderation (state = initialState, action) {
  switch (action.type) {
  case actions.HIDE_BANUSER_DIALOG:
    return state
      .set('banDialog', false);
  case actions.SHOW_BANUSER_DIALOG:
    return state
      .merge({
        user: Map(action.user),
        commentId: action.commentId,
        showRejectedNote: action.showRejectedNote,
        banDialog: true
      });
  case actions.SET_ACTIVE_TAB:
    return state
      .set('activeTab', action.activeTab);
  case actions.TOGGLE_MODAL:
    return state
      .set('modalOpen', action.open);
  case actions.SINGLE_VIEW:
    return state
      .set('singleView', !state.get('singleView'));
  case actions.HIDE_SHORTCUTS_NOTE:
    return state
      .set('shortcutsNoteVisible', 'hide');
  case actions.VIEW_USER_DETAIL:
    return state.set('userDetailId', action.userId);
  case actions.HIDE_USER_DETAIL:
    return state.set('userDetailId', null);
  default :
    return state;
  }
}
