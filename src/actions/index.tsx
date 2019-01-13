import * as constants from '../constants';

export interface AddEntry {
    type: constants.ADD_ENTRY;
    date: string;
    text: string;
}

export interface DeleteEntry {
    type: constants.DELETE_ENTRY;
    index: number;
}

export type EntryActions = AddEntry | DeleteEntry;

export function addEntry(date: string, text: string): AddEntry {
    return {
        type: constants.ADD_ENTRY,
        date,
        text
    }
}

export function deleteEntry(index: number): DeleteEntry {
    return {
        type: constants.DELETE_ENTRY,
        index
    }
}
