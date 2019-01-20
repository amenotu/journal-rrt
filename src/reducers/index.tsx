import { EntryActions } from '../actions';
import { StoreState } from '../types/index';
import { ADD_ENTRY, DELETE_ENTRY, EDIT_ENTRY } from '../constants/index';

export function reducer(state: StoreState, action: any): StoreState {
  switch (action.type) {
    case ADD_ENTRY:
      return { ...state, entries: [...state.entries, {date: action.date, text: action.text}] }
    case DELETE_ENTRY:
      return { ...state, entries: state.entries.filter(entry => state.entries.indexOf(entry) !== action.index) }
    case EDIT_ENTRY:
      state.entries.splice(action.index, 1, {date: action.date, text: action.text})
      return {...state, entries: [...state.entries ] }
    default:
      return state;
  }
}
