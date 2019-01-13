import Entries from '../components/Entries';
// import * as actions from '../actions';
import { StoreState } from '../types/index';
import { connect } from 'react-redux';
// import { Dispatch } from 'redux';

export function mapStateToProps({ entries }: StoreState) {
    return {
        entries
    }
  }

export default connect(mapStateToProps, null)(Entries);