/* eslint-env jest */

import React from 'react';
import { mount } from 'enzyme';
import mockCollection from '@/__mocks__/collection.json';

const options = {
  context: {},
  childContextTypes: {},
};

// jest.setMock('../../styles/gallery.css', {});
const PureComponent = require('../../components/PureComponent.jsx').default;

beforeEach(() => {});

afterEach(() => {});

describe('', () => {
  it('should render mock collection', () => {
    const tree = mount(<PureComponent collection={mockCollection} />, options);
    expect(tree.text()).toMatchSnapshot();
  });
});
