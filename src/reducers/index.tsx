import { EntryActions } from '../actions';
import { StoreState } from '../types/index';
import { ADD_ENTRY, DELETE_ENTRY } from '../constants/index';

export function reducer(state: StoreState, action: any): StoreState {
  console.log('action: ', action);
  switch (action.type) {
    case ADD_ENTRY:
      return { ...state, entries: [...state.entries, {date: action.date, text: action.text}] }
    case DELETE_ENTRY:
      return { ...state }
  }
  return state;
}
