import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders navigation shell', () => {
  const { container } = render(<App />);
  expect(container.querySelector('nav')).toBeInTheDocument();
});
