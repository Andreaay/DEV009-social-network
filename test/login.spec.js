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
  test('Al hacer click al boton redirecciona si la promesa esta bien' () => {
    signinUser. mockImplementationOnce((email, password, callback) => {
      console.log(password);
      const callback = true
      return Promise.resolve({ user: { userCredential: 123, email } })
    })
    const bottonLogin = document.querySelector('button')
    bottonLogin,click();
    expect(callback).toHaveBeenCalled(true);
  });
});

/*  test('Test para validar login con email y password', () => {
    const navigateTo('/start') = jest.fn();
    signinUser(signInWithEmailAndPassword, 'email, password');
    expect(navigateTo).toHaveBeenCalled('/start');
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
}); */
// await nextTick()
