import EditableForm from '../components/EditForm';
import * as actions from '../actions';
import { StoreState } from '../types/index';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

export function mapStateToProps({ entries }: StoreState) {
    return {
      entries
    }
  }

export function mapDispatchToProps(dispatch: Dispatch<actions.EntryActions>) {
    return {
        onEditEntry: (date: string, text: string, index: number) => dispatch(actions.editEntry(date, text, index))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditableForm);
