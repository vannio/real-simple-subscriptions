import formatDate from './formatDate';

describe('formatDate', () => {
  test('formats the date', () => {
    expect(formatDate('1/1/2018')).toEqual('Mon, Jan 1, 2018, 12:00 AM');
    expect(formatDate('Jan 1 2018')).toEqual('Mon, Jan 1, 2018, 12:00 AM');
    expect(formatDate('1 Jan 2018')).toEqual('Mon, Jan 1, 2018, 12:00 AM');
  });
});
