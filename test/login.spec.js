/* eslint-disable no-sequences */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
/* eslint-disable import/extensions */
/* eslint-disable import/named */
<<<<<<< HEAD
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
=======
// import { } from 'jest';
import { expect, jest } from '@jest/globals';
import { signinUser } from '../src/components/Login.js';

function testsigninUser(email, password) {
  if (email, password !== 'continue with google') {
    signinUser(email, password);
  }
}

describe('signinUser', () => {
  test('Test para validar login con email y password', () => {
    const signInWithEmailAndPassword = jest.fn();
    testsigninUser(signInWithEmailAndPassword, 'email, password');
    expect(signInWithEmailAndPassword).toHaveBeenCalled(email, password);
  });

  test('Test para no validar login', () => {
    const signInWithEmailAndPassword = jest.fn();
    testsigninUser(signInWithEmailAndPassword, 'continue with google');
    expect(signInWithEmailAndPassword).not.toHaveBeenCalled(email, password);
>>>>>>> b3197a96c575dc0a4ffa557c96456cc972dc41b0
  });
});
