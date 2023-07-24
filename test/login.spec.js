/* eslint-disable no-undef */
/* eslint-disable import/extensions */
/* eslint-disable import/named */
import { expect} from '@jest/globals';
import { signinUser } from '../src/components/Login.js';

jest.mock('../src/components/Login.js');

beforeEach(() => {
  signinUser.mockClear();
});

test('user signing', () => {
  const expectedEmail = 'alexis@gmail.com';
  const expectedPassword = '123456';
  signinUser.mockImplementationOnce((email, password) => Promise.resolve({ email, password }));

  return signinUser(expectedEmail, expectedPassword).then((result) => {
    expect(result).toEqual({ email: expectedEmail, password: expectedPassword });
  });
});
