import * as constants from '../constants';

export interface AddEntry {
    type: constants.ADD_ENTRY;
    date: string;
    text: string;
}

export type EntryActions = AddEntry;

export function addEntry(date: string, text: string): AddEntry {
    return {
        type: constants.ADD_ENTRY,
        date,
        text
    }
}
