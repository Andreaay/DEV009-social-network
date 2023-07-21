/* eslint-disable no-undef */
/* eslint-disable import/extensions */
/* eslint-disable import/named */
import { } from 'jest';
import { signinUser } from '../src/components/Login.js';

jest.mock('../src/components/Login.js', () => {
  jest.fn();
});
jest.mock('../src/components/Login.js');
beforeEach(() => {
  signinUser.mockClear();
});
test('user signing', () => {
  const expectedEmail = { email: 'alexis@gmail.com' };
  const expectedPassword = { password: '123456' };
  signinUser.returnValueOnce(expectedEmail, expectedPassword);
  expected(signinUser).toEqual(expectedEmail, expectedPassword);
});
