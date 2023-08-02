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
<<<<<<< HEAD
/*
jest.mock('../src/lib/account');
describe('Start', () => {
  beforeEach(() => {
    const homeDiv = Start();
    document.body.replaceChildren(homeDiv);
  });

  test('Test para no validar login', () => {
    const navigateTo = jest.fn();
    signinUser(signInWithEmailAndPassword, 'continue with google');
    expect(navigateTo).not.toHaveBeenCalled('/start'); */
// });

/* function drinkAll(callback, flavour) {
  if (flavour !== 'octopus') {
    callback(flavour);
  }
}

  describe('drinkAll', () => {
  test('drinks something lemon-flavoured', () => {
    const drink = jest.fn();
    drinkAll(drink, 'lemon');
    expect(drink).toHaveBeenCalled();
  });

  test('does not drink something octopus-flavoured', () => {
    const drink = jest.fn();
    drinkAll(drink, 'octopus');
    expect(drink).not.toHaveBeenCalled();
  });
<<<<<<< HEAD
}); */
// await nextTick()
=======
});
*/
>>>>>>> 4796bd2e7fbada48e03c73f22e7bdf6ec3a39334
=======
>>>>>>> e12028482defbaea9efc82204d4fc510a08b6ee8
