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
import { Login } from '../src/components/Login';jest.mock('../src/lib/account');
describe('Login', () => {
  beforeEach(() => {
  });
  test('Se creo el boton correctamente', () => {
    const bottonLogin = document.querySelector('button');
    expect(bottonLogin).toBeTruthy();
  });
  test('Al hacer click al boton redirecciona si la promesa esta bien', () => {
    const homeDiv = Login();
    document.body.replaceChildren(homeDiv);
    signinUser. mockImplementationOnce((email, password, callback) => {
      console.log(password);
      const callback2 = true
      return Promise.resolve({ user: { userCredential: 123, email } })
    })
    const bottonLogin = document.querySelector('button')
    bottonLogin.click();
    expect(callback).toHaveBeenCalled(true);
  });
});
