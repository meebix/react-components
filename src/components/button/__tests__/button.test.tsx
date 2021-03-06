import React from 'react';
import { render } from '@testing-library/react';
import { Button } from '..';

test('loads items eventually', async () => {
  const { getByText } = render(<Button>Test</Button>);

  expect(getByText('Test')).toBeTruthy();
});
