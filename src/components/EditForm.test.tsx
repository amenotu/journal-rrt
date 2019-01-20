import * as React from 'react';
import { configure } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import EditForm from './EditForm';

configure({ adapter: new EnzymeAdapter() });

test('EditForm renders', () => {
  const editform = shallow(<EditForm open={true} currentDate='string' currentText='string' currentIndex={0} onEditEntry={ () => {} }/>);
  
  expect(editform).toMatchSnapshot();
});

