import * as React from 'react';
import { Form, TextArea } from 'semantic-ui-react'

export interface Props {
    onSubmitEntry: (date: string, text: string) => void;
}

export interface State {
    date?: string;
    text?: string;
}

class EntryForm extends React.Component<Props, State> {

    state = { date: '', text: '' }

    handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => this.setState({ date: e.target.value })

    handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => this.setState({ text: e.target.value })
  
    handleSubmit = () => {
        const { date, text } = this.state
        const { onSubmitEntry } = this.props;
        console.log('current state:', this.state);
        console.log( date, ' ', text);
  
        this.setState({ date: date, text: text })
        onSubmitEntry(date, text);
    }

    render() {
        const { date, text } = this.state;

        return (
            <div>
                <p>Fill out the form to add an entry!</p>
                <Form onSubmit={ this.handleSubmit }>
                    <Form.Group>
                        <Form.Field onChange={ this.handleDateChange } name='date' value={ date }>
                        <label>Date</label>
                        <input type='date'></input>
                        </Form.Field>
                        <Form.Field 
                            control= {TextArea} 
                            label='Entry' 
                            placeholder='Start typing your entry here...'
                            name='text'
                            value={ text }
                            onChange={ this.handleTextChange }
                              required/>
                        <Form.Button content='Submit' />
                    </Form.Group>
                </Form>
            </div>
        )
    }
}

export default EntryForm;
