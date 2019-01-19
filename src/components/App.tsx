import * as React from 'react';
import EntriesContainer from '../containers/EntriesContainer';
import EntryFormContainer from '../containers/EntryFormContainer';
// import Multiple from '../components/Multiple';
// import Entry from '../components/Entry';

  function App() {
  
    return (
      <div>
        <EntryFormContainer/>
        <EntriesContainer/>
      </div>
    );
  }
  
  export default App;
