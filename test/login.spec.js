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
import { signinUser } from '../src/lib/account';
// eslint-disable-next-line import/no-cycle
import { Login } from '../src/components/Login';

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
