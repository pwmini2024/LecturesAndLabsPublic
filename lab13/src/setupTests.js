// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// Suppress act() warnings
const originalError = console.error;
console.error = (...args) => {
  if (/Warning: ReactDOM.render is no longer supported in React 18/.test(args[0])) {
    return;
  }
  if (/Warning: `ReactDOMTestUtils.act` is deprecated/.test(args[0])) {
    return;
  }
  originalError.call(console, ...args);
}; 