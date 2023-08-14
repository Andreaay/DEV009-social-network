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
import { expect } from '@jest/globals';
import { createEvent, bringEvent } from '../src/lib/events';
// eslint-disable-next-line import/no-cycle
import { Events } from '../src/components/Events';

describe('Events', () => {
  beforeEach(() => {
    const homeDiv = Events();
    document.body.replaceChildren(homeDiv);
  });
  test('Event created successfully', () => {
    const createEvent = document.querySelector('button');
    expect(createEvent).toBeTruthy();
  });
  test('The event was drawn successfully', () => {
    const bringEvent = document.querySelector('button');
    expect(bringEvent).toBeTruthy();
  });
});
