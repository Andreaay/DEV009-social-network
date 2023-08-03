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
import { Login } from '../src/components/Login';// jest.mock('../src/lib/account');

describe('Login', () => {
  beforeEach(() => {
    const homeDiv = Login();
    document.body.replaceChildren(homeDiv);
  });
  test('Se creo el boton correctamente', () => {
    const bottonLogin = document.querySelector('button');
    expect(bottonLogin).toBeTruthy();
  });
  test('Al hacer click al boton redirecciona si la promesa esta bien', () => {
    const bottonLogin = document.querySelector('button');
    bottonLogin.click();
    expect(signinUser).toHaveBeenCalled();
  });
});
