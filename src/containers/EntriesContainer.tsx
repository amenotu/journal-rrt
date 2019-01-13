import Entries from '../components/Entries';
import { StoreState } from '../types/index';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import { Dispatch } from 'redux';

export function mapStateToProps({ entries }: StoreState) {
    return {
        entries
    }
  }

export function mapDispatchToProps(dispatch: Dispatch<actions.EntryActions>) {
    return {
        onDeleteEntry: (index: number) => dispatch(actions.deleteEntry(index))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Entries);
