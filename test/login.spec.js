import { TestWatcher } from 'jest';
import{ signinUser, enterGoogle } from './src/components/Login.js';

jest.mock('../src/components/Login.js', () => {
    signUser:jest.fn()}
  );
jest.mock('../src/components/Login.js',)
beforeEach(() =>{
  signinUser.mockClear()
});
test('user signing',() =>{
  const expectedEmail={email: 'alexis@gmail.com'}
  const expectedPassword={password: '123456'}
  signinUser.returnValueOnce(expectedEmail,expectedPassword)
  expected(signinUser).toEqual(expectedEmail, expectedPassword)
});
