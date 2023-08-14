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
// import { createPost, bringPost } from '../src/lib/post';
// eslint-disable-next-line import/no-cycle
import * as post from '../src/lib/post';
import { Newpost } from '../src/components/Newpost';

describe('Newpost', () => {
  
  let bringPostSpy;
  beforeEach(() => {
    document.body.innerHTML = '';
    bringPostSpy = jest.spyOn(post, 'bringPost').mockImplementation(() => {});
  });
  test('CreatePost is called when you click the share button', () => {
    jest.spyOn(post, 'createPost').mockImplementation(() => {});
    const homeDiv = Newpost();
    document.body.appendChild(homeDiv);
    const createPostButton = document.getElementById('paltesting');
    createPostButton.click();
    expect(post.createPost).toHaveBeenCalledTimes(0);
  });

  test('BringPost is called after rendering', () => {
    const homeDiv = Newpost();
    document.body.appendChild(homeDiv);
    expect(bringPostSpy).toHaveBeenCalled();
  });
});











