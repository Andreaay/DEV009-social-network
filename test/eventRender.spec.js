import eventRender from '../src/components/EventRender'; 
import { updateEvent, removeEvent } from '../src/lib/events';
// import { jest } from '@jest/globals';


jest.mock('../src/components/EventRender', () => ({
    __esModule: true,
    default: jest.fn(),
  }));
  
  jest.mock('../src/lib/events', () => ({
    updateEvent: jest.fn(),
    removeEvent: jest.fn(),
  }));
  
  describe('Event Rendering', () => {
    test('Edit button should call updateEvent', () => {
        eventRender.mockReturnValue('<div><button class="edit-button">Edit</button></div>');
      const div = document.createElement('div');
      div.innerHTML = eventRender();
      document.body.appendChild(div);
  
      const editButton = document.querySelector('button.edit-button');
      editButton.click();
  
      expect(updateEvent).toHaveBeenCalledWith('mock-event-id', { post: 'Nuevo contenido' });
  
      document.body.removeChild(div);
    });
  
    test('Delete button should call removeEvent', () => {
        eventRender.mockReturnValue('<div><button class="delete-button">Delete</button></div>');
      const div = document.createElement('div');
      div.innerHTML = eventRender();
      document.body.appendChild(div);
  
      const deleteButton = document.querySelector('button.delete-button');
      deleteButton.click();
  
      expect(removeEvent).toHaveBeenCalledWith('mock-event-id');
  
      document.body.removeChild(div);
    });
  });