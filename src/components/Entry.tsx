import * as React from 'react';
import { Container, Header, Segment, Button, Divider } from 'semantic-ui-react';
import EditableFormContainer from '../containers/EditFormContainer';


function Entry(entryDate: string, text: string, index: number, callback1: Function){

    return (
        <div key={ index }>
            <Container>
                <Header>{ entryDate }</Header>
                <Segment>{ text }</Segment>
                <Button onClick= { () => callback1(index) }>Delete</Button>
                <EditableFormContainer 
                    open={true} 
                    currentDate= { entryDate }
                    currentText= { text }
                    currentIndex= { index }
                    />
            </Container>
            <Divider/>
        </div>

    )
} 

export default Entry;
