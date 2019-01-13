import App from '../components/App';
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
        onSubmitEntry: () => dispatch(actions.addEntry('date', 'text'))       
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
