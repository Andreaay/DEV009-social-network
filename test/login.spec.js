/* eslint-disable import/no-unresolved */
/* eslint-disable no-sequences */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
/* eslint-disable import/extensions */
/* eslint-disable import/named */
// import { } from 'jest';
import { expect, jest } from '@jest/globals';
import { signinUser, logOutUser } from '../src/lib/account';
// eslint-disable-next-line import/no-cycle
import { Login } from '../src/components/Login';
import { Start } from '../src/components/Start';

jest.mock('../src/lib/account');
describe('Login', () => {
  beforeEach(() => {
    const homeDiv = Login();
    document.body.replaceChildren(homeDiv);
  });
  test('Se creó el botón correctamente', () => {
    const buttonLogin = document.querySelector('button');
    expect(buttonLogin).toBeTruthy();
  });
  test('Al hacer click al botón redirecciona si la promesa es correcta', () => {
    const buttonLogin = document.querySelector('button');
    buttonLogin.click();
    expect(signinUser).toHaveBeenCalled();
  });
});

jest.mock('../src/lib/account', () => ({
jest.requireActual('../src/lib/account'),
jest.fn().mockResolvedValue('Logout successful'),
}));
describe('Start', () => {
  beforeEach(() => {
    const homeDiv = Start();
    document.body.replaceChildren(homeDiv);
  });
  test('Se creó el botón correctamente', () => {
    const buttonLogout = document.querySelector('button');
    expect(buttonLogout).toBeTruthy();
  });
  test('Al hacer click al botón logout redirecciona si la promesa es correcta', () => {
    const buttonLogout = document.querySelector('button');
    buttonLogout.click();
    expect(logOutUser).toHaveBeenCalled();
  });
});
