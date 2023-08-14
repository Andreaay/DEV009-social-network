/**
 * @jest-environment jsdom
 */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-sequences */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
/* eslint-disable import/extensions */
/* eslint-disable import/named */
// import { } from 'jest';
import { expect, jest } from '@jest/globals';
import * as firebase from 'firebase/auth';
import * as account from '../src/lib/account';
// eslint-disable-next-line import/no-cycle
import { Login } from '../src/components/Login';

// jest.mock('../src/lib/account');
jest.mock('firebase/auth');
describe('Login', () => {
  beforeEach(() => {
    const homeDiv = Login();
    document.body.replaceChildren(homeDiv);
  });
  test('The button was created successfully', () => {
    const buttonLogin = document.querySelector('button');
    expect(buttonLogin).toBeTruthy();
  });
  test('Clicking the button redirects if the promise is correct', () => {
    firebase.setPersistence.mockResolvedValue(123);
    firebase.signInWithEmailAndPassword.mockResolvedValue({ user: 'andrea' });
    jest.spyOn(account, 'signinUser');
    const buttonLogin = document.querySelector('button');
    buttonLogin.click();
    expect(account.signinUser).toHaveBeenCalled();
  });

  test('By clicking the button we will validate that setPersistence is invoked', () => {
    firebase.setPersistence.mockResolvedValue(123);
    firebase.signInWithEmailAndPassword.mockResolvedValue({ user: 'andrea' });
    const buttonLogin = document.querySelector('button');
    buttonLogin.click();
    expect(firebase.setPersistence).toHaveBeenCalled();
  });
});
