import * as React from 'react';
import { Header, Segment, Button } from 'semantic-ui-react';
import EditableFormContainer from '../containers/EditFormContainer';


function EntryMultiple(entryDate: string, text: string, index: number, callback1: Function){
    // return (
    //     <div key= { index }>
    //         <Header>{ entryDate }</Header>
    //         <Segment>{ text }</Segment>
    //         <Button onClick= { () => callback1(index) }>Delete</Button>
    //         <Button onClick= { () => callback2(entryDate, text, index, true)}>Edit</Button>
    //     </div>

    // )

    return (
        <div key= { index }>
            <Header>{ entryDate }</Header>
            <Segment>{ text }</Segment>
            <Button onClick= { () => callback1(index) }>Delete</Button>
            <EditableFormContainer 
                open={true} 
                currentDate= { entryDate }
                currentText= { text }
                currentIndex= { index }
                />
        </div>

    )
} 

// <Modal trigger={<Button>Edit Entry</Button>}>
// <Modal.Header>Editting Entry</Modal.Header>
// <Modal.Content>
// <Modal.Description>
//     <                <Form onSubmit={ this.handleSubmit }>
//     <Form.Group>
//         <Form.Field 
//             control= { Input }
//             label='Date'
//             placeholder='Enter the date here...'
//             onChange={ this.handleDateChange } 
//             name='date' 
//             value={ date }
//             required/>
//         <Form.Field 
//             control= { TextArea } 
//             label='Entry' 
//             placeholder='Start typing your entry here...'
//             name='text'
//             value={ text }
//             onChange={ this.handleTextChange }
//             required/>
//         <Form.Button content='Submit' />
//     </Form.Group>
// </Form>
// </Modal.Description>
// </Modal.Content>
// </Modal>

export default EntryMultiple;
