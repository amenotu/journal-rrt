import * as React from 'react';
import { configure } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import Entries from './Entries';

configure({adapter: new EnzymeAdapter()});

test('Entries renders', () => {
    const entries = shallow(<Entries entries={[]} onDeleteEntry={() => {}}/>);
    
    expect(entries).toMatchSnapshot();
  });