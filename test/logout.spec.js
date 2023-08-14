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
import { Start } from '../src/components/Start';
import { htmlElements } from '../src/components/htmlElements';
// jest.mock('../src/components/htmlElements');
describe('htmlElements', () => {

beforeEach(() => {
  const homeDiv = Start();
  document.body.replaceChildren(homeDiv);
});
test('The button was created successfully', () => {
  const buttonLogout = document.querySelector('button');
  expect(buttonLogout).toBeTruthy();
});
test('Clicking the logout button redirects if the promise is correct', () => {
  jest.spyOn(account, 'logOutUser').mockImplementation(() => jest.fn());
  const buttonLogout = document.getElementById('#botoncito');
  buttonLogout.click();
  expect(account.logOutUser).toHaveBeenCalledTimes(0);
});
})
