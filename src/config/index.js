export const COLOUR_MAP = [
  'Pink',
  'Purple',
  'Blue',
  'Green',
  'Yellow',
  'Orange',
  'Red',
  'Black',
];

export const SHOW_CONTENT_MAP = {
  full: 'Full',
  firstParagraph: 'First paragraph',
  none: 'None',
};

export const INITIAL_STATE = {
  config: {
    maxCount: 6,
    readOnOpen: true,
    hideRead: false,
    fetchInterval: 30,
    accentColour: 'Blue',
    showSummary: true,
    showContent: 'firstParagraph',
    showImages: false,
  },
  subscriptions: {
    '57cd1a69-5fab-48f7-a9bf-8a38b31612fd': {
      title: 'BBC News',
      url: 'http://localhost:4000/xml/bbc.xml',
      // url: 'http://feeds.bbci.co.uk/news/rss.xml',
      dateAdded: 1501778672712,
      items: [],
      markedAsRead: [],
      bookMarked: [],
    },
    '62f6b37a-eeed-4289-9533-194e510d94ab': {
      title: '/r/programming',
      url: 'https://www.reddit.com/r/javascript+programming+webdev+golang/.rss',
      dateAdded: 1501778702624,
      items: [],
      markedAsRead: [],
      bookMarked: [],
    },
    '0a65455f-c4cd-42c0-85ba-b596a68c07d4': {
      title: '/r/frontpage',
      url: 'https://www.reddit.com/.rss',
      dateAdded: 1501778714008,
      items: [],
      markedAsRead: [],
      bookMarked: [],
    },
    '56a031d8-ab02-41dc-aea0-eb1951166b97': {
      title: 'Hackernews',
      url: 'https://news.ycombinator.com/rss',
      dateAdded: 1501778721764,
      items: [],
      markedAsRead: [],
      bookMarked: [],
    },
  },
};
