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

export interface EditEntry {
    type: constants.EDIT_ENTRY;
    date: string;
    text: string;
    index: number;
}

export type EntryActions = AddEntry | DeleteEntry | EditEntry;

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

export function editEntry(date: string, text: string, index: number): EditEntry {
    return {
        type: constants.EDIT_ENTRY,
        date,
        text,
        index
    }
}
