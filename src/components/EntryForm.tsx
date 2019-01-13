import * as React from 'react';
import * as Redux from 'redux';
import { connect, DispatchProp } from 'react-redux';
import * as actions from '../actions';
import { Form, TextArea } from 'semantic-ui-react'

//I want this component to be able to handle submits...

// interface DispatchProps {
//     // onSubmitEntry: () => void;
// }

// type Props = DispatchProps;

export interface Props {
    onSubmitEntry: (date: string, text: string) => void;
}

// interface ImplProps extends Props, DispatchProp {

// }

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

// function mapDispatchToProps(dispatch: Redux.Dispatch<any>): DispatchProps {
//     onSubmitEntry: () => dispatch(actions.addEntry('date', 'text'))
// }
  
// export default connect<{}, DispatchProps, {}>
//   (null, mapDispatchToProps)(EntryForm)


export default EntryForm;


// import * as React from 'react'
// import * as Redux from 'redux'

// import { MyReduxState } from './my-root-reducer.ts'

// export interface OwnProps {
//   propFromParent: number
// }

// interface StateProps {
//   propFromReduxStore: string
// }
     
// interface DispatchProps {
//   onSomeEvent: () => void
// }
 
// type Props = StateProps & DispatchProps & OwnProps
 
// interface State {
//   internalComponentStateField: string
// }

// class MyComponent extends React.Component<Props, State> {
//   ...
// }
 
// function mapStateToProps(state: MyReduxState, ownProps: OwnProps): StateProps {
//   ...
// }
 
// function mapDispatchToProps(dispatch: Redux.Dispatch<any>, ownProps: OwnProps): DispatchProps {
//   ...
// }
  
// export default connect<StateProps, DispatchProps, OwnProps>
//   (mapStateToProps, mapDispatchToProps)(MyComponent)
// view rawmy-connected-component.tsx hosted with ❤ by GitHub
