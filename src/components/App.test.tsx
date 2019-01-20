import * as React from 'react';
import { configure } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import App from './App';

configure({adapter: new EnzymeAdapter()});

test('App renders', () => {
    const app = shallow(<App/>);
    
    expect(app).toMatchSnapshot();
  });