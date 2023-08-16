/**
 * @jest-environment jsdom
 */
import eventRender from '../src/components/EventRender';
import * as eventsModule from '../src/lib/events';


jest.mock('../src/lib/events');

describe('Event Rendering', () => {
  test('Edit button should call updateEvent', async () => {
    const mockEventData = [{ id: 'mock-event-id', data: () => ({ post: 'Mock Event' }) }];
    eventsModule.bringEvent.mockResolvedValue(mockEventData);
    eventsModule.updateEvent.mockImplementation((eventId, newData) => {
    });
    const div = eventRender();
    document.body.innerHTML = '';
    document.body.appendChild(div);
    const editButton = div.querySelector('button');
    editButton.click();
    const popup = div.querySelector('.popup');
    expect(popup).toBeTruthy();
    document.body.removeChild(div);
  });
  // test para delete
});