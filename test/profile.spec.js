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
import { Profile } from '../src/components/Profile';

beforeEach(() => {
  const homeDiv = Profile();
  document.body.replaceChildren(homeDiv);
});
test('Button created correctly', () => {
  const updateProfileButton = document.querySelector('button');
  expect(updateProfileButton).toBeTruthy();
});
test('Clicking the button redirects if the promise is correct', () => {
  jest.spyOn(account, 'createProfile').mockImplementation(() => jest.fn());
  const updateProfileButton = document.querySelector('#updateProfileButton');
  updateProfileButton.click();
  expect(account.createProfile).toHaveBeenCalled();
});
test('Button created correctly', () => {
  const getProfileButton = document.querySelector('button');
  expect(getProfileButton).toBeTruthy();
});
test('Clicking the button redirects if the promise is correct', () => {
  jest.spyOn(account, 'getProfile').mockImplementation(() => jest.fn());
  const getProfileButton = document.querySelector('#getProfileButton');
  getProfileButton.click();
  expect(account.getProfile).toHaveBeenCalled();
});
