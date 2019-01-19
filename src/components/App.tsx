import * as React from 'react';
import EntriesContainer from '../containers/EntriesContainer';
import EntryFormContainer from '../containers/EntryFormContainer';

  function App() {
  
    return (
      <div>
        <EntryFormContainer/>
        <EntriesContainer/>
      </div>
    );
  }
  
  export default App;
