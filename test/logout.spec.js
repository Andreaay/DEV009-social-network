/*
*@jest-environment jsdom 
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
import { Start } from '../src/components/Start';
// jest.mock('../src/lib/account');describe('Start', () => {
beforeEach(() => {
  const homeDiv = Start();
  document.body.replaceChildren(homeDiv);
});
test('Se creó el botón correctamente', () => {
  const buttonLogout = document.querySelector('button');
  expect(buttonLogout).toBeTruthy();
});
test('Al hacer click al botón logout redirecciona si la promesa es correcta', () => {
  jest.spyOn(account, 'logOutUser').mockImplementation(() => jest.fn());
  const buttonLogout = document.querySelector('#botoncito');
  buttonLogout.click();
  expect(account.logOutUser).toHaveBeenCalled();
});
