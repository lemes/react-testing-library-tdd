import React from 'react';

import {
  cleanup,
  render,
  fireEvent,
  waitForElement,
  cleanDiv
} from './testHelper';

import App from './index';

beforeAll(cleanDiv);
afterEach(cleanup);

test('test', () => {
  const { getByText, debug } = render(<App />);
  expect(getByText('Hello CodeSandbox')).toBeVisible();
});

test('test 2', () => {
  const { getByText, debug } = render(<App>Rener</App>);
  expect(getByText('Rener')).toBeVisible();
});

test('test 3', async () => {
  const { getByText, debug } = render(<App>Vivi</App>);
  fireEvent.click(getByText('Click me'));
  const loading = await waitForElement(() => getByText('Loading'));
  expect(loading).toBeVisible();
  debug();
});
