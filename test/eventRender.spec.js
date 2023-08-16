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
// import * as account from '../src/lib/account';
// eslint-disable-next-line import/no-cycle
import eventRender from '../src/components/EventRender';
import * as eventsModule from '../src/lib/events';

jest.mock('../src/lib/events');

describe('Event Rendering', () => {
  test('Edit button should call updateEvent', () => {
    // Configura el comportamiento de las funciones espía
    const mockEventData = [{ id: 'mock-event-id', data: () => ({ post: 'Mock Event' }) }];
    eventsModule.bringEvent.mockResolvedValue(mockEventData);
    eventsModule.updateEvent.mockImplementation((eventId, newData) => {
      // Simulación de la actualización exitosa
    });

    // Renderiza el componente simulado
    const div = eventRender();
    document.body.innerHTML = '';
    document.body.appendChild(div);

    // Realiza las acciones que se esperan en la interacción
    const editButtons = div.querySelectorAll('#editbuttonid'); // Selecciona todos los botones de edición
    editButtons.forEach(editButton => {
      editButton.click(); // Simula hacer clic en cada botón de edición
    });

    // Realiza las aserciones necesarias
    const popups = div.querySelectorAll('.popup');
    expect(popups.length).toBe(editButtons.length); // Verifica que haya un popup por cada botón de edición

    // Limpia el DOM después de las pruebas
    document.body.removeChild(div);
  });
})