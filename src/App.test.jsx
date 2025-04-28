// import { expect, it } from 'vitest';

// it('1 plus 1 equals 2', () => {
//   expect(1 + 1).toBe(2);
// });

/* ==================================================================== */
// import { describe, expect, it } from 'vitest';
// import App from './App';

// describe('App test suite', () => {
//   it('1 plus 1 equals 2', () => {
//     expect(1 + 1).toEqual(2);
//   });

//   it('expect up to not equal down', () => {
//     expect('up' !== 'down').toBe(true);
//   });

//   it('expect up to equal down', () => {
//     expect('up').toEqual('down');
//   });

//   it('expect up to not match regular expression /down/', () => {
//     expect('up').not.toMatch(/down/);
//   });
// });

/* ==================================================================== */
import { describe, expect, it } from 'vitest';
import App from './App';
import { render, screen } from '@testing-library/react';

// describe('App test suite', () => {
//   it('contains a `main` html element', () => {
//     render(<App />);
//     expect(screen.getByRole('main')).toBeInTheDocument();
//   });
// });

//
describe('App test suite', () => {
  it('contains a `main` html element', () => {
    render(<App />);

    expect(screen.getByRole('main')).toBeInTheDocument();

    screen.debug(screen.getByRole('heading', { level: 1 }));
    // screen.debug(screen.getByRole('main'));
  });
});
