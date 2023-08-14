/**
 * @jest-environment jsdom
 */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-sequences */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
/* eslint-disable import/extensions */
/* eslint-disable import/named */
import { expect } from '@jest/globals';
import * as account from '../src/lib/account';
// eslint-disable-next-line import/no-cycle
import { Register } from '../src/components/Register';

describe('Register', () => {
  beforeEach(() => {
    const homeDiv = Register();
    document.body.replaceChildren(homeDiv);
  });
  test('Button created correctly', () => {
    const registerUser = document.querySelector('button');
    expect(registerUser).toBeTruthy();
  });
  test('Clicking the register button redirects if the promise is correct', () => {
    const mockUser = {
      uid: 'user123',
      displayName: 'John Doe',
      email: 'john.doe@example.com',
    };
    const mockUserCredential = { user: mockUser };
    jest.spyOn(account, 'addUser').mockResolvedValue(mockUserCredential);
    const registerUser = document.querySelector('#buttonReg');
    registerUser.click();
    expect(account.addUser).toHaveBeenCalled();
  });
});
