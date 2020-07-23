import React from 'react';
import { shallow } from 'enzyme'
import '@testing-library/react'
import '@testing-library/jest-dom'
import App from './App';

test('App renders without errors', () => {
  const {getByTestId} = shallow(<App />);
  console.log(expect)
});

