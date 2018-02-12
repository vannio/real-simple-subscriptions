import { getUnreadCount } from './getUnreadCount';

describe('getUnreadCount', function() {
  test('gets the number of unread items from a given subscription', function() {
    const subscription = {
      items: [
        {
          id: 'abc',
        },
        {
          id: 'def',
        },
        {
          id: 'ghi',
        },
        {
          id: 'jkl',
        },
      ],
      markedAsRead: ['def', 'jkl'],
    };

    expect(getUnreadCount(subscription)).toEqual(2);
  });
});
