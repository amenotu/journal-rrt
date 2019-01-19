import * as React from 'react';
import { Card, Button } from 'semantic-ui-react';
import Entry from './Entry';

export interface Props {
    entries: {date: string, text: string}[];
    onDeleteEntry: (index: number) => void;
  }

// function Entries({ entries, onDeleteEntry }: Props) {
//     const mappedEntries = entries.map((entry, i: number) => (
//         (
//             <Card key={ i }>
//                 <Card.Header>{ entry.date }</Card.Header>
//                 <Card.Content>
//                 <p>{ entry.text }</p>
//                 </Card.Content>
//                 <Button onClick={ () => onDeleteEntry(i) }>DELETE</Button>
//             </Card>
//         )
//     ))


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
