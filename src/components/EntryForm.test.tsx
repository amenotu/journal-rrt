import * as React from 'react';
import { configure } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import EntryForm from './EntryForm';

configure({adapter: new EnzymeAdapter()});

test('EntryForm renders', () => {
    const entryform = shallow(<EntryForm onSubmitEntry={() => {}}/>);
    
    expect(entryform).toMatchSnapshot();
  });