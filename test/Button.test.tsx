import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { Button } from '../src/components/Button/Button';
import '@testing-library/jest-dom';

const mockDocument = document.implementation.createHTMLDocument();
global.document = mockDocument;
if (typeof globalThis !== 'undefined') {
  globalThis.window = mockDocument.defaultView!;
} else {
  const globalObject: typeof globalThis = global;
  globalObject.window = mockDocument.defaultView!;
}

test('Button renders correctly with default props', () => {
  render(
    <Button variant="default" size="default" rounded="default" asChild={false}>
      Think Different
    </Button>
  );

  const buttonElement = screen.getByText(/Think Different/i);
  expect(buttonElement).toBeInTheDocument();
});

test('Button renders correctly with primary variant', () => {
  render(
    <Button variant="primary" size="default" rounded="default" asChild={false}>
      Think Different
    </Button>
  );

  const buttonElement = screen.getByText(/Think Different/i);
  expect(buttonElement).toBeInTheDocument();
});

test('Button renders correctly with asChild prop', () => {
  render(
    <Button>
      <Button variant="primary" size="default" rounded="default" asChild={true}>
        Think Different
      </Button>
    </Button>
  );

  const buttonElement = screen.getByRole('button');
  expect(buttonElement).toBeInTheDocument();
});
