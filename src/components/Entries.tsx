import * as React from 'react';
import { Card } from 'semantic-ui-react';

//I want this component to render the entries stored in the Entries array, found in the Redux store

export interface Props {
    entries: {date: string, text: string}[]
  }

function Entries({ entries }: Props) {
    console.log('this is entries: ', entries);

    const mappedEntries = entries.map((entry, i: number) => (
        (
            <Card key={ i }>
                <Card.Header>{ entry.date }</Card.Header>
                <Card.Content>
                <p>{ entry.text }</p>
                </Card.Content>
            </Card>
        )
    ))

    return (
        <div>{ mappedEntries }</div>
    )

}

export default Entries;
