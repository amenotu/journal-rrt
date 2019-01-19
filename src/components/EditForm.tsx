import * as React from 'react';
import { Button, Modal, Form, Input, TextArea } from 'semantic-ui-react';


export interface Props {
    open: Boolean;
    currentDate: string;
    currentText: string;
    currentIndex: number;
    onEditEntry: (date: string, text: string, index: number) => void;
}

export interface State {
    open: Boolean;
    closeOnEscape?: Boolean;
    closeOnDimmerClick?: Boolean;
    currentDate: string;
    currentText: string;
}


class ModalExampleCloseConfig extends React.Component<Props, State> {
  state = { open: false, closeOnEscape: undefined, closeOnDimmerClick: undefined, currentDate: this.props.currentDate, currentText: this.props.currentText }

  closeConfigShow = (closeOnEscape: Boolean, closeOnDimmerClick: Boolean) => () => {
    this.setState({ closeOnEscape, closeOnDimmerClick, open: true })
  }

  close = () => this.setState({ open: false })

  handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => this.setState({ currentDate: e.target.value })

  handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => this.setState({ currentText: e.target.value })

  handleEditSubmit = () => {
    const { currentDate, currentText, } = this.state;
    const {  onEditEntry, currentIndex } = this.props;

    onEditEntry(currentDate, currentText, currentIndex);
    this.setState({open: false})
  }

  render() {
    const { open, closeOnEscape, closeOnDimmerClick, currentDate, currentText } = this.state
    const {currentIndex} = this.props

    return (
      <div key= { currentIndex }>
        <Button onClick={this.closeConfigShow(true, true)}>Edit Entry</Button>

        <Modal
          open={open}
          closeOnEscape={closeOnEscape}
          closeOnDimmerClick={closeOnDimmerClick}
          onClose={this.close}
        >
          <Modal.Header>Edit Your Entry</Modal.Header>
          <Modal.Content>
            <p>Edit your entry below</p>
            <Form onSubmit={ this.handleEditSubmit }>
                <Form.Group>
                    <Form.Field 
                        control= { Input }
                        label='Date'
                        placeholder='Enter the date here...'
                        onChange={ (e: React.ChangeEvent<HTMLInputElement>) => this.handleDateChange(e) } 
                        name='date' 
                        value={ currentDate }
                        required/>
                    <Form.Field 
                        control= { TextArea } 
                        label='Entry' 
                        placeholder='Start typing your entry here...'
                        name='text'
                        value={ currentText}
                        onChange={ (e: React.ChangeEvent<HTMLInputElement>) => this.handleTextChange(e) }
                        required/>
                    <Form.Button content='Submit' />
                </Form.Group>
            </Form>
          </Modal.Content>
          <Modal.Actions>
            <Button onClick={this.close} negative>
              Cancel
            </Button>
          </Modal.Actions>
        </Modal>
      </div>
    )
  }
}

export default ModalExampleCloseConfig;
