import * as React from 'react';
import Entry from './Entry';

export interface Props {
    entries: {date: string, text: string}[];
    onDeleteEntry: (index: number) => void;
  }

function Entries({ entries, onDeleteEntry }: Props) {
    const mappedEntries = entries.map((singleEntry, i: number) => (
        (
            Entry(singleEntry.date, singleEntry.text, i, onDeleteEntry)
        )

    ))

    return (
        <div>{ mappedEntries }</div>
    )
}

export default Entries;
