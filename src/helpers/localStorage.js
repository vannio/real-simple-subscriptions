export const defaultState = {
  config: {
    subscriptions: {
      '57cd1a69-5fab-48f7-a9bf-8a38b31612fd': {
        title: 'BBC',
        url: 'http://feeds.bbci.co.uk/news/rss.xml',
        dateAdded: 1501778672712
      },
      '62f6b37a-eeed-4289-9533-194e510d94ab': {
        title: '/r/programming',
        url: 'https://www.reddit.com/r/javascript+programming+webdev+golang/.rss',
        dateAdded: 1501778702624
      },
      '0a65455f-c4cd-42c0-85ba-b596a68c07d4': {
        title: '/r/frontpage',
        url: 'https://www.reddit.com/.rss',
        dateAdded: 1501778714008
      },
      '56a031d8-ab02-41dc-aea0-eb1951166b97': {
        title: 'Hackernews',
        url: 'https://news.ycombinator.com/rss',
        dateAdded: 1501778721764
      }
    },
    settings: {
      maxCount: 3,
      readOnOpen: true,
      hideRead: true,
      fetchInterval: 30,
      accentColour: 'Pink',
      showSummary: false,
      showContent: false,
      showImages: false
    }
  },
  data: {},
};

export const loadState = (key = 'config') => {
  try {
    const serializedState = localStorage.getItem(key);
    if (serializedState === null) {
      return defaultState[key];
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return defaultState[key];
  }
};

export const saveState = (state, key = 'config') => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(key, serializedState);
  } catch (err) {
    console.log(err);
  }
};

export default { saveState, loadState };
