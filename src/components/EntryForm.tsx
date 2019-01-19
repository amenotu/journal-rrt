import * as React from 'react';
import { Form, TextArea, Input, Container, Divider } from 'semantic-ui-react'

export interface Props {
    onSubmitEntry: (date: string, text: string, index?: number) => void;
}

export interface State {
    date?: string;
    text?: string;
    index?: number;
}

class EntryForm extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = { date: '', text: '', index: undefined };
      }

    state = { date: '', text: '', index: undefined }

    handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => this.setState({ date: e.target.value })

    handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => this.setState({ text: e.target.value })
  
    handleSubmit = () => {
        const { date, text } = this.state;
        const { onSubmitEntry } = this.props;

        this.setState({ date: '', text: '' })
        onSubmitEntry(date, text);

    }

    render() {
        const { date, text } = this.state;

        return (
            <div>
                <Container>
                    <p>Fill out the form to add an entry!</p>
                    <Form onSubmit={ this.handleSubmit }>
                        <Form.Group>
                            <Form.Field 
                                control= { Input }
                                label='Date'
                                placeholder='Enter the date here...'
                                onChange={ this.handleDateChange } 
                                name='date' 
                                value={ date }
                                required/>
                            <Form.Field 
                                control= { TextArea } 
                                label='Entry' 
                                placeholder='Start typing your entry here...'
                                name='text'
                                value={ text}
                                onChange={ this.handleTextChange }
                                required/>
                            <Form.Button content='Submit' />
                        </Form.Group>
                    </Form>
                </Container>
                <Divider/>
            </div>
        )
    }
}

export default EntryForm;
