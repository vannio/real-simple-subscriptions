const config = {
  settings: {
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
      url: 'http://feeds.bbci.co.uk/news/rss.xml',
      dateAdded: 1501778672712,
    },
    '62f6b37a-eeed-4289-9533-194e510d94ab': {
      title: '/r/programming',
      url: 'https://www.reddit.com/r/javascript+programming+webdev+golang/.rss',
      dateAdded: 1501778702624,
    },
    '0a65455f-c4cd-42c0-85ba-b596a68c07d4': {
      title: '/r/frontpage',
      url: 'https://www.reddit.com/.rss',
      dateAdded: 1501778714008,
    },
    '56a031d8-ab02-41dc-aea0-eb1951166b97': {
      title: 'Hackernews',
      url: 'https://news.ycombinator.com/rss',
      dateAdded: 1501778721764,
    },
  },
};

const data = {
  '57cd1a69-5fab-48f7-a9bf-8a38b31612fd': {
    items: [
      {
        title:
          'Government reviews Oxfam relationship over Haiti prostitute claims',
        link: 'http://www.bbc.co.uk/news/uk-43013669',
        pubDate: 'Sat, 10 Feb 2018 09:33:06 GMT',
        content:
          'Claims Oxfam workers used prostitutes in quake-hit Haiti are described as an "appalling abuse of vulnerable people".',
        contentSnippet:
          'Claims Oxfam workers used prostitutes in quake-hit Haiti are described as an "appalling abuse of vulnerable people".',
        guid: 'http://www.bbc.co.uk/news/uk-43013669',
        isoDate: '2018-02-10T09:33:06.000Z',
      },
      {
        title:
          'Syria war: Israeli fighter jet crashes under Syria fire, military says',
        link: 'http://www.bbc.co.uk/news/world-middle-east-43014081',
        pubDate: 'Sat, 10 Feb 2018 09:49:46 GMT',
        content:
          'Israel responds with a new wave of attacks on Iranian targets in Syria after the loss of its plane.',
        contentSnippet:
          'Israel responds with a new wave of attacks on Iranian targets in Syria after the loss of its plane.',
        guid: 'http://www.bbc.co.uk/news/world-middle-east-43014081',
        isoDate: '2018-02-10T09:49:46.000Z',
      },
      {
        title: 'The children keeping their local care home young and fun',
        link: 'http://www.bbc.co.uk/news/stories-43006631',
        pubDate: 'Sat, 10 Feb 2018 00:11:06 GMT',
        content:
          'Babies and toddlers are bringing singing and music into their local care home in north-east London.',
        contentSnippet:
          'Babies and toddlers are bringing singing and music into their local care home in north-east London.',
        guid: 'http://www.bbc.co.uk/news/stories-43006631',
        isoDate: '2018-02-10T00:11:06.000Z',
      },
      {
        title:
          "Winter Olympics: Sweden's Charlotte Kalla wins first gold medal of Pyeongchang 2018",
        link: 'http://www.bbc.co.uk/sport/winter-olympics/42961194',
        pubDate: 'Sat, 10 Feb 2018 09:54:30 GMT',
        content:
          "Sweden's Charlotte Kalla wins the women's skiathlon to secure the first gold medal of Pyeongchang 2018.",
        contentSnippet:
          "Sweden's Charlotte Kalla wins the women's skiathlon to secure the first gold medal of Pyeongchang 2018.",
        guid: 'http://www.bbc.co.uk/sport/winter-olympics/42961194',
        isoDate: '2018-02-10T09:54:30.000Z',
      },
      {
        title: 'Girl, 11, stabbed to death in Wolverhampton house attack',
        link: 'http://www.bbc.co.uk/news/uk-england-birmingham-43005280',
        pubDate: 'Fri, 09 Feb 2018 18:53:22 GMT',
        content:
          'A relative was arrested on suspicion of murdering Jasmine Forrester who was stabbed several times.',
        contentSnippet:
          'A relative was arrested on suspicion of murdering Jasmine Forrester who was stabbed several times.',
        guid: 'http://www.bbc.co.uk/news/uk-england-birmingham-43005280',
        isoDate: '2018-02-09T18:53:22.000Z',
      },
      {
        title: "Islamic State 'Beatles' duo 'should be tried at The Hague'",
        link: 'http://www.bbc.co.uk/news/uk-43014215',
        pubDate: 'Sat, 10 Feb 2018 08:21:15 GMT',
        content:
          'The fighters, part of the IS "Beatles", should not be sent to Guantanamo Bay, a government minister says.',
        contentSnippet:
          'The fighters, part of the IS "Beatles", should not be sent to Guantanamo Bay, a government minister says.',
        guid: 'http://www.bbc.co.uk/news/uk-43014215',
        isoDate: '2018-02-10T08:21:15.000Z',
      },
      {
        title:
          'Winter Olympics 2018: North Korea invites South president to Pyongyang',
        link: 'http://www.bbc.co.uk/news/world-asia-43014269',
        pubDate: 'Sat, 10 Feb 2018 10:23:28 GMT',
        content:
          "Kim Jong-un's sister, Kim Yo-jong, delivered a handwritten note to the South Korean president.",
        contentSnippet:
          "Kim Jong-un's sister, Kim Yo-jong, delivered a handwritten note to the South Korean president.",
        guid: 'http://www.bbc.co.uk/news/world-asia-43014269',
        isoDate: '2018-02-10T10:23:28.000Z',
      },
      {
        title:
          'David Sorensen becomes second Trump aide to quit over abuse claims',
        link: 'http://www.bbc.co.uk/news/world-us-canada-43012426',
        pubDate: 'Sat, 10 Feb 2018 05:30:36 GMT',
        content:
          'David Sorensen denies allegations of domestic abuse but follows another official in resigning.',
        contentSnippet:
          'David Sorensen denies allegations of domestic abuse but follows another official in resigning.',
        guid: 'http://www.bbc.co.uk/news/world-us-canada-43012426',
        isoDate: '2018-02-10T05:30:36.000Z',
      },
      {
        title: 'Ex-Celtic & Man Utd player Miller dies at 36',
        link: 'http://www.bbc.co.uk/sport/football/43011780',
        pubDate: 'Sat, 10 Feb 2018 08:39:22 GMT',
        content:
          'Former Celtic, Manchester United and Republic of Ireland midfielder Liam Miller dies at the age of 36.',
        contentSnippet:
          'Former Celtic, Manchester United and Republic of Ireland midfielder Liam Miller dies at the age of 36.',
        guid: 'http://www.bbc.co.uk/sport/football/43011780',
        isoDate: '2018-02-10T08:39:22.000Z',
      },
      {
        title: 'Does Millom have the toughest park run in the UK?',
        link: 'http://www.bbc.co.uk/news/uk-43007376',
        pubDate: 'Sat, 10 Feb 2018 00:59:53 GMT',
        content:
          'Jordan Dunbar went to Millom in Cumbria to brave the extreme conditions.',
        contentSnippet:
          'Jordan Dunbar went to Millom in Cumbria to brave the extreme conditions.',
        guid: 'http://www.bbc.co.uk/news/uk-43007376',
        isoDate: '2018-02-10T00:59:53.000Z',
      },
      {
        title: "The papers: IS fighters 'should face trial' and corgi comeback",
        link: 'http://www.bbc.co.uk/news/blogs-the-papers-43012546',
        pubDate: 'Sat, 10 Feb 2018 06:43:45 GMT',
        content:
          "Saturday's front pages report on a call for two captured British IS fighters to go on trial and the Queen's preferred dog growing in popularity.",
        contentSnippet:
          "Saturday's front pages report on a call for two captured British IS fighters to go on trial and the Queen's preferred dog growing in popularity.",
        guid: 'http://www.bbc.co.uk/news/blogs-the-papers-43012546',
        isoDate: '2018-02-10T06:43:45.000Z',
      },
      {
        title:
          'The North and South Korean gold medal ping pong pals separated forever',
        link: 'http://www.bbc.co.uk/news/world-asia-42999448',
        pubDate: 'Sat, 10 Feb 2018 00:24:02 GMT',
        content:
          "When North and South Korea's ping pong stars joined forces they became firm friends, but it didn't last.",
        contentSnippet:
          "When North and South Korea's ping pong stars joined forces they became firm friends, but it didn't last.",
        guid: 'http://www.bbc.co.uk/news/world-asia-42999448',
        isoDate: '2018-02-10T00:24:02.000Z',
      },
      {
        title: 'Cheddar Man and other stories you may have missed',
        link: 'http://www.bbc.co.uk/news/world-43007211',
        pubDate: 'Sat, 10 Feb 2018 07:56:31 GMT',
        content:
          'Cheddar Man, the first woman to light up Bollywood and badminton in space.',
        contentSnippet:
          'Cheddar Man, the first woman to light up Bollywood and badminton in space.',
        guid: 'http://www.bbc.co.uk/news/world-43007211',
        isoDate: '2018-02-10T07:56:31.000Z',
      },
      {
        title: "Will Smith's Instagram game is stronger than most",
        link: 'http://www.bbc.co.uk/news/newsbeat-42979598',
        pubDate: 'Sat, 10 Feb 2018 00:33:30 GMT',
        content:
          "Will Smith hasn't been on Instagram for long but his posts are definitely keeping people entertained.",
        contentSnippet:
          "Will Smith hasn't been on Instagram for long but his posts are definitely keeping people entertained.",
        guid: 'http://www.bbc.co.uk/news/newsbeat-42979598',
        isoDate: '2018-02-10T00:33:30.000Z',
      },
      {
        title: "Hualien earthquake: 'I've lost my home of 20 years'",
        link: 'http://www.bbc.co.uk/news/world-asia-43004930',
        pubDate: 'Fri, 09 Feb 2018 11:31:04 GMT',
        content:
          'A survivor of the Hualien earthquake returns to his former home.',
        contentSnippet:
          'A survivor of the Hualien earthquake returns to his former home.',
        guid: 'http://www.bbc.co.uk/news/world-asia-43004930',
        isoDate: '2018-02-09T11:31:04.000Z',
      },
      {
        title: 'The Truth and Reconciliation challenge',
        link: 'http://www.bbc.co.uk/news/stories-42993999',
        pubDate: 'Sat, 10 Feb 2018 00:32:20 GMT',
        content:
          'After Apartheid, South Africans had to try to confront their brutal past without endangering their future.',
        contentSnippet:
          'After Apartheid, South Africans had to try to confront their brutal past without endangering their future.',
        guid: 'http://www.bbc.co.uk/news/stories-42993999',
        isoDate: '2018-02-10T00:32:20.000Z',
      },
      {
        title: 'Mum explains why she kept teen pregnancy secret',
        link: 'http://www.bbc.co.uk/news/health-43008498',
        pubDate: 'Fri, 09 Feb 2018 15:08:04 GMT',
        content:
          'Lucy Sherwood explains why she kept her pregnancy secret at the age of 15.',
        contentSnippet:
          'Lucy Sherwood explains why she kept her pregnancy secret at the age of 15.',
        guid: 'http://www.bbc.co.uk/news/health-43008498',
        isoDate: '2018-02-09T15:08:04.000Z',
      },
      {
        title: 'Bear cubs found in cardboard box in Moscow',
        link: 'http://www.bbc.co.uk/news/world-europe-43010351',
        pubDate: 'Fri, 09 Feb 2018 22:03:42 GMT',
        content:
          "A charity will look after them until they're strong enough to be released.",
        contentSnippet:
          "A charity will look after them until they're strong enough to be released.",
        guid: 'http://www.bbc.co.uk/news/world-europe-43010351',
        isoDate: '2018-02-09T22:03:42.000Z',
      },
      {
        title: 'French Muslim singer quits TV show amid row over online posts',
        link: 'http://www.bbc.co.uk/news/world-europe-43002832',
        pubDate: 'Fri, 09 Feb 2018 12:44:32 GMT',
        content:
          'The Voice sensation was criticised over remarks she posted in 2016 about the Nice lorry attack.',
        contentSnippet:
          'The Voice sensation was criticised over remarks she posted in 2016 about the Nice lorry attack.',
        guid: 'http://www.bbc.co.uk/news/world-europe-43002832',
        isoDate: '2018-02-09T12:44:32.000Z',
      },
      {
        title: 'BBC Television Centre reopens after five-year revamp',
        link: 'http://www.bbc.co.uk/news/uk-england-london-43011984',
        pubDate: 'Fri, 09 Feb 2018 20:45:49 GMT',
        content:
          'The BBC Television Centre in west London reopens as a housing and leisure development.',
        contentSnippet:
          'The BBC Television Centre in west London reopens as a housing and leisure development.',
        guid: 'http://www.bbc.co.uk/news/uk-england-london-43011984',
        isoDate: '2018-02-09T20:45:49.000Z',
      },
      {
        title: "Numbers stations: The 'spy radio' that anyone can hear",
        link: 'http://www.bbc.co.uk/news/world-42819704',
        pubDate: 'Sat, 10 Feb 2018 00:25:30 GMT',
        content:
          'What role does rock band Dire Straits play in international espionage?',
        contentSnippet:
          'What role does rock band Dire Straits play in international espionage?',
        guid: 'http://www.bbc.co.uk/news/world-42819704',
        isoDate: '2018-02-10T00:25:30.000Z',
      },
      {
        title: "Bolivia's lonely frog: Scientists race to find mate for Romeo",
        link: 'http://www.bbc.co.uk/news/world-latin-america-43004367',
        pubDate: 'Fri, 09 Feb 2018 17:25:20 GMT',
        content:
          'Romeo, a 10-year-old Sehuencas water frog, has been given a dating profile as part of the search.',
        contentSnippet:
          'Romeo, a 10-year-old Sehuencas water frog, has been given a dating profile as part of the search.',
        guid: 'http://www.bbc.co.uk/news/world-latin-america-43004367',
        isoDate: '2018-02-09T17:25:20.000Z',
      },
      {
        title: 'BBC News Channel',
        link: 'http://www.bbc.co.uk/news/10318089',
        pubDate: 'Mon, 22 Jan 2018 07:22:00 GMT',
        content: 'BBC coverage of latest developments',
        contentSnippet: 'BBC coverage of latest developments',
        guid: 'http://www.bbc.co.uk/news/10318089',
        isoDate: '2018-01-22T07:22:00.000Z',
      },
      {
        title: 'Elon Musk: The man who sent his sports car into space',
        link: 'http://www.bbc.co.uk/news/science-environment-42992143',
        pubDate: 'Sat, 10 Feb 2018 00:38:09 GMT',
        content:
          "Elon Musk just launched the world's most powerful rocket. It's only a fraction of what he's up to.",
        contentSnippet:
          "Elon Musk just launched the world's most powerful rocket. It's only a fraction of what he's up to.",
        guid: 'http://www.bbc.co.uk/news/science-environment-42992143',
        isoDate: '2018-02-10T00:38:09.000Z',
      },
      {
        title: 'Is social media causing childhood depression?',
        link: 'http://www.bbc.co.uk/news/technology-42705881',
        pubDate: 'Sat, 10 Feb 2018 00:16:57 GMT',
        content:
          'Do children spend too much time online and does social media use make them anxious and unhappy?',
        contentSnippet:
          'Do children spend too much time online and does social media use make them anxious and unhappy?',
        guid: 'http://www.bbc.co.uk/news/technology-42705881',
        isoDate: '2018-02-10T00:16:57.000Z',
      },
      {
        title: 'Little girl collects 207 love letters for sick Granny',
        link: 'http://www.bbc.co.uk/news/uk-42977634',
        pubDate: 'Sat, 10 Feb 2018 00:41:48 GMT',
        content:
          'When Clarissa asked people to send love letters to her sick Granny, she collected more than 160 in one week.',
        contentSnippet:
          'When Clarissa asked people to send love letters to her sick Granny, she collected more than 160 in one week.',
        guid: 'http://www.bbc.co.uk/news/uk-42977634',
        isoDate: '2018-02-10T00:41:48.000Z',
      },
      {
        title:
          "New York Fashion Week: How Philipp Plein became fashion's bad boy",
        link: 'http://www.bbc.co.uk/news/entertainment-arts-42895293',
        pubDate: 'Sat, 10 Feb 2018 00:43:00 GMT',
        content:
          'The enfant terrible of the fashion industry speaks to the BBC about pushing the boundaries.',
        contentSnippet:
          'The enfant terrible of the fashion industry speaks to the BBC about pushing the boundaries.',
        guid: 'http://www.bbc.co.uk/news/entertainment-arts-42895293',
        isoDate: '2018-02-10T00:43:00.000Z',
      },
      {
        title: 'Benjamin Lay: The Quaker dwarf who fought slavery',
        link: 'http://www.bbc.co.uk/news/uk-england-essex-42640782',
        pubDate: 'Sat, 10 Feb 2018 00:01:18 GMT',
        content:
          'The remarkable life of Benjamin Lay: Quaker, abolitionist, feminist and vegetarian - and 4ft tall.',
        contentSnippet:
          'The remarkable life of Benjamin Lay: Quaker, abolitionist, feminist and vegetarian - and 4ft tall.',
        guid: 'http://www.bbc.co.uk/news/uk-england-essex-42640782',
        isoDate: '2018-02-10T00:01:18.000Z',
      },
      {
        title: 'Are these the worst examples of business jargon?',
        link: 'http://www.bbc.co.uk/news/business-42891915',
        pubDate: 'Fri, 09 Feb 2018 21:55:48 GMT',
        content:
          'BBC readers share their worst examples of business jargon following our piece on Davos language.',
        contentSnippet:
          'BBC readers share their worst examples of business jargon following our piece on Davos language.',
        guid: 'http://www.bbc.co.uk/news/business-42891915',
        isoDate: '2018-02-09T21:55:48.000Z',
      },
      {
        title: '100 Women: I want to break the stigma of painful sex',
        link: 'http://www.bbc.co.uk/news/world-42962348',
        pubDate: 'Fri, 09 Feb 2018 00:14:07 GMT',
        content:
          "One woman's story of a decade of wrongly diagnosed sexual pain has inspired a play - and with it, the hope that other women with sexual dysfunction can be helped.",
        contentSnippet:
          "One woman's story of a decade of wrongly diagnosed sexual pain has inspired a play - and with it, the hope that other women with sexual dysfunction can be helped.",
        guid: 'http://www.bbc.co.uk/news/world-42962348',
        isoDate: '2018-02-09T00:14:07.000Z',
      },
      {
        title: 'The clues right-wing terrorists give away',
        link: 'http://www.bbc.co.uk/news/uk-42916391',
        pubDate: 'Fri, 09 Feb 2018 01:53:13 GMT',
        content:
          'Those planning to carry out attacks are less secretive than might be expected.',
        contentSnippet:
          'Those planning to carry out attacks are less secretive than might be expected.',
        guid: 'http://www.bbc.co.uk/news/uk-42916391',
        isoDate: '2018-02-09T01:53:13.000Z',
      },
      {
        title: 'Dippy the diplodocus starts UK tour in Dorchester',
        link: 'http://www.bbc.co.uk/news/uk-england-dorset-42993145',
        pubDate: 'Fri, 09 Feb 2018 00:20:34 GMT',
        content:
          'The 70ft-long (21m) dinosaur replica only just squeezed into its new home in Dorset.',
        contentSnippet:
          'The 70ft-long (21m) dinosaur replica only just squeezed into its new home in Dorset.',
        guid: 'http://www.bbc.co.uk/news/uk-england-dorset-42993145',
        isoDate: '2018-02-09T00:20:34.000Z',
      },
      {
        title: 'James Bay comes back - with a twist',
        link: 'http://www.bbc.co.uk/news/entertainment-arts-42987153',
        pubDate: 'Fri, 09 Feb 2018 01:07:14 GMT',
        content:
          "It's not just the hat and the hair that have changed: James Bay's new music is totally unexpected.",
        contentSnippet:
          "It's not just the hat and the hair that have changed: James Bay's new music is totally unexpected.",
        guid: 'http://www.bbc.co.uk/news/entertainment-arts-42987153',
        isoDate: '2018-02-09T01:07:14.000Z',
      },
      {
        title:
          'Winter Olympics 2018: The things that caught our eye in slopestyle',
        link: 'http://www.bbc.co.uk/sport/winter-olympics/43015880',
        pubDate: 'Sat, 10 Feb 2018 10:11:44 GMT',
        content:
          "'Handy' Boarders, Bloody Draculas and old-school jumpers - watch things that caught our eye in the slopestyle at Pyeongchang 2018.",
        contentSnippet:
          "'Handy' Boarders, Bloody Draculas and old-school jumpers - watch things that caught our eye in the slopestyle at Pyeongchang 2018.",
        guid: 'http://www.bbc.co.uk/sport/winter-olympics/43015880',
        isoDate: '2018-02-10T10:11:44.000Z',
      },
      {
        title: "Six Nations 2018: 'Wales have a chance against England'",
        link: 'http://www.bbc.co.uk/sport/rugby-union/43005200',
        pubDate: 'Fri, 09 Feb 2018 18:20:27 GMT',
        content:
          "Wales will travel to England on Saturday now confident they can win following last week's demolition of Scotland, says ex-Wales captain Martyn Williams.",
        contentSnippet:
          "Wales will travel to England on Saturday now confident they can win following last week's demolition of Scotland, says ex-Wales captain Martyn Williams.",
        guid: 'http://www.bbc.co.uk/sport/rugby-union/43005200',
        isoDate: '2018-02-09T18:20:27.000Z',
      },
      {
        title:
          "Winter Olympics 2018: South Korea's Lee Ki-Jeong slips on curling stone",
        link: 'http://www.bbc.co.uk/sport/winter-olympics/43015313',
        pubDate: 'Sat, 10 Feb 2018 08:36:51 GMT',
        content:
          "South Korea's Lee Ki-Jeong suffers a nasty fall, slipping on a curling stone during his mixed doubles match with Norway.",
        contentSnippet:
          "South Korea's Lee Ki-Jeong suffers a nasty fall, slipping on a curling stone during his mixed doubles match with Norway.",
        guid: 'http://www.bbc.co.uk/sport/winter-olympics/43015313',
        isoDate: '2018-02-10T08:36:51.000Z',
      },
      {
        title:
          'Winter Olympics: Snowboarder Jamie Nicholls fails to make slopestyle final',
        link: 'http://www.bbc.co.uk/sport/winter-olympics/43013896',
        pubDate: 'Sat, 10 Feb 2018 08:26:46 GMT',
        content:
          'British snowboarder Jamie Nicholls fails to make the slopestyle final as the Winter Olympics begins in earnest in Korea.',
        contentSnippet:
          'British snowboarder Jamie Nicholls fails to make the slopestyle final as the Winter Olympics begins in earnest in Korea.',
        guid: 'http://www.bbc.co.uk/sport/winter-olympics/43013896',
        isoDate: '2018-02-10T08:26:46.000Z',
      },
      {
        title:
          'Manchester City: Premier League leaders want PGMOL refereeing meeting',
        link: 'http://www.bbc.co.uk/sport/football/43010230',
        pubDate: 'Fri, 09 Feb 2018 22:35:17 GMT',
        content:
          'Manchester City ask to meet the body responsible for Premier League referees to discuss their concern at tackles being made against them.',
        contentSnippet:
          'Manchester City ask to meet the body responsible for Premier League referees to discuss their concern at tackles being made against them.',
        guid: 'http://www.bbc.co.uk/sport/football/43010230',
        isoDate: '2018-02-09T22:35:17.000Z',
      },
      {
        title: 'Day-by-day guide to events',
        link: 'http://www.bbc.co.uk/sport/winter-olympics/42878234',
        pubDate: 'Sat, 10 Feb 2018 08:01:09 GMT',
        content:
          'The Britons, the medals, the highlights - everything you need to know about every day of the Winter Olympics in Pyeongchang, South Korea.',
        contentSnippet:
          'The Britons, the medals, the highlights - everything you need to know about every day of the Winter Olympics in Pyeongchang, South Korea.',
        guid: 'http://www.bbc.co.uk/sport/winter-olympics/42878234',
        isoDate: '2018-02-10T08:01:09.000Z',
      },
      {
        title: 'Cold? What cold? Tongan makes impressive entrance ',
        link: 'http://www.bbc.co.uk/sport/winter-olympics/43002327',
        pubDate: 'Fri, 09 Feb 2018 14:59:35 GMT',
        content:
          'Athletes from the Bermuda and Tonga Olympic teams embrace the cold weather in at the Winter Olympics 2018 opening ceremony in Pyeongchang.',
        contentSnippet:
          'Athletes from the Bermuda and Tonga Olympic teams embrace the cold weather in at the Winter Olympics 2018 opening ceremony in Pyeongchang.',
        guid: 'http://www.bbc.co.uk/sport/winter-olympics/43002327',
        isoDate: '2018-02-09T14:59:35.000Z',
      },
      {
        title: 'Winter Olympics: Yuri On Ice performed by Japanese skaters',
        link: 'http://www.bbc.co.uk/news/blogs-trending-43003630',
        pubDate: 'Fri, 09 Feb 2018 13:45:36 GMT',
        content:
          'Pyeongchang 2018 sees an unusual music selection as figure skaters perform to a hit cartoon theme tune.',
        contentSnippet:
          'Pyeongchang 2018 sees an unusual music selection as figure skaters perform to a hit cartoon theme tune.',
        guid: 'http://www.bbc.co.uk/news/blogs-trending-43003630',
        isoDate: '2018-02-09T13:45:36.000Z',
      },
      {
        title:
          "Winter Olympics: Shani Davis says Team USA have been 'dishonourable' with coin toss",
        link: 'http://www.bbc.co.uk/sport/winter-olympics/42992814',
        pubDate: 'Fri, 09 Feb 2018 08:13:50 GMT',
        content:
          'Team USA have acted "dishonourably" by tossing a coin to decide who would be their Winter Olympics flag bearer, a double gold medallist has claimed.',
        contentSnippet:
          'Team USA have acted "dishonourably" by tossing a coin to decide who would be their Winter Olympics flag bearer, a double gold medallist has claimed.',
        guid: 'http://www.bbc.co.uk/sport/winter-olympics/42992814',
        isoDate: '2018-02-09T08:13:50.000Z',
      },
      {
        title:
          "Winter Olympics 2018: Norway's Vinjar Slatten hops back up mountain to retrieve lost ski",
        link: 'http://www.bbc.co.uk/sport/winter-olympics/43001830',
        pubDate: 'Fri, 09 Feb 2018 08:51:56 GMT',
        content:
          "Norwegian skier Vinjar Slatten is forced to hop back up the mountain to retrieve one of his skis which had fallen off during his run in the opening qualifying round of the men's moguls.",
        contentSnippet:
          "Norwegian skier Vinjar Slatten is forced to hop back up the mountain to retrieve one of his skis which had fallen off during his run in the opening qualifying round of the men's moguls.",
        guid: 'http://www.bbc.co.uk/sport/winter-olympics/43001830',
        isoDate: '2018-02-09T08:51:56.000Z',
      },
      {
        title: "Winter Olympics: Eight reasons you'll end up watching",
        link: 'http://www.bbc.co.uk/news/uk-42943138',
        pubDate: 'Thu, 08 Feb 2018 11:41:18 GMT',
        content:
          "From curling to cross-country skiing and guns, there's something for everyone in the Winter Olympics.",
        contentSnippet:
          "From curling to cross-country skiing and guns, there's something for everyone in the Winter Olympics.",
        guid: 'http://www.bbc.co.uk/news/uk-42943138',
        isoDate: '2018-02-08T11:41:18.000Z',
      },
      {
        title: 'Will it be too cold for sport?',
        link: 'http://www.bbc.co.uk/sport/winter-olympics/42885124',
        pubDate: 'Wed, 07 Feb 2018 17:30:32 GMT',
        content:
          'With windchill dropping temperatures to -25C, the 2018 Winter Olympics could be the coldest on record. But can it actually get too cold for winter sports?',
        contentSnippet:
          'With windchill dropping temperatures to -25C, the 2018 Winter Olympics could be the coldest on record. But can it actually get too cold for winter sports?',
        guid: 'http://www.bbc.co.uk/sport/winter-olympics/42885124',
        isoDate: '2018-02-07T17:30:32.000Z',
      },
      {
        title: "The Valentine's card 'ripping off' women",
        link:
          'http://www.bbc.co.uk/news/uk-england-stoke-staffordshire-42982713',
        pubDate: 'Wed, 07 Feb 2018 20:17:07 GMT',
        content:
          'The "For My Wife" Valentine card costs £2, while the equivalent for husbands sold for £2.50.',
        contentSnippet:
          'The "For My Wife" Valentine card costs £2, while the equivalent for husbands sold for £2.50.',
        guid:
          'http://www.bbc.co.uk/news/uk-england-stoke-staffordshire-42982713',
        isoDate: '2018-02-07T20:17:07.000Z',
      },
      {
        title: "What's going on inside toddlers' brains?",
        link: 'http://www.bbc.co.uk/news/education-42967788',
        pubDate: 'Thu, 08 Feb 2018 00:39:53 GMT',
        content:
          'Scientists want to find out more about how very young children develop a sense of self.',
        contentSnippet:
          'Scientists want to find out more about how very young children develop a sense of self.',
        guid: 'http://www.bbc.co.uk/news/education-42967788',
        isoDate: '2018-02-08T00:39:53.000Z',
      },
      {
        title: 'Travelling 2,000 miles to cook for strangers',
        link: 'http://www.bbc.co.uk/news/stories-42911968',
        pubDate: 'Mon, 05 Feb 2018 00:28:33 GMT',
        content:
          'Ghafoor Hussain travels 2,000 miles to cook dinner for migrants on the Greek island of Lesbos.',
        contentSnippet:
          'Ghafoor Hussain travels 2,000 miles to cook dinner for migrants on the Greek island of Lesbos.',
        guid: 'http://www.bbc.co.uk/news/stories-42911968',
        isoDate: '2018-02-05T00:28:33.000Z',
      },
      {
        title: "Meet Digby, the UK's first guide horse",
        link: 'http://www.bbc.co.uk/news/uk-england-lancashire-42954075',
        pubDate: 'Mon, 05 Feb 2018 20:59:48 GMT',
        content:
          'A blind man is set to be the first person in the UK to have an officially recognised guide horse.',
        contentSnippet:
          'A blind man is set to be the first person in the UK to have an officially recognised guide horse.',
        guid: 'http://www.bbc.co.uk/news/uk-england-lancashire-42954075',
        isoDate: '2018-02-05T20:59:48.000Z',
      },
      {
        title: 'Are filters the new facelifts?',
        link: 'http://www.bbc.co.uk/news/uk-42978532',
        pubDate: 'Wed, 07 Feb 2018 16:17:36 GMT',
        content:
          "Photo filters mean many women 'no longer see the need' for surgery, cosmetic surgeons claim.",
        contentSnippet:
          "Photo filters mean many women 'no longer see the need' for surgery, cosmetic surgeons claim.",
        guid: 'http://www.bbc.co.uk/news/uk-42978532',
        isoDate: '2018-02-07T16:17:36.000Z',
      },
      {
        title: 'Have they found a cure for our cancer?',
        link: 'http://www.bbc.co.uk/news/stories-42920045',
        pubDate: 'Tue, 06 Feb 2018 01:20:48 GMT',
        content:
          'When Simon Cox was first diagnosed with Chronic Lymphocytic Leukaemia (CLL), he feared the worst. But now there are promising developments.',
        contentSnippet:
          'When Simon Cox was first diagnosed with Chronic Lymphocytic Leukaemia (CLL), he feared the worst. But now there are promising developments.',
        guid: 'http://www.bbc.co.uk/news/stories-42920045',
        isoDate: '2018-02-06T01:20:48.000Z',
      },
      {
        title: 'Buttery Ken and other cats named by Bob Mortimer',
        link: 'http://www.bbc.co.uk/news/uk-england-sussex-42936519',
        pubDate: 'Sun, 04 Feb 2018 13:35:29 GMT',
        content:
          'Bob Mortimer is raising funds for a Sussex cat charity by coming up with surreal feline names.',
        contentSnippet:
          'Bob Mortimer is raising funds for a Sussex cat charity by coming up with surreal feline names.',
        guid: 'http://www.bbc.co.uk/news/uk-england-sussex-42936519',
        isoDate: '2018-02-04T13:35:29.000Z',
      },
    ],
    markedAsRead: [],
    bookMarked: [],
    unreadCount: 52,
    bookmarked: [],
  },
  '62f6b37a-eeed-4289-9533-194e510d94ab': {
    items: [
      {
        title: 'Reverse Engineering a MMORPG Bot to Find Vulnerabilities',
        link:
          'https://www.reddit.com/r/programming/comments/7wivfv/reverse_engineering_a_mmorpg_bot_to_find/',
        pubDate: '2018-02-10T03:04:43.000Z',
        author: '/u/throwaway_the_fourth',
        content:
          '&#32; submitted by &#32; <a href="https://www.reddit.com/user/throwaway_the_fourth"> /u/throwaway_the_fourth </a> &#32; to &#32; <a href="https://www.reddit.com/r/programming/"> r/programming </a> <br/> <span><a href="https://www.youtube.com/watch?v=irhcfHBkfe0">[link]</a></span> &#32; <span><a href="https://www.reddit.com/r/programming/comments/7wivfv/reverse_engineering_a_mmorpg_bot_to_find/">[comments]</a></span>',
        contentSnippet:
          'submitted by    /u/throwaway_the_fourth    to    r/programming   [link]   [comments]',
        id: 't3_7wivfv',
      },
      {
        title: 'Flux: The €85,000 Failed Modular Multi-Messaging Client',
        link:
          'https://www.reddit.com/r/webdev/comments/7web0v/flux_the_85000_failed_modular_multimessaging/',
        pubDate: '2018-02-09T15:50:39.000Z',
        author: '/u/richclominson',
        content:
          '<!-- SC_OFF --><div class="md"><p>Hey <a href="/r/webdev">/r/webdev</a>! I am Rich Clominson, co-founder of <a href="https://failory.com">Failory</a>, a website where we weekly interview failed startup owners.</p> <p>I have just published a new interview with Jan, CTO of Flux, a failed modular multi-messaging client. His startup raised a small angel round of 70K € and invested another 15K €. A combination of many issues, among them over engineering, led to their failure.</p> <p>&nbsp;</p> <p>Read now the story of &quot;The €85,000 Failed Modular Multi-Messaging Client&quot;!</p> <hr/> <p><strong>Hi Jan! What&#39;s your background, and what are you currently working on?</strong></p> <p>Hi! I am the founder and CTO of Flux, which was a modular multi-messaging client. I studied a bit of physics and philosophy before, but I am mainly a self-taught full stack developer. Right now, I am in the middle of open sourcing all software that we built and using it as a basis for consulting and freelancing for companies that need a messaging platform. I am really grateful to all our investors that allowed me to do this and I am confident that somehow something new and bigger will evolve out of this unique situation.</p> <p>&nbsp;</p> <p><strong>What was Flux about? How did you come up with the idea?</strong></p> <p>The main idea is quite old and evolved out of discussions with friends at university. The main pain point we had at that time was that Facebook just entered the German market and we experienced firsthand what it means to have all your messages and friends stuck in the data silo of studiVZ, which was the German copycat that was used before Facebook. The basis of all product iterations was always that we tried to build something that lets you own your data but still take part in mainstream social media with normal non-nerdy friends. First prototypes were before diaspora but similar federated social networks. We quickly learned that support for all data types (images, events etc.) was too much, so we focused on the most important one: messages. The second learning that led to the product idea was that replacing the status quo was impossible so we focused on building a professional messaging product that used existing messaging channels like Facebook and email.</p> <p>&nbsp;</p> <p><strong>How did you build Flux?</strong></p> <p>We did never enter a growth phase and failed already in private beta. But we had a few thousands of users on the waiting list. We mainly got them through giving talks and public pitches as well as exposure from our accelerator StartupBootcampBerlin.</p> <p>&nbsp;</p> <p><strong>Why did Flux fail?</strong></p> <p>A combination of many issues, probably any one of them would have been enough for a failure, so I am still somewhat proud of what we achieved. This is my overview in no specific order:</p> <ul> <li><p><strong>Looking for investment too early/ at all:</strong> The product we tried to build was just not that interesting to investors, I see why with my knowledge now, but at the time we thought it was just about not trying hard enough. In retrospect, it was stupid to look for bigger investors at all, at least in Berlin. Had we just tried to sell consulting, services and custom solutions and building the product along the way instead of the wasted VC time we would have gotten much further. The wrong impression I had was based on reading mainly US-based blogs as well as listening too much to people from the Berlin startup world that gave advice on how they thought or wished things would be instead of the actual experience of success in the current world.</p></li> <li><p><strong>Bad cofounder fit:</strong> Me and my business cofounder were extremely opposite characters and at times there was a great synergy but more and more often this lead to a lot of friction. Also, co-founders should probably know each other for more than a year before, but we just met for the venture. Lastly, I highly overestimated the available funding in Berlin for this extremely early stage and kind of product and so assumed that a business person who is good with people had more to do than was the case. I naively thought he could just go and sell a prototype to a VC and then build up the office and hire the people as well as do finance and contracts when in reality all we needed was people to work on the product until we could show traction.</p></li> <li><p><strong>Over-engineering:</strong> I am responsible for over-engineering a few aspects of flux. I changed a lot since then, to not make the same mistakes again. But reading about extreme programming and MVP is one thing but I don’t think I was able to really “feel” what it means without having gone through the situation. The following are the main over-engineering mistakes:</p> <ul> <li><strong>Overestimating the convergence/ availability of REST APIs:</strong> I thought all companies will publish a REST API with converging concepts for paging, endpoint structure, authentication, references and pretty open usage restrictions. Therefore, we built a DSL for connecting and consuming REST endpoints. In Erlang. We could just have built the first connectors manually and then at a much later stage still develop a DSL and automate the process if it would have made sense then. This was also a big problem because investors asked us about ‘secret sauce’ all the time, so the technology for connector building seemed really important to us. When in reality the problem was we wanted to impress investors in the first place.</li> <li><strong>Over/Under engineering Client Model:</strong> I did not know about observables and Rx, maybe they did not even exist then, I’m not sure. The point is the same however: the view model for flux became very complex and depended on multiple asynchronous processes and a locking system to generate it consistently grew hard to manage. Today I would not have half the headaches from then because of RxJS or similar tools.</li> <li><strong>Too early adoption of micro-services with wrong service boundaries:</strong> I tried to use whatever developer resources I could get my hands on and allowed them to use languages they thought were great as long as I also found them interesting and fitting. This lead to a mixture of Erlang, Go, Ruby and JavaScript that became extremely hard to support especially as developers with different knowledge joined and left. In retrospect, I should just have completely bought into the node.js wave, but at the time node.js was nowhere near the solid platform it is today and as we over-estimated the short-term funding and growth possibilities: we just thought that investing in reliable and scalable services would pay of sooner than it would have and that the language zoo would be no problem as the team grew bigger.</li> <li><strong>Technical idealism at the wrong place:</strong> I am and always was a CouchDB fanboy. But at the time the concept of CouchApp was also on the horizon and I was so much into the vision of distributed, independent and self-contained web applications, that I tried to make the whole architecture work in such a future. This future never happened and I could have spent a lot of the time working on actual product features with immediate impact.</li> </ul></li> <li><p><strong>Bad luck on timing:</strong> When we started, Twitter’s API was still hugely unregulated and Facebook and Google had an XMPP API for messaging and saw it mainly as a relatively unimportant extra for their main products. But then messaging was the new big thing and they changed to a more closed and even more walled garden strategy. This was before business messaging accounts were on their focus, so we did not have the old API but the new APIs (e.g. Facebooks pages messaging) were not available yet. Needless to say, this was a small disaster for a startup with very limited resources. Luckily, we supported emails as a channel from day one so we could focus on email use cases. Maybe email support would have been on the over-engineering list too, if it did not allow us to build new iterations in this difficult time. Good email support is a huge pain to build, but once you have it, it’s so powerful, that I do not regret a single sleepless night building it.</p></li> <li><p><strong>Focusing on consumers instead of businesses for too long:</strong> Building a product for consumers instead of businesses requires a very different mindset. After it became clear consumers and prosumers would not be a big enough market it took us too long to start focusing on businesses, mainly due to the different cultures.</p></li> <li><p><strong>What finally killed us:</strong> Contract Negotiations with a big German business When we finally managed to make the switch we were already very low on runtime. It was clear we could just try this time. One of our investors gave us one of their lawyers but the contracts were just an endless rabbit hole. When we finally found a somewhat acceptable basis, the big company had a restructuring and the contact person changed, we had zero runtime left and instead of being able to start the cooperation we had a new contract version in the mail that gave them complete exclusivity on so much of the project that we could never have used the software with a different client. That was the end.</p></li> </ul> <p>&nbsp;</p> <p><strong>Which were your investments? Did you achieve some revenue? Did you lose any money?</strong></p> <p>We raised a small angel round of ~ 70K € and burned through ~ 70K € of private savings for living costs for me and my co-founder. After giving up, just keeping alive the company entity and getting everything to a happy ending cost me another 15K. Our first business deal never happened and we never had revenue, so all this money could be seen as ‘lost’. On the other hand, the learnings and time we had were incredible so for me at least it was totally worth it.</p> <p>&nbsp;</p> <p><strong>What did you learn?</strong></p> <p>In addition to all the learnings from mistakes I already talked about: I learned a lot about my weaknesses and people. Lastly, I hugely improved as a developer, architect, and CTO. This personal development is hard for me to put into words, it’s just too much, and it is hard to tell what is a result of growing up and what is directly connected to the startup experiences. Just so much: I am not naturally good at implanting my vision into other people and also, I am not good at letting go and accepting half-baked solutions with long-term risks when there is not enough time.</p> <p>&nbsp;</p> <p><strong>What&#39;s your advice for someone who is just starting?</strong></p> <p>I don’t want to give advice; the world is full of un- or semi- successful entrepreneurs happily giving advice to anyone and even those who were successful are full of survivorship bias and most advice is bullshit anyways. If someone has a question I am always happy to answer as honest as I possibly can.</p> <p>&nbsp;</p> <p><strong>Which book would you recommend?</strong></p> <p>I think books about entrepreneurship or technology are overrated. I read abstracts about all important concepts and go into slightly more depth for things I find relevant or interesting, but reading or writing a whole book instead of “doing” just feels fundamentally wrong.</p> <p>&nbsp;</p> <p><strong>Where can we go to learn more?</strong></p> <p>I am not publishing much at the moment, but if there is any news, I will most likely post it on <a href="https://twitter.com/JFriedensreich">Twitter</a>.</p> <p>&nbsp;</p> <p>Original interview posted at <a href="https://failory.com/interview/flux">https://failory.com/interview/flux</a></p> </div><!-- SC_ON --> &#32; submitted by &#32; <a href="https://www.reddit.com/user/richclominson"> /u/richclominson </a> &#32; to &#32; <a href="https://www.reddit.com/r/webdev/"> r/webdev </a> <br/> <span><a href="https://www.reddit.com/r/webdev/comments/7web0v/flux_the_85000_failed_modular_multimessaging/">[link]</a></span> &#32; <span><a href="https://www.reddit.com/r/webdev/comments/7web0v/flux_the_85000_failed_modular_multimessaging/">[comments]</a></span>',
        contentSnippet:
          'Hey /r/webdev! I am Rich Clominson, co-founder of Failory, a website where we weekly interview failed startup owners. I have just published a new interview with Jan, CTO of Flux, a failed modular multi-messaging client. His startup raised a small angel round of 70K € and invested another 15K €. A combination of many issues, among them over engineering, led to their failure. &nbsp; Read now the story of "The €85,000 Failed Modular Multi-Messaging Client"!  Hi Jan! What\'s your background, and what are you currently working on? Hi! I am the founder and CTO of Flux, which was a modular multi-messaging client. I studied a bit of physics and philosophy before, but I am mainly a self-taught full stack developer. Right now, I am in the middle of open sourcing all software that we built and using it as a basis for consulting and freelancing for companies that need a messaging platform. I am really grateful to all our investors that allowed me to do this and I am confident that somehow something new and bigger will evolve out of this unique situation. &nbsp; What was Flux about? How did you come up with the idea? The main idea is quite old and evolved out of discussions with friends at university. The main pain point we had at that time was that Facebook just entered the German market and we experienced firsthand what it means to have all your messages and friends stuck in the data silo of studiVZ, which was the German copycat that was used before Facebook. The basis of all product iterations was always that we tried to build something that lets you own your data but still take part in mainstream social media with normal non-nerdy friends. First prototypes were before diaspora but similar federated social networks. We quickly learned that support for all data types (images, events etc.) was too much, so we focused on the most important one: messages. The second learning that led to the product idea was that replacing the status quo was impossible so we focused on building a professional messaging product that used existing messaging channels like Facebook and email. &nbsp; How did you build Flux? We did never enter a growth phase and failed already in private beta. But we had a few thousands of users on the waiting list. We mainly got them through giving talks and public pitches as well as exposure from our accelerator StartupBootcampBerlin. &nbsp; Why did Flux fail? A combination of many issues, probably any one of them would have been enough for a failure, so I am still somewhat proud of what we achieved. This is my overview in no specific order:  Looking for investment too early/ at all: The product we tried to build was just not that interesting to investors, I see why with my knowledge now, but at the time we thought it was just about not trying hard enough. In retrospect, it was stupid to look for bigger investors at all, at least in Berlin. Had we just tried to sell consulting, services and custom solutions and building the product along the way instead of the wasted VC time we would have gotten much further. The wrong impression I had was based on reading mainly US-based blogs as well as listening too much to people from the Berlin startup world that gave advice on how they thought or wished things would be instead of the actual experience of success in the current world. Bad cofounder fit: Me and my business cofounder were extremely opposite characters and at times there was a great synergy but more and more often this lead to a lot of friction. Also, co-founders should probably know each other for more than a year before, but we just met for the venture. Lastly, I highly overestimated the available funding in Berlin for this extremely early stage and kind of product and so assumed that a business person who is good with people had more to do than was the case. I naively thought he could just go and sell a prototype to a VC and then build up the office and hire the people as well as do finance and contracts when in reality all we needed was people to work on the product until we could show traction. Over-engineering: I am responsible for over-engineering a few aspects of flux. I changed a lot since then, to not make the same mistakes again. But reading about extreme programming and MVP is one thing but I don’t think I was able to really “feel” what it means without having gone through the situation. The following are the main over-engineering mistakes:  Overestimating the convergence/ availability of REST APIs: I thought all companies will publish a REST API with converging concepts for paging, endpoint structure, authentication, references and pretty open usage restrictions. Therefore, we built a DSL for connecting and consuming REST endpoints. In Erlang. We could just have built the first connectors manually and then at a much later stage still develop a DSL and automate the process if it would have made sense then. This was also a big problem because investors asked us about ‘secret sauce’ all the time, so the technology for connector building seemed really important to us. When in reality the problem was we wanted to impress investors in the first place. Over/Under engineering Client Model: I did not know about observables and Rx, maybe they did not even exist then, I’m not sure. The point is the same however: the view model for flux became very complex and depended on multiple asynchronous processes and a locking system to generate it consistently grew hard to manage. Today I would not have half the headaches from then because of RxJS or similar tools. Too early adoption of micro-services with wrong service boundaries: I tried to use whatever developer resources I could get my hands on and allowed them to use languages they thought were great as long as I also found them interesting and fitting. This lead to a mixture of Erlang, Go, Ruby and JavaScript that became extremely hard to support especially as developers with different knowledge joined and left. In retrospect, I should just have completely bought into the node.js wave, but at the time node.js was nowhere near the solid platform it is today and as we over-estimated the short-term funding and growth possibilities: we just thought that investing in reliable and scalable services would pay of sooner than it would have and that the language zoo would be no problem as the team grew bigger. Technical idealism at the wrong place: I am and always was a CouchDB fanboy. But at the time the concept of CouchApp was also on the horizon and I was so much into the vision of distributed, independent and self-contained web applications, that I tried to make the whole architecture work in such a future. This future never happened and I could have spent a lot of the time working on actual product features with immediate impact.  Bad luck on timing: When we started, Twitter’s API was still hugely unregulated and Facebook and Google had an XMPP API for messaging and saw it mainly as a relatively unimportant extra for their main products. But then messaging was the new big thing and they changed to a more closed and even more walled garden strategy. This was before business messaging accounts were on their focus, so we did not have the old API but the new APIs (e.g. Facebooks pages messaging) were not available yet. Needless to say, this was a small disaster for a startup with very limited resources. Luckily, we supported emails as a channel from day one so we could focus on email use cases. Maybe email support would have been on the over-engineering list too, if it did not allow us to build new iterations in this difficult time. Good email support is a huge pain to build, but once you have it, it’s so powerful, that I do not regret a single sleepless night building it. Focusing on consumers instead of businesses for too long: Building a product for consumers instead of businesses requires a very different mindset. After it became clear consumers and prosumers would not be a big enough market it took us too long to start focusing on businesses, mainly due to the different cultures. What finally killed us: Contract Negotiations with a big German business When we finally managed to make the switch we were already very low on runtime. It was clear we could just try this time. One of our investors gave us one of their lawyers but the contracts were just an endless rabbit hole. When we finally found a somewhat acceptable basis, the big company had a restructuring and the contact person changed, we had zero runtime left and instead of being able to start the cooperation we had a new contract version in the mail that gave them complete exclusivity on so much of the project that we could never have used the software with a different client. That was the end.  &nbsp; Which were your investments? Did you achieve some revenue? Did you lose any money? We raised a small angel round of ~ 70K € and burned through ~ 70K € of private savings for living costs for me and my co-founder. After giving up, just keeping alive the company entity and getting everything to a happy ending cost me another 15K. Our first business deal never happened and we never had revenue, so all this money could be seen as ‘lost’. On the other hand, the learnings and time we had were incredible so for me at least it was totally worth it. &nbsp; What did you learn? In addition to all the learnings from mistakes I already talked about: I learned a lot about my weaknesses and people. Lastly, I hugely improved as a developer, architect, and CTO. This personal development is hard for me to put into words, it’s just too much, and it is hard to tell what is a result of growing up and what is directly connected to the startup experiences. Just so much: I am not naturally good at implanting my vision into other people and also, I am not good at letting go and accepting half-baked solutions with long-term risks when there is not enough time. &nbsp; What\'s your advice for someone who is just starting? I don’t want to give advice; the world is full of un- or semi- successful entrepreneurs happily giving advice to anyone and even those who were successful are full of survivorship bias and most advice is bullshit anyways. If someone has a question I am always happy to answer as honest as I possibly can. &nbsp; Which book would you recommend? I think books about entrepreneurship or technology are overrated. I read abstracts about all important concepts and go into slightly more depth for things I find relevant or interesting, but reading or writing a whole book instead of “doing” just feels fundamentally wrong. &nbsp; Where can we go to learn more? I am not publishing much at the moment, but if there is any news, I will most likely post it on Twitter. &nbsp; Original interview posted at https://failory.com/interview/flux    submitted by    /u/richclominson    to    r/webdev   [link]   [comments]',
        id: 't3_7web0v',
      },
      {
        title:
          'Created A Tutorial For Advanced JS Techniques [Not An Expert But Love JS - Feedback Appreciated]',
        link:
          'https://www.reddit.com/r/javascript/comments/7wgtzr/created_a_tutorial_for_advanced_js_techniques_not/',
        pubDate: '2018-02-09T21:37:01.000Z',
        author: '/u/jadeallencook',
        content:
          '&#32; submitted by &#32; <a href="https://www.reddit.com/user/jadeallencook"> /u/jadeallencook </a> &#32; to &#32; <a href="https://www.reddit.com/r/javascript/"> r/javascript </a> <br/> <span><a href="https://www.youtube.com/watch?v=NhYMlbKgQzU">[link]</a></span> &#32; <span><a href="https://www.reddit.com/r/javascript/comments/7wgtzr/created_a_tutorial_for_advanced_js_techniques_not/">[comments]</a></span>',
        contentSnippet:
          'submitted by    /u/jadeallencook    to    r/javascript   [link]   [comments]',
        id: 't3_7wgtzr',
      },
      {
        title:
          'An intro to dep: How to manage your Golang project dependencies',
        link:
          'https://www.reddit.com/r/golang/comments/7wgvjv/an_intro_to_dep_how_to_manage_your_golang_project/',
        pubDate: '2018-02-09T21:43:18.000Z',
        author: '/u/superlinux',
        content:
          '&#32; submitted by &#32; <a href="https://www.reddit.com/user/superlinux"> /u/superlinux </a> &#32; to &#32; <a href="https://www.reddit.com/r/golang/"> r/golang </a> <br/> <span><a href="https://medium.freecodecamp.org/an-intro-to-dep-how-to-manage-your-golang-project-dependencies-7b07d84e7ba5">[link]</a></span> &#32; <span><a href="https://www.reddit.com/r/golang/comments/7wgvjv/an_intro_to_dep_how_to_manage_your_golang_project/">[comments]</a></span>',
        contentSnippet:
          'submitted by    /u/superlinux    to    r/golang   [link]   [comments]',
        id: 't3_7wgvjv',
      },
      {
        title:
          'Does anyone have examples of portfolio projects that "got them the job" for their first dev job?',
        link:
          'https://www.reddit.com/r/javascript/comments/7wewil/does_anyone_have_examples_of_portfolio_projects/',
        pubDate: '2018-02-09T17:11:46.000Z',
        author: '/u/Junkyardogg',
        content:
          '<!-- SC_OFF --><div class="md"><p>Specifically looking for stuff that doesn&#39;t use frameworks. Really looking to start making some stuff beyond the basic shit that all the tutorials go over, but I&#39;m having trouble figuring out how to organize my code for projects at that level. So it would be nice to see what other people have done.</p> <p>Edit: Wow! Did not expect this much of a response. Thank you everyone for your input. I appreciate the time you all took to answer. The information about the hiring process has been especially helpful as well. I hope I have the patience to check out all of the links you guys posted before I get too restless and start working on my own!</p> <p>Edit #2: Just wanted to stop back in and say I decided to aim way above my comfort zone for my first real project and I&#39;ve learned more since lunch today than I have in the past month. Diving further into functional programming than I&#39;ve ever dared to go and made more progress on my app than I thought I would on my first day. Thanks again everyone and goodnight!</p> </div><!-- SC_ON --> &#32; submitted by &#32; <a href="https://www.reddit.com/user/Junkyardogg"> /u/Junkyardogg </a> &#32; to &#32; <a href="https://www.reddit.com/r/javascript/"> r/javascript </a> <br/> <span><a href="https://www.reddit.com/r/javascript/comments/7wewil/does_anyone_have_examples_of_portfolio_projects/">[link]</a></span> &#32; <span><a href="https://www.reddit.com/r/javascript/comments/7wewil/does_anyone_have_examples_of_portfolio_projects/">[comments]</a></span>',
        contentSnippet:
          "Specifically looking for stuff that doesn't use frameworks. Really looking to start making some stuff beyond the basic shit that all the tutorials go over, but I'm having trouble figuring out how to organize my code for projects at that level. So it would be nice to see what other people have done. Edit: Wow! Did not expect this much of a response. Thank you everyone for your input. I appreciate the time you all took to answer. The information about the hiring process has been especially helpful as well. I hope I have the patience to check out all of the links you guys posted before I get too restless and start working on my own! Edit #2: Just wanted to stop back in and say I decided to aim way above my comfort zone for my first real project and I've learned more since lunch today than I have in the past month. Diving further into functional programming than I've ever dared to go and made more progress on my app than I thought I would on my first day. Thanks again everyone and goodnight!    submitted by    /u/Junkyardogg    to    r/javascript   [link]   [comments]",
        id: 't3_7wewil',
      },
      {
        title: 'An Overview of JavaScript Testing in 2018',
        link:
          'https://www.reddit.com/r/javascript/comments/7wdbwh/an_overview_of_javascript_testing_in_2018/',
        pubDate: '2018-02-09T13:11:33.000Z',
        author: '/u/vzaidman',
        content:
          '&#32; submitted by &#32; <a href="https://www.reddit.com/user/vzaidman"> /u/vzaidman </a> &#32; to &#32; <a href="https://www.reddit.com/r/javascript/"> r/javascript </a> <br/> <span><a href="https://medium.com/welldone-software/an-overview-of-javascript-testing-in-2018-f68950900bc3">[link]</a></span> &#32; <span><a href="https://www.reddit.com/r/javascript/comments/7wdbwh/an_overview_of_javascript_testing_in_2018/">[comments]</a></span>',
        contentSnippet:
          'submitted by    /u/vzaidman    to    r/javascript   [link]   [comments]',
        id: 't3_7wdbwh',
      },
      {
        title: 'Everything Easy is Hard Again',
        link:
          'https://www.reddit.com/r/webdev/comments/7wg0hy/everything_easy_is_hard_again/',
        pubDate: '2018-02-09T19:42:08.000Z',
        author: '/u/theodorejb',
        content:
          '&#32; submitted by &#32; <a href="https://www.reddit.com/user/theodorejb"> /u/theodorejb </a> &#32; to &#32; <a href="https://www.reddit.com/r/webdev/"> r/webdev </a> <br/> <span><a href="https://frankchimero.com/writing/everything-easy-is-hard-again/">[link]</a></span> &#32; <span><a href="https://www.reddit.com/r/webdev/comments/7wg0hy/everything_easy_is_hard_again/">[comments]</a></span>',
        contentSnippet:
          'submitted by    /u/theodorejb    to    r/webdev   [link]   [comments]',
        id: 't3_7wg0hy',
      },
      {
        title:
          "Great repo for practicing classic recursion (no inner recursive function, can't expand function parameters)",
        link:
          'https://www.reddit.com/r/javascript/comments/7wit0u/great_repo_for_practicing_classic_recursion_no/',
        pubDate: '2018-02-10T02:52:51.000Z',
        author: '/u/MrPoopyButt_H0le',
        content:
          '&#32; submitted by &#32; <a href="https://www.reddit.com/user/MrPoopyButt_H0le"> /u/MrPoopyButt_H0le </a> &#32; to &#32; <a href="https://www.reddit.com/r/javascript/"> r/javascript </a> <br/> <span><a href="https://github.com/JS-Challenges/recursion-prompts">[link]</a></span> &#32; <span><a href="https://www.reddit.com/r/javascript/comments/7wit0u/great_repo_for_practicing_classic_recursion_no/">[comments]</a></span>',
        contentSnippet:
          'submitted by    /u/MrPoopyButt_H0le    to    r/javascript   [link]   [comments]',
        id: 't3_7wit0u',
      },
      {
        title: 'Iso Cube Loader',
        link:
          'https://www.reddit.com/r/webdev/comments/7whac4/iso_cube_loader/',
        pubDate: '2018-02-09T22:45:23.000Z',
        author: '/u/deadlocked247',
        content:
          '<table> <tr><td> <a href="https://www.reddit.com/r/webdev/comments/7whac4/iso_cube_loader/"> <img src="https://b.thumbs.redditmedia.com/qvhdmH9r70ubCZLUs72a6pDjH4V34h9kp42dFf9JZic.jpg" alt="Iso Cube Loader" title="Iso Cube Loader" /> </a> </td><td> &#32; submitted by &#32; <a href="https://www.reddit.com/user/deadlocked247"> /u/deadlocked247 </a> &#32; to &#32; <a href="https://www.reddit.com/r/webdev/"> r/webdev </a> <br/> <span><a href="https://codepen.io/deadlocked247/pen/awxwWm">[link]</a></span> &#32; <span><a href="https://www.reddit.com/r/webdev/comments/7whac4/iso_cube_loader/">[comments]</a></span> </td></tr></table>',
        contentSnippet:
          'submitted by    /u/deadlocked247    to    r/webdev   [link]   [comments]',
        id: 't3_7whac4',
      },
      {
        title:
          "Just found this gem, his style to build web app is so seamless, he doesn't even use the mouse anymore.",
        link:
          'https://www.reddit.com/r/webdev/comments/7wkoh3/just_found_this_gem_his_style_to_build_web_app_is/',
        pubDate: '2018-02-10T10:11:19.000Z',
        author: '/u/rosmianto',
        content:
          '<table> <tr><td> <a href="https://www.reddit.com/r/webdev/comments/7wkoh3/just_found_this_gem_his_style_to_build_web_app_is/"> <img src="https://b.thumbs.redditmedia.com/hAOP77_C8u9DB23z4JoJQJtyixatkXKX7fXaxQ6ffLo.jpg" alt="Just found this gem, his style to build web app is so seamless, he doesn\'t even use the mouse anymore." title="Just found this gem, his style to build web app is so seamless, he doesn\'t even use the mouse anymore." /> </a> </td><td> &#32; submitted by &#32; <a href="https://www.reddit.com/user/rosmianto"> /u/rosmianto </a> &#32; to &#32; <a href="https://www.reddit.com/r/webdev/"> r/webdev </a> <br/> <span><a href="https://www.youtube.com/watch?v=NO2DaxhoWHk">[link]</a></span> &#32; <span><a href="https://www.reddit.com/r/webdev/comments/7wkoh3/just_found_this_gem_his_style_to_build_web_app_is/">[comments]</a></span> </td></tr></table>',
        contentSnippet:
          'submitted by    /u/rosmianto    to    r/webdev   [link]   [comments]',
        id: 't3_7wkoh3',
      },
      {
        title: 'A project to autofork and update packages',
        link:
          'https://www.reddit.com/r/golang/comments/7wk2c2/a_project_to_autofork_and_update_packages/',
        pubDate: '2018-02-10T07:19:53.000Z',
        author: '/u/ofpiyush',
        content:
          '<!-- SC_OFF --><div class="md"><p>Is there a simple way to set up auto forking and auto update of the fork for my dependencies?</p> <p>I don&#39;t want to be left hanging if a package maintainer deletes their fork. </p> <p>I would also like to know if something fishy happened.</p> <p>eg: things were force pushed, tags were changed etc.</p> <p>I primarily use repos hosted on/vanity-ed to github.</p> <p>Edit: corrected words for clarity.</p> </div><!-- SC_ON --> &#32; submitted by &#32; <a href="https://www.reddit.com/user/ofpiyush"> /u/ofpiyush </a> &#32; to &#32; <a href="https://www.reddit.com/r/golang/"> r/golang </a> <br/> <span><a href="https://www.reddit.com/r/golang/comments/7wk2c2/a_project_to_autofork_and_update_packages/">[link]</a></span> &#32; <span><a href="https://www.reddit.com/r/golang/comments/7wk2c2/a_project_to_autofork_and_update_packages/">[comments]</a></span>',
        contentSnippet:
          "Is there a simple way to set up auto forking and auto update of the fork for my dependencies? I don't want to be left hanging if a package maintainer deletes their fork.  I would also like to know if something fishy happened. eg: things were force pushed, tags were changed etc. I primarily use repos hosted on/vanity-ed to github. Edit: corrected words for clarity.    submitted by    /u/ofpiyush    to    r/golang   [link]   [comments]",
        id: 't3_7wk2c2',
      },
      {
        title: 'Made a bingo-machine',
        link:
          'https://www.reddit.com/r/javascript/comments/7wk3hk/made_a_bingomachine/',
        pubDate: '2018-02-10T07:28:48.000Z',
        author: '/u/pine1231',
        content:
          '&#32; submitted by &#32; <a href="https://www.reddit.com/user/pine1231"> /u/pine1231 </a> &#32; to &#32; <a href="https://www.reddit.com/r/javascript/"> r/javascript </a> <br/> <span><a href="https://boostlog.io/@kaitlyn.prohaska/i-made-a-bingo-machine-with-javascript-5a71fc3b52b91d9de6d0bdcd">[link]</a></span> &#32; <span><a href="https://www.reddit.com/r/javascript/comments/7wk3hk/made_a_bingomachine/">[comments]</a></span>',
        contentSnippet:
          'submitted by    /u/pine1231    to    r/javascript   [link]   [comments]',
        id: 't3_7wk3hk',
      },
      {
        title: 'What teams are suitable for development with React Native',
        link:
          'https://www.reddit.com/r/javascript/comments/7wke5a/what_teams_are_suitable_for_development_with/',
        pubDate: '2018-02-10T08:50:49.000Z',
        author: '/u/nikon98',
        content:
          '&#32; submitted by &#32; <a href="https://www.reddit.com/user/nikon98"> /u/nikon98 </a> &#32; to &#32; <a href="https://www.reddit.com/r/javascript/"> r/javascript </a> <br/> <span><a href="https://boostlog.io/@maryam_kertzmann/what-teams-are-suitable-for-development-with-react-native-5a71fc4952b91d9de6d0bdf3">[link]</a></span> &#32; <span><a href="https://www.reddit.com/r/javascript/comments/7wke5a/what_teams_are_suitable_for_development_with/">[comments]</a></span>',
        contentSnippet:
          'submitted by    /u/nikon98    to    r/javascript   [link]   [comments]',
        id: 't3_7wke5a',
      },
      {
        title: 'Backend & Frontend',
        link:
          'https://www.reddit.com/r/javascript/comments/7wj52d/backend_frontend/',
        pubDate: '2018-02-10T03:55:44.000Z',
        author: '/u/MisterCremaster',
        content:
          '<!-- SC_OFF --><div class="md"><p>I&#39;ve been primarily just a frontend dev for most of my career, but I&#39;ve been teaching myself node frameworks. I built an app in SailsJS, with a React frontend. I&#39;m trying to dig into how to get it to deploy to heroku, but one of the things I&#39;m seeing is that in my app (and many examples), it seems like I&#39;m actually spinning up two servers when I deploy locally (not on heroku).</p> <p>For example, the Backend REST Api (SailsJS) will be on localhost:3000, and my React frontend will be on localhost:3030. They communicate and work fine together locally, but before I start hammering on figuring out proper deploy technique to Heroku, is this setup going to work?</p> <p>My gut tells me that they should be both operating on the same port/server, and this is going to be a problem, or at least a major pain in the ass, to get working in prod/heroku.</p> <p>Any guidence, or just a thumbs up/down would be helpful. Thanks</p> </div><!-- SC_ON --> &#32; submitted by &#32; <a href="https://www.reddit.com/user/MisterCremaster"> /u/MisterCremaster </a> &#32; to &#32; <a href="https://www.reddit.com/r/javascript/"> r/javascript </a> <br/> <span><a href="https://www.reddit.com/r/javascript/comments/7wj52d/backend_frontend/">[link]</a></span> &#32; <span><a href="https://www.reddit.com/r/javascript/comments/7wj52d/backend_frontend/">[comments]</a></span>',
        contentSnippet:
          "I've been primarily just a frontend dev for most of my career, but I've been teaching myself node frameworks. I built an app in SailsJS, with a React frontend. I'm trying to dig into how to get it to deploy to heroku, but one of the things I'm seeing is that in my app (and many examples), it seems like I'm actually spinning up two servers when I deploy locally (not on heroku). For example, the Backend REST Api (SailsJS) will be on localhost:3000, and my React frontend will be on localhost:3030. They communicate and work fine together locally, but before I start hammering on figuring out proper deploy technique to Heroku, is this setup going to work? My gut tells me that they should be both operating on the same port/server, and this is going to be a problem, or at least a major pain in the ass, to get working in prod/heroku. Any guidence, or just a thumbs up/down would be helpful. Thanks    submitted by    /u/MisterCremaster    to    r/javascript   [link]   [comments]",
        id: 't3_7wj52d',
      },
      {
        title: 'FOSDEM 2018 - Go devroom playlist',
        link:
          'https://www.reddit.com/r/golang/comments/7wjo27/fosdem_2018_go_devroom_playlist/',
        pubDate: '2018-02-10T05:42:49.000Z',
        author: '/u/mhausenblas',
        content:
          '<!-- SC_OFF --><div class="md"><p>The playlist of the <a href="https://www.youtube.com/playlist?list=PLtLJO5JKE5YCYgIdpJPxNzWxpMuUWgbVi">Go devroom talks at FOSDEM 2018</a> is now available up on YouTube, thanks to Francesc!</p> </div><!-- SC_ON --> &#32; submitted by &#32; <a href="https://www.reddit.com/user/mhausenblas"> /u/mhausenblas </a> &#32; to &#32; <a href="https://www.reddit.com/r/golang/"> r/golang </a> <br/> <span><a href="https://www.reddit.com/r/golang/comments/7wjo27/fosdem_2018_go_devroom_playlist/">[link]</a></span> &#32; <span><a href="https://www.reddit.com/r/golang/comments/7wjo27/fosdem_2018_go_devroom_playlist/">[comments]</a></span>',
        contentSnippet:
          'The playlist of the Go devroom talks at FOSDEM 2018 is now available up on YouTube, thanks to Francesc!    submitted by    /u/mhausenblas    to    r/golang   [link]   [comments]',
        id: 't3_7wjo27',
      },
      {
        title: 'Errors in Go - Causes and fixes for common errors',
        link:
          'https://www.reddit.com/r/golang/comments/7wihdn/errors_in_go_causes_and_fixes_for_common_errors/',
        pubDate: '2018-02-10T01:56:31.000Z',
        author: '/u/joncalhoun',
        content:
          '&#32; submitted by &#32; <a href="https://www.reddit.com/user/joncalhoun"> /u/joncalhoun </a> &#32; to &#32; <a href="https://www.reddit.com/r/golang/"> r/golang </a> <br/> <span><a href="https://errorsingo.com/">[link]</a></span> &#32; <span><a href="https://www.reddit.com/r/golang/comments/7wihdn/errors_in_go_causes_and_fixes_for_common_errors/">[comments]</a></span>',
        contentSnippet:
          'submitted by    /u/joncalhoun    to    r/golang   [link]   [comments]',
        id: 't3_7wihdn',
      },
      {
        title: 'Have projects already started adopting dep?',
        link:
          'https://www.reddit.com/r/golang/comments/7wfoau/have_projects_already_started_adopting_dep/',
        pubDate: '2018-02-09T18:55:05.000Z',
        author: '/u/sinamahmoodi',
        content:
          '<!-- SC_OFF --><div class="md"><p>On the github page, it mentions that it is safe to use in production, although on the next line it still mentions it as an experiment. However I was wondering if it has already achieved adoption, or people are still using glide, godep, etc.?</p> </div><!-- SC_ON --> &#32; submitted by &#32; <a href="https://www.reddit.com/user/sinamahmoodi"> /u/sinamahmoodi </a> &#32; to &#32; <a href="https://www.reddit.com/r/golang/"> r/golang </a> <br/> <span><a href="https://www.reddit.com/r/golang/comments/7wfoau/have_projects_already_started_adopting_dep/">[link]</a></span> &#32; <span><a href="https://www.reddit.com/r/golang/comments/7wfoau/have_projects_already_started_adopting_dep/">[comments]</a></span>',
        contentSnippet:
          'On the github page, it mentions that it is safe to use in production, although on the next line it still mentions it as an experiment. However I was wondering if it has already achieved adoption, or people are still using glide, godep, etc.?    submitted by    /u/sinamahmoodi    to    r/golang   [link]   [comments]',
        id: 't3_7wfoau',
      },
      {
        title: 'An Introduction to Testing in Go',
        link:
          'https://www.reddit.com/r/golang/comments/7wkr46/an_introduction_to_testing_in_go/',
        pubDate: '2018-02-10T10:32:41.000Z',
        author: '/u/Forbsey1',
        content:
          '&#32; submitted by &#32; <a href="https://www.reddit.com/user/Forbsey1"> /u/Forbsey1 </a> &#32; to &#32; <a href="https://www.reddit.com/r/golang/"> r/golang </a> <br/> <span><a href="https://www.youtube.com/watch?v=GlA57dHa5Rg&amp;feature=youtu.be">[link]</a></span> &#32; <span><a href="https://www.reddit.com/r/golang/comments/7wkr46/an_introduction_to_testing_in_go/">[comments]</a></span>',
        contentSnippet:
          'submitted by    /u/Forbsey1    to    r/golang   [link]   [comments]',
        id: 't3_7wkr46',
      },
      {
        title:
          'Babel Time Travel: Step through babel transformations one by one',
        link:
          'https://www.reddit.com/r/javascript/comments/7wef1j/babel_time_travel_step_through_babel/',
        pubDate: '2018-02-09T16:06:23.000Z',
        author: '/u/hash_salts',
        content:
          '&#32; submitted by &#32; <a href="https://www.reddit.com/user/hash_salts"> /u/hash_salts </a> &#32; to &#32; <a href="https://www.reddit.com/r/javascript/"> r/javascript </a> <br/> <span><a href="https://babel-time-travel.boopathi.in/">[link]</a></span> &#32; <span><a href="https://www.reddit.com/r/javascript/comments/7wef1j/babel_time_travel_step_through_babel/">[comments]</a></span>',
        contentSnippet:
          'submitted by    /u/hash_salts    to    r/javascript   [link]   [comments]',
        id: 't3_7wef1j',
      },
      {
        title:
          'CSS Space Shooter - an experiment in 3D rendering using only the DOM and CSS transforms. No canvas, webGL or images of any kind are used to render the game. Sound effects, music and audio visualization is handled by the Web Audio API',
        link:
          'https://www.reddit.com/r/webdev/comments/7wdx68/css_space_shooter_an_experiment_in_3d_rendering/',
        pubDate: '2018-02-09T14:53:25.000Z',
        author: '/u/magenta_placenta',
        content:
          '<table> <tr><td> <a href="https://www.reddit.com/r/webdev/comments/7wdx68/css_space_shooter_an_experiment_in_3d_rendering/"> <img src="https://b.thumbs.redditmedia.com/cAIVGpTkx2oPNVLGHcH9wlma6_j4Ay4VfQpYx7Emg7c.jpg" alt="CSS Space Shooter - an experiment in 3D rendering using only the DOM and CSS transforms. No canvas, webGL or images of any kind are used to render the game. Sound effects, music and audio visualization is handled by the Web Audio API" title="CSS Space Shooter - an experiment in 3D rendering using only the DOM and CSS transforms. No canvas, webGL or images of any kind are used to render the game. Sound effects, music and audio visualization is handled by the Web Audio API" /> </a> </td><td> &#32; submitted by &#32; <a href="https://www.reddit.com/user/magenta_placenta"> /u/magenta_placenta </a> &#32; to &#32; <a href="https://www.reddit.com/r/webdev/"> r/webdev </a> <br/> <span><a href="https://www.michaelbromley.co.uk/experiments/css-space-shooter/">[link]</a></span> &#32; <span><a href="https://www.reddit.com/r/webdev/comments/7wdx68/css_space_shooter_an_experiment_in_3d_rendering/">[comments]</a></span> </td></tr></table>',
        contentSnippet:
          'submitted by    /u/magenta_placenta    to    r/webdev   [link]   [comments]',
        id: 't3_7wdx68',
      },
      {
        title: 'Chrome will start marking all HTTP sites as not secure in July',
        link:
          'https://www.reddit.com/r/webdev/comments/7w7yae/chrome_will_start_marking_all_http_sites_as_not/',
        pubDate: '2018-02-08T20:42:06.000Z',
        author: '/u/expis',
        content:
          '<table> <tr><td> <a href="https://www.reddit.com/r/webdev/comments/7w7yae/chrome_will_start_marking_all_http_sites_as_not/"> <img src="https://b.thumbs.redditmedia.com/O7H3YD4rUJPA4GGPXWjdcrxeAuZ7k0oa_ZqqbNLywCo.jpg" alt="Chrome will start marking all HTTP sites as not secure in July" title="Chrome will start marking all HTTP sites as not secure in July" /> </a> </td><td> &#32; submitted by &#32; <a href="https://www.reddit.com/user/expis"> /u/expis </a> &#32; to &#32; <a href="https://www.reddit.com/r/webdev/"> r/webdev </a> <br/> <span><a href="https://venturebeat.com/2018/02/08/chrome-will-start-marking-all-http-sites-as-not-secure-in-july/">[link]</a></span> &#32; <span><a href="https://www.reddit.com/r/webdev/comments/7w7yae/chrome_will_start_marking_all_http_sites_as_not/">[comments]</a></span> </td></tr></table>',
        contentSnippet:
          'submitted by    /u/expis    to    r/webdev   [link]   [comments]',
        id: 't3_7w7yae',
      },
      {
        title: 'Percent sign suffix after fmt.Printf defer',
        link:
          'https://www.reddit.com/r/golang/comments/7wkdlx/percent_sign_suffix_after_fmtprintf_defer/',
        pubDate: '2018-02-10T08:46:31.000Z',
        author: '/u/fgorczynski',
        content:
          '<!-- SC_OFF --><div class="md"><p>Hello everyone as it&#39;s my first post here.</p> <p>I&#39;ve started with Golang and it looks promising but I&#39;ve stuck on some strange behavior. Actually not a big problem but that small part that doesn&#39;t allow me to stay calm.</p> <p>Source code is extremely simple: <a href="https://play.golang.org/p/DUtxtj8j6Dt">https://play.golang.org/p/DUtxtj8j6Dt</a> - nothing extraordinary here.</p> <p>Problem is that after calling <code>go install hello &amp;&amp; ./bin/hello</code> I&#39;m getting following result:</p> <pre><code>Hello, World! DEFER 1 DEFER 2% </code></pre> <p>Yes, there is a percent sign if I use <code>Printf</code> instead <code>Println</code>. And I can&#39;t figure out origin of this character.</p> <p>I&#39;m using zsh if it&#39;s important. I&#39;ve tried to Google it but don&#39;t even know what keywords to use to get expected results.</p> </div><!-- SC_ON --> &#32; submitted by &#32; <a href="https://www.reddit.com/user/fgorczynski"> /u/fgorczynski </a> &#32; to &#32; <a href="https://www.reddit.com/r/golang/"> r/golang </a> <br/> <span><a href="https://www.reddit.com/r/golang/comments/7wkdlx/percent_sign_suffix_after_fmtprintf_defer/">[link]</a></span> &#32; <span><a href="https://www.reddit.com/r/golang/comments/7wkdlx/percent_sign_suffix_after_fmtprintf_defer/">[comments]</a></span>',
        contentSnippet:
          "Hello everyone as it's my first post here. I've started with Golang and it looks promising but I've stuck on some strange behavior. Actually not a big problem but that small part that doesn't allow me to stay calm. Source code is extremely simple: https://play.golang.org/p/DUtxtj8j6Dt - nothing extraordinary here. Problem is that after calling go install hello && ./bin/hello I'm getting following result: Hello, World! DEFER 1 DEFER 2%  Yes, there is a percent sign if I use Printf instead Println. And I can't figure out origin of this character. I'm using zsh if it's important. I've tried to Google it but don't even know what keywords to use to get expected results.    submitted by    /u/fgorczynski    to    r/golang   [link]   [comments]",
        id: 't3_7wkdlx',
      },
      {
        title: 'Computer Color is Broken',
        link:
          'https://www.reddit.com/r/programming/comments/7wc7t3/computer_color_is_broken/',
        pubDate: '2018-02-09T08:56:02.000Z',
        author: '/u/ThisIs_MyName',
        content:
          '&#32; submitted by &#32; <a href="https://www.reddit.com/user/ThisIs_MyName"> /u/ThisIs_MyName </a> &#32; to &#32; <a href="https://www.reddit.com/r/programming/"> r/programming </a> <br/> <span><a href="https://www.youtube.com/watch?v=LKnqECcg6Gw">[link]</a></span> &#32; <span><a href="https://www.reddit.com/r/programming/comments/7wc7t3/computer_color_is_broken/">[comments]</a></span>',
        contentSnippet:
          'submitted by    /u/ThisIs_MyName    to    r/programming   [link]   [comments]',
        id: 't3_7wc7t3',
      },
      {
        title:
          'Why, when, how and where to learn about Closures, Hoisting, prototypes..',
        link:
          'https://www.reddit.com/r/javascript/comments/7wg5rq/why_when_how_and_where_to_learn_about_closures/',
        pubDate: '2018-02-09T20:02:40.000Z',
        author: '/u/PatrickRNG',
        content:
          '<!-- SC_OFF --><div class="md"><p>I<code>m struggling to learn that kind of stuff, i wanna know, why it</code>s important to learn all that, i<code>m still a beginner in JS, kind of. After the why i wanna know when, like if it</code>s better to learn right off, before any Frameworks and libs, or just keep studying anything until sometime i understand.</p> <p>A problem that i encountered is that i`m having a very bad financial problem, so with that in mind, do you guys think i should learn the &quot;Companies requirements&quot; around me because of that first, to get a better job faster. like get right in Frameworks and Jquery, even if i do not understand these kind of stuff?</p> <p>How to learn that i guess it depends on the person, i find building projects better, but for that kind of things i don`t know how i would do that.</p> <p>And if you guys have any youtube channels or anything that helped you to learn JS.</p> </div><!-- SC_ON --> &#32; submitted by &#32; <a href="https://www.reddit.com/user/PatrickRNG"> /u/PatrickRNG </a> &#32; to &#32; <a href="https://www.reddit.com/r/javascript/"> r/javascript </a> <br/> <span><a href="https://www.reddit.com/r/javascript/comments/7wg5rq/why_when_how_and_where_to_learn_about_closures/">[link]</a></span> &#32; <span><a href="https://www.reddit.com/r/javascript/comments/7wg5rq/why_when_how_and_where_to_learn_about_closures/">[comments]</a></span>',
        contentSnippet:
          'Im struggling to learn that kind of stuff, i wanna know, why its important to learn all that, im still a beginner in JS, kind of. After the why i wanna know when, like if its better to learn right off, before any Frameworks and libs, or just keep studying anything until sometime i understand. A problem that i encountered is that i`m having a very bad financial problem, so with that in mind, do you guys think i should learn the "Companies requirements" around me because of that first, to get a better job faster. like get right in Frameworks and Jquery, even if i do not understand these kind of stuff? How to learn that i guess it depends on the person, i find building projects better, but for that kind of things i don`t know how i would do that. And if you guys have any youtube channels or anything that helped you to learn JS.    submitted by    /u/PatrickRNG    to    r/javascript   [link]   [comments]',
        id: 't3_7wg5rq',
      },
      {
        title:
          "Dumb question.. When a site has 25,000+ lines of JavaScript, how is that being generated? Surely it's not being hand-coded...",
        link:
          'https://www.reddit.com/r/webdev/comments/7wgqba/dumb_question_when_a_site_has_25000_lines_of/',
        pubDate: '2018-02-09T21:22:00.000Z',
        author: '/u/circa7',
        content:
          '<!-- SC_OFF --><div class="md"><p>I&#39;m not super inexperienced, I can work some JS magic. But sometimes I&#39;ll check out a site and there are THOUSANDS of lines of JS. </p> <p>For example, one site I just looked at is using backbone.js (which I am not familiar with) -- so is the developer writing a smaller amount of code with Backbone and it&#39;s outputting the extreme JS file?</p> </div><!-- SC_ON --> &#32; submitted by &#32; <a href="https://www.reddit.com/user/circa7"> /u/circa7 </a> &#32; to &#32; <a href="https://www.reddit.com/r/webdev/"> r/webdev </a> <br/> <span><a href="https://www.reddit.com/r/webdev/comments/7wgqba/dumb_question_when_a_site_has_25000_lines_of/">[link]</a></span> &#32; <span><a href="https://www.reddit.com/r/webdev/comments/7wgqba/dumb_question_when_a_site_has_25000_lines_of/">[comments]</a></span>',
        contentSnippet:
          "I'm not super inexperienced, I can work some JS magic. But sometimes I'll check out a site and there are THOUSANDS of lines of JS.  For example, one site I just looked at is using backbone.js (which I am not familiar with) -- so is the developer writing a smaller amount of code with Backbone and it's outputting the extreme JS file?    submitted by    /u/circa7    to    r/webdev   [link]   [comments]",
        id: 't3_7wgqba',
      },
    ],
    markedAsRead: [],
    bookMarked: [],
    unreadCount: 25,
  },
  '0a65455f-c4cd-42c0-85ba-b596a68c07d4': {
    items: [
      {
        title:
          'Probably my favorite Ian McKellen performance in Lord of the Rings, when Gandalf the Grey is reborn as Gandalf the White',
        link:
          'https://www.reddit.com/r/HighQualityGifs/comments/7wiz99/probably_my_favorite_ian_mckellen_performance_in/',
        pubDate: '2018-02-10T03:24:48.000Z',
        author: '/u/ThePeoplesBard',
        content:
          '<table> <tr><td> <a href="https://www.reddit.com/r/HighQualityGifs/comments/7wiz99/probably_my_favorite_ian_mckellen_performance_in/"> <img src="https://b.thumbs.redditmedia.com/4ljrWAxzGeyUR7tfxhqkkQsoa_MYizX3onTPiXSBlQQ.jpg" alt="Probably my favorite Ian McKellen performance in Lord of the Rings, when Gandalf the Grey is reborn as Gandalf the White" title="Probably my favorite Ian McKellen performance in Lord of the Rings, when Gandalf the Grey is reborn as Gandalf the White" /> </a> </td><td> &#32; submitted by &#32; <a href="https://www.reddit.com/user/ThePeoplesBard"> /u/ThePeoplesBard </a> &#32; to &#32; <a href="https://www.reddit.com/r/HighQualityGifs/"> r/HighQualityGifs </a> <br/> <span><a href="https://i.imgur.com/9HYZoJd.gifv">[link]</a></span> &#32; <span><a href="https://www.reddit.com/r/HighQualityGifs/comments/7wiz99/probably_my_favorite_ian_mckellen_performance_in/">[comments]</a></span> </td></tr></table>',
        contentSnippet:
          'submitted by    /u/ThePeoplesBard    to    r/HighQualityGifs   [link]   [comments]',
        id: 't3_7wiz99',
      },
      {
        title:
          'My mom finished the quilt she has been working on for me. It has taken her six months. I though you all might appreciate it!',
        link:
          'https://www.reddit.com/r/gaming/comments/7wiybp/my_mom_finished_the_quilt_she_has_been_working_on/',
        pubDate: '2018-02-10T03:19:49.000Z',
        author: '/u/rjwoutdoors',
        content:
          '<table> <tr><td> <a href="https://www.reddit.com/r/gaming/comments/7wiybp/my_mom_finished_the_quilt_she_has_been_working_on/"> <img src="https://b.thumbs.redditmedia.com/_zH7cLPgR7iQJwX0nRID5MWYvgDxfoLwjohxVw2j_VU.jpg" alt="My mom finished the quilt she has been working on for me. It has taken her six months. I though you all might appreciate it!" title="My mom finished the quilt she has been working on for me. It has taken her six months. I though you all might appreciate it!" /> </a> </td><td> &#32; submitted by &#32; <a href="https://www.reddit.com/user/rjwoutdoors"> /u/rjwoutdoors </a> &#32; to &#32; <a href="https://www.reddit.com/r/gaming/"> r/gaming </a> <br/> <span><a href="https://i.redd.it/evg44cy10bf01.jpg">[link]</a></span> &#32; <span><a href="https://www.reddit.com/r/gaming/comments/7wiybp/my_mom_finished_the_quilt_she_has_been_working_on/">[comments]</a></span> </td></tr></table>',
        contentSnippet:
          'submitted by    /u/rjwoutdoors    to    r/gaming   [link]   [comments]',
        id: 't3_7wiybp',
      },
      {
        title: '[NO SPOILERS] She is all I aspire to be when I grow up',
        link:
          'https://www.reddit.com/r/gameofthrones/comments/7wjprc/no_spoilers_she_is_all_i_aspire_to_be_when_i_grow/',
        pubDate: '2018-02-10T05:53:28.000Z',
        author: '/u/I_Like_Peaches_',
        content:
          '<table> <tr><td> <a href="https://www.reddit.com/r/gameofthrones/comments/7wjprc/no_spoilers_she_is_all_i_aspire_to_be_when_i_grow/"> <img src="https://a.thumbs.redditmedia.com/sqFsSQ2_H06wR6OgDyxtUgRNIwwkh3Dfprjj48CNML0.jpg" alt="[NO SPOILERS] She is all I aspire to be when I grow up" title="[NO SPOILERS] She is all I aspire to be when I grow up" /> </a> </td><td> &#32; submitted by &#32; <a href="https://www.reddit.com/user/I_Like_Peaches_"> /u/I_Like_Peaches_ </a> &#32; to &#32; <a href="https://www.reddit.com/r/gameofthrones/"> r/gameofthrones </a> <br/> <span><a href="https://i.redd.it/4o1yr8kfrbf01.jpg">[link]</a></span> &#32; <span><a href="https://www.reddit.com/r/gameofthrones/comments/7wjprc/no_spoilers_she_is_all_i_aspire_to_be_when_i_grow/">[comments]</a></span> </td></tr></table>',
        contentSnippet:
          'submitted by    /u/I_Like_Peaches_    to    r/gameofthrones   [link]   [comments]',
        id: 't3_7wjprc',
      },
      {
        title: 'The Mexican Ski team has the best uniforms',
        link:
          'https://www.reddit.com/r/pics/comments/7wioka/the_mexican_ski_team_has_the_best_uniforms/',
        pubDate: '2018-02-10T02:31:19.000Z',
        author: '/u/and_peggy1776',
        content:
          '<table> <tr><td> <a href="https://www.reddit.com/r/pics/comments/7wioka/the_mexican_ski_team_has_the_best_uniforms/"> <img src="https://b.thumbs.redditmedia.com/OhpuLrYC1tQuP5xnJ-bFt7wha8V8KfpYx6Tl9WD3q7o.jpg" alt="The Mexican Ski team has the best uniforms" title="The Mexican Ski team has the best uniforms" /> </a> </td><td> &#32; submitted by &#32; <a href="https://www.reddit.com/user/and_peggy1776"> /u/and_peggy1776 </a> &#32; to &#32; <a href="https://www.reddit.com/r/pics/"> r/pics </a> <br/> <span><a href="https://i.redd.it/9zghd1jeraf01.jpg">[link]</a></span> &#32; <span><a href="https://www.reddit.com/r/pics/comments/7wioka/the_mexican_ski_team_has_the_best_uniforms/">[comments]</a></span> </td></tr></table>',
        contentSnippet:
          'submitted by    /u/and_peggy1776    to    r/pics   [link]   [comments]',
        id: 't3_7wioka',
      },
      {
        title:
          'I donated a kidney a few days ago so my friend decided to get me a celebratory cake.',
        link:
          'https://www.reddit.com/r/funny/comments/7winvm/i_donated_a_kidney_a_few_days_ago_so_my_friend/',
        pubDate: '2018-02-10T02:28:04.000Z',
        author: '/u/tomgremlin',
        content:
          '<table> <tr><td> <a href="https://www.reddit.com/r/funny/comments/7winvm/i_donated_a_kidney_a_few_days_ago_so_my_friend/"> <img src="https://b.thumbs.redditmedia.com/zL0RmIGDhZ6qxwOTk-MBrreQ44DWdeB7FrKpqnuo28c.jpg" alt="I donated a kidney a few days ago so my friend decided to get me a celebratory cake." title="I donated a kidney a few days ago so my friend decided to get me a celebratory cake." /> </a> </td><td> &#32; submitted by &#32; <a href="https://www.reddit.com/user/tomgremlin"> /u/tomgremlin </a> &#32; to &#32; <a href="https://www.reddit.com/r/funny/"> r/funny </a> <br/> <span><a href="https://i.redd.it/nk8tzm7tqaf01.jpg">[link]</a></span> &#32; <span><a href="https://www.reddit.com/r/funny/comments/7winvm/i_donated_a_kidney_a_few_days_ago_so_my_friend/">[comments]</a></span> </td></tr></table>',
        contentSnippet:
          'submitted by    /u/tomgremlin    to    r/funny   [link]   [comments]',
        id: 't3_7winvm',
      },
      {
        title: 'This Marine Iguana 🔥🔥🔥💦',
        link:
          'https://www.reddit.com/r/NatureIsFuckingLit/comments/7wil4y/this_marine_iguana/',
        pubDate: '2018-02-10T02:14:44.000Z',
        author: '/u/alifordays',
        content:
          '<table> <tr><td> <a href="https://www.reddit.com/r/NatureIsFuckingLit/comments/7wil4y/this_marine_iguana/"> <img src="https://b.thumbs.redditmedia.com/Jy8gRV_-Nfl_3T1DOcz5FXyE6zBIHICG3krdqpzChxg.jpg" alt="This Marine Iguana 🔥🔥🔥💦" title="This Marine Iguana 🔥🔥🔥💦" /> </a> </td><td> &#32; submitted by &#32; <a href="https://www.reddit.com/user/alifordays"> /u/alifordays </a> &#32; to &#32; <a href="https://www.reddit.com/r/NatureIsFuckingLit/"> r/NatureIsFuckingLit </a> <br/> <span><a href="https://i.redd.it/8ce7o9pfoaf01.jpg">[link]</a></span> &#32; <span><a href="https://www.reddit.com/r/NatureIsFuckingLit/comments/7wil4y/this_marine_iguana/">[comments]</a></span> </td></tr></table>',
        contentSnippet:
          'submitted by    /u/alifordays    to    r/NatureIsFuckingLit   [link]   [comments]',
        id: 't3_7wil4y',
      },
      {
        title:
          'This online store claims these models are their customer service representatives. The same model appears twice with different names, and all 8 models have the same 4 names.',
        link:
          'https://www.reddit.com/r/CrappyDesign/comments/7wit0y/this_online_store_claims_these_models_are_their/',
        pubDate: '2018-02-10T02:52:51.000Z',
        author: '/u/gone11gone11',
        content:
          '<table> <tr><td> <a href="https://www.reddit.com/r/CrappyDesign/comments/7wit0y/this_online_store_claims_these_models_are_their/"> <img src="https://b.thumbs.redditmedia.com/1iefL7Atg_T77Q3XiQ2iLtVeH10k74tspbGzbWMwjhY.jpg" alt="This online store claims these models are their customer service representatives. The same model appears twice with different names, and all 8 models have the same 4 names." title="This online store claims these models are their customer service representatives. The same model appears twice with different names, and all 8 models have the same 4 names." /> </a> </td><td> &#32; submitted by &#32; <a href="https://www.reddit.com/user/gone11gone11"> /u/gone11gone11 </a> &#32; to &#32; <a href="https://www.reddit.com/r/CrappyDesign/"> r/CrappyDesign </a> <br/> <span><a href="https://i.redd.it/1q6suqycuaf01.png">[link]</a></span> &#32; <span><a href="https://www.reddit.com/r/CrappyDesign/comments/7wit0y/this_online_store_claims_these_models_are_their/">[comments]</a></span> </td></tr></table>',
        contentSnippet:
          'submitted by    /u/gone11gone11    to    r/CrappyDesign   [link]   [comments]',
        id: 't3_7wit0y',
      },
      {
        title: 'Love his markings. He’s special!',
        link:
          'https://www.reddit.com/r/aww/comments/7wicsv/love_his_markings_hes_special/',
        pubDate: '2018-02-10T01:34:39.000Z',
        author: '/u/WheyProtein4TheSwole',
        content:
          '<table> <tr><td> <a href="https://www.reddit.com/r/aww/comments/7wicsv/love_his_markings_hes_special/"> <img src="https://a.thumbs.redditmedia.com/6MpXhNJ7WSxlplH3nQJWY66KDS0U3XIoeSyeuNqVLp8.jpg" alt="Love his markings. He’s special!" title="Love his markings. He’s special!" /> </a> </td><td> &#32; submitted by &#32; <a href="https://www.reddit.com/user/WheyProtein4TheSwole"> /u/WheyProtein4TheSwole </a> &#32; to &#32; <a href="https://www.reddit.com/r/aww/"> r/aww </a> <br/> <span><a href="https://i.redd.it/ifrg18aahaf01.jpg">[link]</a></span> &#32; <span><a href="https://www.reddit.com/r/aww/comments/7wicsv/love_his_markings_hes_special/">[comments]</a></span> </td></tr></table>',
        contentSnippet:
          'submitted by    /u/WheyProtein4TheSwole    to    r/aww   [link]   [comments]',
        id: 't3_7wicsv',
      },
      {
        title: 'El Doro',
        link: 'https://www.reddit.com/r/memes/comments/7wioon/el_doro/',
        pubDate: '2018-02-10T02:31:55.000Z',
        author: '/u/dickfromaccounting',
        content:
          '<table> <tr><td> <a href="https://www.reddit.com/r/memes/comments/7wioon/el_doro/"> <img src="https://b.thumbs.redditmedia.com/-AKly58YpJOukzg5-vOS5KCYcKYLdiOLTAjNhWDh48U.jpg" alt="El Doro" title="El Doro" /> </a> </td><td> &#32; submitted by &#32; <a href="https://www.reddit.com/user/dickfromaccounting"> /u/dickfromaccounting </a> &#32; to &#32; <a href="https://www.reddit.com/r/memes/"> r/memes </a> <br/> <span><a href="https://i.imgur.com/8k8abyK.jpg">[link]</a></span> &#32; <span><a href="https://www.reddit.com/r/memes/comments/7wioon/el_doro/">[comments]</a></span> </td></tr></table>',
        contentSnippet:
          'submitted by    /u/dickfromaccounting    to    r/memes   [link]   [comments]',
        id: 't3_7wioon',
      },
      {
        title: 'Fucking yikes...',
        link:
          'https://www.reddit.com/r/instant_regret/comments/7wijvx/fucking_yikes/',
        pubDate: '2018-02-10T02:08:29.000Z',
        author: '/u/The_winner_man',
        content:
          '<table> <tr><td> <a href="https://www.reddit.com/r/instant_regret/comments/7wijvx/fucking_yikes/"> <img src="https://a.thumbs.redditmedia.com/SYf7iGXrMBm1LrnkOzDRrtFsYDf43pfJEJiyLMU2mO4.jpg" alt="Fucking yikes..." title="Fucking yikes..." /> </a> </td><td> &#32; submitted by &#32; <a href="https://www.reddit.com/user/The_winner_man"> /u/The_winner_man </a> &#32; to &#32; <a href="https://www.reddit.com/r/instant_regret/"> r/instant_regret </a> <br/> <span><a href="https://i.imgur.com/CpwljUQ.gifv">[link]</a></span> &#32; <span><a href="https://www.reddit.com/r/instant_regret/comments/7wijvx/fucking_yikes/">[comments]</a></span> </td></tr></table>',
        contentSnippet:
          'submitted by    /u/The_winner_man    to    r/instant_regret   [link]   [comments]',
        id: 't3_7wijvx',
      },
      {
        title: 'Not Child Friendly',
        link:
          'https://www.reddit.com/r/facepalm/comments/7wim8t/not_child_friendly/',
        pubDate: '2018-02-10T02:19:56.000Z',
        author: '/u/t001_t1m3',
        content:
          '<table> <tr><td> <a href="https://www.reddit.com/r/facepalm/comments/7wim8t/not_child_friendly/"> <img src="https://b.thumbs.redditmedia.com/3Rck8vxzsaan4exZxMLhF8liexoFPxbe2D9Xzz5oNTg.jpg" alt="Not Child Friendly" title="Not Child Friendly" /> </a> </td><td> &#32; submitted by &#32; <a href="https://www.reddit.com/user/t001_t1m3"> /u/t001_t1m3 </a> &#32; to &#32; <a href="https://www.reddit.com/r/facepalm/"> r/facepalm </a> <br/> <span><a href="https://i.redd.it/hl79s04dpaf01.jpg">[link]</a></span> &#32; <span><a href="https://www.reddit.com/r/facepalm/comments/7wim8t/not_child_friendly/">[comments]</a></span> </td></tr></table>',
        contentSnippet:
          'submitted by    /u/t001_t1m3    to    r/facepalm   [link]   [comments]',
        id: 't3_7wim8t',
      },
      {
        title: 'Wall climbing meets pong',
        link:
          'https://www.reddit.com/r/interestingasfuck/comments/7wiuwn/wall_climbing_meets_pong/',
        pubDate: '2018-02-10T03:02:13.000Z',
        author: '/u/dickfromaccounting',
        content:
          '<table> <tr><td> <a href="https://www.reddit.com/r/interestingasfuck/comments/7wiuwn/wall_climbing_meets_pong/"> <img src="https://b.thumbs.redditmedia.com/jAnoH_sXqKrM1pYKXxmpSi7NQwuRuuuJvLLDkb1wvTw.jpg" alt="Wall climbing meets pong" title="Wall climbing meets pong" /> </a> </td><td> &#32; submitted by &#32; <a href="https://www.reddit.com/user/dickfromaccounting"> /u/dickfromaccounting </a> &#32; to &#32; <a href="https://www.reddit.com/r/interestingasfuck/"> r/interestingasfuck </a> <br/> <span><a href="https://i.imgur.com/kSup546.gifv">[link]</a></span> &#32; <span><a href="https://www.reddit.com/r/interestingasfuck/comments/7wiuwn/wall_climbing_meets_pong/">[comments]</a></span> </td></tr></table>',
        contentSnippet:
          'submitted by    /u/dickfromaccounting    to    r/interestingasfuck   [link]   [comments]',
        id: 't3_7wiuwn',
      },
      {
        title: 'This handsome rare boy.',
        link:
          'https://www.reddit.com/r/rarepuppers/comments/7wixy6/this_handsome_rare_boy/',
        pubDate: '2018-02-10T03:17:52.000Z',
        author: '/u/The_winner_man',
        content:
          '<table> <tr><td> <a href="https://www.reddit.com/r/rarepuppers/comments/7wixy6/this_handsome_rare_boy/"> <img src="https://b.thumbs.redditmedia.com/8Im0htAP25socV4drbZ8J4EIw2QJjhD0sFgIHr8Yx_c.jpg" alt="This handsome rare boy." title="This handsome rare boy." /> </a> </td><td> &#32; submitted by &#32; <a href="https://www.reddit.com/user/The_winner_man"> /u/The_winner_man </a> &#32; to &#32; <a href="https://www.reddit.com/r/rarepuppers/"> r/rarepuppers </a> <br/> <span><a href="https://i.imgur.com/mudLUrL.jpg">[link]</a></span> &#32; <span><a href="https://www.reddit.com/r/rarepuppers/comments/7wixy6/this_handsome_rare_boy/">[comments]</a></span> </td></tr></table>',
        contentSnippet:
          'submitted by    /u/The_winner_man    to    r/rarepuppers   [link]   [comments]',
        id: 't3_7wixy6',
      },
      {
        title: 'I just remembered how much I loved these wooden pattern blocks',
        link:
          'https://www.reddit.com/r/nostalgia/comments/7wijh3/i_just_remembered_how_much_i_loved_these_wooden/',
        pubDate: '2018-02-10T02:06:32.000Z',
        author: '/u/anarachelb',
        content:
          '<table> <tr><td> <a href="https://www.reddit.com/r/nostalgia/comments/7wijh3/i_just_remembered_how_much_i_loved_these_wooden/"> <img src="https://b.thumbs.redditmedia.com/OUJGwtq-TcbvbmribnbeRgcV4HXDbX1Jt2JCClOO1Pc.jpg" alt="I just remembered how much I loved these wooden pattern blocks" title="I just remembered how much I loved these wooden pattern blocks" /> </a> </td><td> &#32; submitted by &#32; <a href="https://www.reddit.com/user/anarachelb"> /u/anarachelb </a> &#32; to &#32; <a href="https://www.reddit.com/r/nostalgia/"> r/nostalgia </a> <br/> <span><a href="https://i.redd.it/2fwqpfbzmaf01.jpg">[link]</a></span> &#32; <span><a href="https://www.reddit.com/r/nostalgia/comments/7wijh3/i_just_remembered_how_much_i_loved_these_wooden/">[comments]</a></span> </td></tr></table>',
        contentSnippet:
          'submitted by    /u/anarachelb    to    r/nostalgia   [link]   [comments]',
        id: 't3_7wijh3',
      },
      {
        title: 'You came to the wrong neighborhood',
        link:
          'https://www.reddit.com/r/AnimalsBeingJerks/comments/7wiukn/you_came_to_the_wrong_neighborhood/',
        pubDate: '2018-02-10T03:00:40.000Z',
        author: '/u/Subterfug3',
        content:
          '<table> <tr><td> <a href="https://www.reddit.com/r/AnimalsBeingJerks/comments/7wiukn/you_came_to_the_wrong_neighborhood/"> <img src="https://b.thumbs.redditmedia.com/3CTI5JokRaAb6GjDJVcw9opRLeDA5W7PBr9BITzXFLw.jpg" alt="You came to the wrong neighborhood" title="You came to the wrong neighborhood" /> </a> </td><td> &#32; submitted by &#32; <a href="https://www.reddit.com/user/Subterfug3"> /u/Subterfug3 </a> &#32; to &#32; <a href="https://www.reddit.com/r/AnimalsBeingJerks/"> r/AnimalsBeingJerks </a> <br/> <span><a href="https://gfycat.com/EnviousHarshKakapo">[link]</a></span> &#32; <span><a href="https://www.reddit.com/r/AnimalsBeingJerks/comments/7wiukn/you_came_to_the_wrong_neighborhood/">[comments]</a></span> </td></tr></table>',
        contentSnippet:
          'submitted by    /u/Subterfug3    to    r/AnimalsBeingJerks   [link]   [comments]',
        id: 't3_7wiukn',
      },
      {
        title: 'This is how sorry Logan Paul really is',
        link:
          'https://www.reddit.com/r/trashy/comments/7wimjb/this_is_how_sorry_logan_paul_really_is/',
        pubDate: '2018-02-10T02:21:23.000Z',
        author: '/u/CaseyReckless',
        content:
          '<table> <tr><td> <a href="https://www.reddit.com/r/trashy/comments/7wimjb/this_is_how_sorry_logan_paul_really_is/"> <img src="https://a.thumbs.redditmedia.com/sCu_tGE_KOTVaHHMMtO8sax21Yn9eJTjI4hMX5CS_K8.jpg" alt="This is how sorry Logan Paul really is" title="This is how sorry Logan Paul really is" /> </a> </td><td> &#32; submitted by &#32; <a href="https://www.reddit.com/user/CaseyReckless"> /u/CaseyReckless </a> &#32; to &#32; <a href="https://www.reddit.com/r/trashy/"> r/trashy </a> <br/> <span><a href="https://i.redd.it/fs1z3e9lpaf01.jpg">[link]</a></span> &#32; <span><a href="https://www.reddit.com/r/trashy/comments/7wimjb/this_is_how_sorry_logan_paul_really_is/">[comments]</a></span> </td></tr></table>',
        contentSnippet:
          'submitted by    /u/CaseyReckless    to    r/trashy   [link]   [comments]',
        id: 't3_7wimjb',
      },
      {
        title: 'That slow turn',
        link:
          'https://www.reddit.com/r/PUBATTLEGROUNDS/comments/7wjeoh/that_slow_turn/',
        pubDate: '2018-02-10T04:49:35.000Z',
        author: '/u/Winghaven_',
        content:
          '<table> <tr><td> <a href="https://www.reddit.com/r/PUBATTLEGROUNDS/comments/7wjeoh/that_slow_turn/"> <img src="https://b.thumbs.redditmedia.com/ErWk0eD5pch9sLkw2FX4X3a_kdnwZgc8E9DgS-fElIE.jpg" alt="That slow turn" title="That slow turn" /> </a> </td><td> &#32; submitted by &#32; <a href="https://www.reddit.com/user/Winghaven_"> /u/Winghaven_ </a> &#32; to &#32; <a href="https://www.reddit.com/r/PUBATTLEGROUNDS/"> r/PUBATTLEGROUNDS </a> <br/> <span><a href="https://gfycat.com/HarmlessPassionateAnt">[link]</a></span> &#32; <span><a href="https://www.reddit.com/r/PUBATTLEGROUNDS/comments/7wjeoh/that_slow_turn/">[comments]</a></span> </td></tr></table>',
        contentSnippet:
          'submitted by    /u/Winghaven_    to    r/PUBATTLEGROUNDS   [link]   [comments]',
        id: 't3_7wjeoh',
      },
      {
        title: 'Ontario college cancels diploma in homeopathy',
        link:
          'https://www.reddit.com/r/worldnews/comments/7whzg1/ontario_college_cancels_diploma_in_homeopathy/',
        pubDate: '2018-02-10T00:33:22.000Z',
        author: '/u/Errtai_',
        content:
          '&#32; submitted by &#32; <a href="https://www.reddit.com/user/Errtai_"> /u/Errtai_ </a> &#32; to &#32; <a href="https://www.reddit.com/r/worldnews/"> r/worldnews </a> <br/> <span><a href="http://www.cbc.ca/news/health/georgian-college-diploma-homeopathy-pseudoscience-1.4529339">[link]</a></span> &#32; <span><a href="https://www.reddit.com/r/worldnews/comments/7whzg1/ontario_college_cancels_diploma_in_homeopathy/">[comments]</a></span>',
        contentSnippet:
          'submitted by    /u/Errtai_    to    r/worldnews   [link]   [comments]',
        id: 't3_7whzg1',
      },
      {
        title: 'Fun times were had',
        link:
          'https://www.reddit.com/r/BlackPeopleTwitter/comments/7wigrw/fun_times_were_had/',
        pubDate: '2018-02-10T01:53:36.000Z',
        author: '/u/Fudge-Nuggets',
        content:
          '<table> <tr><td> <a href="https://www.reddit.com/r/BlackPeopleTwitter/comments/7wigrw/fun_times_were_had/"> <img src="https://b.thumbs.redditmedia.com/tp3Z_o7DEyb055IVskDwNv1d3PHqRmfRWzcikF7ibLQ.jpg" alt="Fun times were had" title="Fun times were had" /> </a> </td><td> &#32; submitted by &#32; <a href="https://www.reddit.com/user/Fudge-Nuggets"> /u/Fudge-Nuggets </a> &#32; to &#32; <a href="https://www.reddit.com/r/BlackPeopleTwitter/"> r/BlackPeopleTwitter </a> <br/> <span><a href="https://i.redd.it/bd3bkh6okaf01.jpg">[link]</a></span> &#32; <span><a href="https://www.reddit.com/r/BlackPeopleTwitter/comments/7wigrw/fun_times_were_had/">[comments]</a></span> </td></tr></table>',
        contentSnippet:
          'submitted by    /u/Fudge-Nuggets    to    r/BlackPeopleTwitter   [link]   [comments]',
        id: 't3_7wigrw',
      },
      {
        title: 'The Midget Team',
        link:
          'https://www.reddit.com/r/MurderedByWords/comments/7wjrjg/the_midget_team/',
        pubDate: '2018-02-10T06:05:07.000Z',
        author: '/u/brokenglassinbed',
        content:
          '<table> <tr><td> <a href="https://www.reddit.com/r/MurderedByWords/comments/7wjrjg/the_midget_team/"> <img src="https://b.thumbs.redditmedia.com/VYsDygxXTNRwPTRMjvoIIVIfFP9hb39AjQio5LsAjik.jpg" alt="The Midget Team" title="The Midget Team" /> </a> </td><td> &#32; submitted by &#32; <a href="https://www.reddit.com/user/brokenglassinbed"> /u/brokenglassinbed </a> &#32; to &#32; <a href="https://www.reddit.com/r/MurderedByWords/"> r/MurderedByWords </a> <br/> <span><a href="https://i.redd.it/gdt5irgjtbf01.jpg">[link]</a></span> &#32; <span><a href="https://www.reddit.com/r/MurderedByWords/comments/7wjrjg/the_midget_team/">[comments]</a></span> </td></tr></table>',
        contentSnippet:
          'submitted by    /u/brokenglassinbed    to    r/MurderedByWords   [link]   [comments]',
        id: 't3_7wjrjg',
      },
      {
        title:
          'TIL the longest kill shot in military history is claimed by an unnamed Canadian soldier from Joint Task Force 2 (JFT2), who hit the target from 3,450 metres. His heartbeat could have made him miss his target. Canadian soldiers currently claim three of the top five longest confirmed shots recorded.',
        link:
          'https://www.reddit.com/r/todayilearned/comments/7wj13w/til_the_longest_kill_shot_in_military_history_is/',
        pubDate: '2018-02-10T03:34:38.000Z',
        author: '/u/Vinccool96',
        content:
          '<table> <tr><td> <a href="https://www.reddit.com/r/todayilearned/comments/7wj13w/til_the_longest_kill_shot_in_military_history_is/"> <img src="https://b.thumbs.redditmedia.com/owrVYiexWOK80lCyXHwPZvL4EU6uBuqsRI6f_OUat7w.jpg" alt="TIL the longest kill shot in military history is claimed by an unnamed Canadian soldier from Joint Task Force 2 (JFT2), who hit the target from 3,450 metres. His heartbeat could have made him miss his target. Canadian soldiers currently claim three of the top five longest confirmed shots recorded." title="TIL the longest kill shot in military history is claimed by an unnamed Canadian soldier from Joint Task Force 2 (JFT2), who hit the target from 3,450 metres. His heartbeat could have made him miss his target. Canadian soldiers currently claim three of the top five longest confirmed shots recorded." /> </a> </td><td> &#32; submitted by &#32; <a href="https://www.reddit.com/user/Vinccool96"> /u/Vinccool96 </a> &#32; to &#32; <a href="https://www.reddit.com/r/todayilearned/"> r/todayilearned </a> <br/> <span><a href="https://globalnews.ca/news/3552281/snipers-canadian-military/">[link]</a></span> &#32; <span><a href="https://www.reddit.com/r/todayilearned/comments/7wj13w/til_the_longest_kill_shot_in_military_history_is/">[comments]</a></span> </td></tr></table>',
        contentSnippet:
          'submitted by    /u/Vinccool96    to    r/todayilearned   [link]   [comments]',
        id: 't3_7wj13w',
      },
      {
        title: '*Hero*',
        link:
          'https://www.reddit.com/r/WhitePeopleTwitter/comments/7wk0ob/hero/',
        pubDate: '2018-02-10T07:07:34.000Z',
        author: '/u/GallowPlaceholder',
        content:
          '<table> <tr><td> <a href="https://www.reddit.com/r/WhitePeopleTwitter/comments/7wk0ob/hero/"> <img src="https://b.thumbs.redditmedia.com/a59Enu2Th774W12f4Nn5qXb-mqpg7ziLGRy5ym9YB7o.jpg" alt="*Hero*" title="*Hero*" /> </a> </td><td> &#32; submitted by &#32; <a href="https://www.reddit.com/user/GallowPlaceholder"> /u/GallowPlaceholder </a> &#32; to &#32; <a href="https://www.reddit.com/r/WhitePeopleTwitter/"> r/WhitePeopleTwitter </a> <br/> <span><a href="https://i.redd.it/f11wp8zn4cf01.jpg">[link]</a></span> &#32; <span><a href="https://www.reddit.com/r/WhitePeopleTwitter/comments/7wk0ob/hero/">[comments]</a></span> </td></tr></table>',
        contentSnippet:
          'submitted by    /u/GallowPlaceholder    to    r/WhitePeopleTwitter   [link]   [comments]',
        id: 't3_7wk0ob',
      },
      {
        title: 'Firehose vs. Flamethrower',
        link:
          'https://www.reddit.com/r/gifs/comments/7whyek/firehose_vs_flamethrower/',
        pubDate: '2018-02-10T00:28:43.000Z',
        author: '/u/QuaaludeDreams',
        content:
          '<table> <tr><td> <a href="https://www.reddit.com/r/gifs/comments/7whyek/firehose_vs_flamethrower/"> <img src="https://b.thumbs.redditmedia.com/w1zjQBIay0FlZvk55WWVi7D7NYHlPL-Gq59s2HVdF6w.jpg" alt="Firehose vs. Flamethrower" title="Firehose vs. Flamethrower" /> </a> </td><td> &#32; submitted by &#32; <a href="https://www.reddit.com/user/QuaaludeDreams"> /u/QuaaludeDreams </a> &#32; to &#32; <a href="https://www.reddit.com/r/gifs/"> r/gifs </a> <br/> <span><a href="https://imgur.com/ORlw622.gifv">[link]</a></span> &#32; <span><a href="https://www.reddit.com/r/gifs/comments/7whyek/firehose_vs_flamethrower/">[comments]</a></span> </td></tr></table>',
        contentSnippet:
          'submitted by    /u/QuaaludeDreams    to    r/gifs   [link]   [comments]',
        id: 't3_7whyek',
      },
      {
        title:
          'When the Patriots set their account to auto tweet after one million followers',
        link:
          'https://www.reddit.com/r/AccidentalRacism/comments/7wipes/when_the_patriots_set_their_account_to_auto_tweet/',
        pubDate: '2018-02-10T02:35:23.000Z',
        author: '/u/DoctorVanillaBear',
        content:
          '&#32; submitted by &#32; <a href="https://www.reddit.com/user/DoctorVanillaBear"> /u/DoctorVanillaBear </a> &#32; to &#32; <a href="https://www.reddit.com/r/AccidentalRacism/"> r/AccidentalRacism </a> <br/> <span><a href="https://i.redd.it/b9dzrihg8apz.png">[link]</a></span> &#32; <span><a href="https://www.reddit.com/r/AccidentalRacism/comments/7wipes/when_the_patriots_set_their_account_to_auto_tweet/">[comments]</a></span>',
        contentSnippet:
          'submitted by    /u/DoctorVanillaBear    to    r/AccidentalRacism   [link]   [comments]',
        id: 't3_7wipes',
      },
      {
        title:
          'Found some natural frames on the Oregon Coast. Still blown away by this place.. [OC] [2398 x 3000]',
        link:
          'https://www.reddit.com/r/EarthPorn/comments/7whpvs/found_some_natural_frames_on_the_oregon_coast/',
        pubDate: '2018-02-09T23:51:09.000Z',
        author: '/u/nathanielthewise',
        content:
          '<table> <tr><td> <a href="https://www.reddit.com/r/EarthPorn/comments/7whpvs/found_some_natural_frames_on_the_oregon_coast/"> <img src="https://b.thumbs.redditmedia.com/ErXBKLx2q8dLgUBbk2w7MlqlJJaWZkK6lDP1dhMHfkw.jpg" alt="Found some natural frames on the Oregon Coast. Still blown away by this place.. [OC] [2398 x 3000]" title="Found some natural frames on the Oregon Coast. Still blown away by this place.. [OC] [2398 x 3000]" /> </a> </td><td> &#32; submitted by &#32; <a href="https://www.reddit.com/user/nathanielthewise"> /u/nathanielthewise </a> &#32; to &#32; <a href="https://www.reddit.com/r/EarthPorn/"> r/EarthPorn </a> <br/> <span><a href="https://i.redd.it/sk65rt8oy9f01.jpg">[link]</a></span> &#32; <span><a href="https://www.reddit.com/r/EarthPorn/comments/7whpvs/found_some_natural_frames_on_the_oregon_coast/">[comments]</a></span> </td></tr></table>',
        contentSnippet:
          'submitted by    /u/nathanielthewise    to    r/EarthPorn   [link]   [comments]',
        id: 't3_7whpvs',
      },
    ],
    markedAsRead: [],
    bookMarked: [],
    unreadCount: 25,
  },
  '56a031d8-ab02-41dc-aea0-eb1951166b97': {
    items: [
      {
        title: 'Quiet for Android – TCP over sound',
        link: 'https://github.com/quiet/org.quietmodem.Quiet',
        pubDate: 'Sat, 10 Feb 2018 06:07:11 +0000',
        content:
          '<a href="https://news.ycombinator.com/item?id=16346135">Comments</a>',
        contentSnippet: 'Comments',
        isoDate: '2018-02-10T06:07:11.000Z',
      },
      {
        title: 'Protonmail Online Security Guide for Journalists',
        link: 'https://protonmail.com/blog/journalist-online-security-tips/',
        pubDate: 'Sat, 10 Feb 2018 09:00:48 +0000',
        content:
          '<a href="https://news.ycombinator.com/item?id=16346530">Comments</a>',
        contentSnippet: 'Comments',
        isoDate: '2018-02-10T09:00:48.000Z',
      },
      {
        title:
          'Graal: How to use the new JVM JIT compiler in real life [video]',
        link: 'https://www.youtube.com/watch?v=yhtrRhNUHvQ',
        pubDate: 'Sat, 10 Feb 2018 09:57:39 +0000',
        content:
          '<a href="https://news.ycombinator.com/item?id=16346648">Comments</a>',
        contentSnippet: 'Comments',
        isoDate: '2018-02-10T09:57:39.000Z',
      },
      {
        title: 'Multifamily Passive House in Vancouver',
        link:
          'https://www.treehugger.com/green-architecture/multifamily-passive-house-completed-vancouver.html',
        pubDate: 'Sat, 10 Feb 2018 09:33:16 +0000',
        content:
          '<a href="https://news.ycombinator.com/item?id=16346583">Comments</a>',
        contentSnippet: 'Comments',
        isoDate: '2018-02-10T09:33:16.000Z',
      },
      {
        title:
          'PopcornNotify – Send simple emails and text messages from one API',
        link: 'https://popcornnotify.com/',
        pubDate: 'Sat, 10 Feb 2018 02:17:16 +0000',
        content:
          '<a href="https://news.ycombinator.com/item?id=16345465">Comments</a>',
        contentSnippet: 'Comments',
        isoDate: '2018-02-10T02:17:16.000Z',
      },
      {
        title: 'Visual Group Theory: What is a group? (2016) [video]',
        link: 'https://www.youtube.com/watch?v=UwTQdOop-nU',
        pubDate: 'Sat, 10 Feb 2018 04:17:37 +0000',
        content:
          '<a href="https://news.ycombinator.com/item?id=16345844">Comments</a>',
        contentSnippet: 'Comments',
        isoDate: '2018-02-10T04:17:37.000Z',
      },
      {
        title: 'Save the CR100',
        link:
          'https://en.community.sonos.com/controllers-software-228995/save-the-cr100-6800510',
        pubDate: 'Sat, 10 Feb 2018 06:15:09 +0000',
        content:
          '<a href="https://news.ycombinator.com/item?id=16346152">Comments</a>',
        contentSnippet: 'Comments',
        isoDate: '2018-02-10T06:15:09.000Z',
      },
      {
        title:
          "Fertility 'breakthrough' as human eggs grown in lab for first time",
        link:
          'http://www.independent.co.uk/news/health/human-eggs-grown-lab-fertility-breakthrough-first-time-ivf-development-scientists-edinburgh-a8201001.html',
        pubDate: 'Fri, 9 Feb 2018 11:41:34 +0000',
        content:
          '<a href="https://news.ycombinator.com/item?id=16339467">Comments</a>',
        contentSnippet: 'Comments',
        isoDate: '2018-02-09T11:41:34.000Z',
      },
      {
        title: 'We thought we’d pulled a dead person out of the water',
        link:
          'https://www.seattletimes.com/seattle-news/we-thought-wed-pulled-a-dead-person-out-of-the-water-woman-recovers-after-puget-sound-rescue',
        pubDate: 'Sat, 10 Feb 2018 08:50:59 +0000',
        content:
          '<a href="https://news.ycombinator.com/item?id=16346512">Comments</a>',
        contentSnippet: 'Comments',
        isoDate: '2018-02-10T08:50:59.000Z',
      },
      {
        title: 'In web design, everything easy is hard again',
        link: 'https://frankchimero.com/writing/everything-easy-is-hard-again/',
        pubDate: 'Sat, 10 Feb 2018 05:30:45 +0000',
        content:
          '<a href="https://news.ycombinator.com/item?id=16346039">Comments</a>',
        contentSnippet: 'Comments',
        isoDate: '2018-02-10T05:30:45.000Z',
      },
      {
        title: 'The fanciest shopping center in America is expanding',
        link:
          'https://www.bloomberg.com/news/features/2018-02-08/this-mall-is-only-for-the-rich-and-it-s-doing-fine',
        pubDate: 'Fri, 9 Feb 2018 05:33:17 +0000',
        content:
          '<a href="https://news.ycombinator.com/item?id=16338115">Comments</a>',
        contentSnippet: 'Comments',
        isoDate: '2018-02-09T05:33:17.000Z',
      },
      {
        title: 'Asmodee Acquires Lookout Games and Mayfair Games',
        link:
          'https://boardgamegeek.com/blogpost/73620/asmodee-acquires-lookout-games-and-mayfair-games',
        pubDate: 'Sat, 10 Feb 2018 06:38:30 +0000',
        content:
          '<a href="https://news.ycombinator.com/item?id=16346196">Comments</a>',
        contentSnippet: 'Comments',
        isoDate: '2018-02-10T06:38:30.000Z',
      },
      {
        title:
          'OpenBoard – An interactive whiteboard for schools and universities',
        link: 'http://openboard.ch/index.en.html',
        pubDate: 'Fri, 9 Feb 2018 20:43:03 +0000',
        content:
          '<a href="https://news.ycombinator.com/item?id=16343660">Comments</a>',
        contentSnippet: 'Comments',
        isoDate: '2018-02-09T20:43:03.000Z',
      },
      {
        title: 'Designing experiments for understanding performance [pdf]',
        link: 'https://timharris.uk/misc/five-ways.pdf',
        pubDate: 'Sat, 10 Feb 2018 06:08:00 +0000',
        content:
          '<a href="https://news.ycombinator.com/item?id=16346138">Comments</a>',
        contentSnippet: 'Comments',
        isoDate: '2018-02-10T06:08:00.000Z',
      },
      {
        title: 'Uber and Waymo Reach Settlement',
        link: 'https://www.uber.com/newsroom/uber-waymo-settlement/',
        pubDate: 'Fri, 9 Feb 2018 15:54:26 +0000',
        content:
          '<a href="https://news.ycombinator.com/item?id=16341094">Comments</a>',
        contentSnippet: 'Comments',
        isoDate: '2018-02-09T15:54:26.000Z',
      },
      {
        title: 'What William James Got Right About Consciousness',
        link:
          'http://nautil.us/blog/what-william-james-got-right-about-consciousness',
        pubDate: 'Thu, 8 Feb 2018 23:50:21 +0000',
        content:
          '<a href="https://news.ycombinator.com/item?id=16336629">Comments</a>',
        contentSnippet: 'Comments',
        isoDate: '2018-02-08T23:50:21.000Z',
      },
      {
        title: 'Blind Signature',
        link: 'https://en.wikipedia.org/wiki/Blind_signature',
        pubDate: 'Fri, 9 Feb 2018 11:30:47 +0000',
        content:
          '<a href="https://news.ycombinator.com/item?id=16339430">Comments</a>',
        contentSnippet: 'Comments',
        isoDate: '2018-02-09T11:30:47.000Z',
      },
      {
        title:
          'Rocket Lab Reveals Secret Engine and “Kick Stage” for the Electron Rocket',
        link:
          'https://www.popularmechanics.com/space/rockets/a15854376/rocket-lab-engine-kick-stage-electron-rocket/',
        pubDate: 'Sat, 10 Feb 2018 06:12:35 +0000',
        content:
          '<a href="https://news.ycombinator.com/item?id=16346146">Comments</a>',
        contentSnippet: 'Comments',
        isoDate: '2018-02-10T06:12:35.000Z',
      },
      {
        title:
          'Making Sense of the Bias / Variance Trade-Off in Deep Reinforcement Learning',
        link:
          'https://medium.com/mlreview/making-sense-of-the-bias-variance-trade-off-in-deep-reinforcement-learning-79cf1e83d565',
        pubDate: 'Thu, 8 Feb 2018 18:57:12 +0000',
        content:
          '<a href="https://news.ycombinator.com/item?id=16334564">Comments</a>',
        contentSnippet: 'Comments',
        isoDate: '2018-02-08T18:57:12.000Z',
      },
      {
        title:
          "How a Low-Level Apple Employee Leaked Some of the iPhone's Most Sensitive Code",
        link:
          'https://motherboard.vice.com/amp/en_us/article/xw5yd7/how-iphone-iboot-source-code-leaked-on-github',
        pubDate: 'Fri, 9 Feb 2018 21:19:41 +0000',
        content:
          '<a href="https://news.ycombinator.com/item?id=16343910">Comments</a>',
        contentSnippet: 'Comments',
        isoDate: '2018-02-09T21:19:41.000Z',
      },
      {
        title:
          'Care Revolutions (YC S16) Has an Opening for a Back-End Engineer in Los Angeles',
        link: 'https://news.ycombinator.com/item?id=16346432',
        pubDate: 'Sat, 10 Feb 2018 08:11:41 +0000',
        content:
          '<a href="https://news.ycombinator.com/item?id=16346432">Comments</a>',
        contentSnippet: 'Comments',
        isoDate: '2018-02-10T08:11:41.000Z',
      },
      {
        title: 'The Strange and Twisted Life of “Frankenstein”',
        link:
          'https://www.newyorker.com/magazine/2018/02/12/the-strange-and-twisted-life-of-frankenstein?currentPage=all',
        pubDate: 'Sat, 10 Feb 2018 01:41:30 +0000',
        content:
          '<a href="https://news.ycombinator.com/item?id=16345335">Comments</a>',
        contentSnippet: 'Comments',
        isoDate: '2018-02-10T01:41:30.000Z',
      },
      {
        title: 'The House That Spied on Me',
        link: 'https://gizmodo.com/the-house-that-spied-on-me-1822429852',
        pubDate: 'Wed, 7 Feb 2018 19:40:06 +0000',
        content:
          '<a href="https://news.ycombinator.com/item?id=16327367">Comments</a>',
        contentSnippet: 'Comments',
        isoDate: '2018-02-07T19:40:06.000Z',
      },
      {
        title: 'Starfish See Pretty Well in the Deep Ocean',
        link: 'https://www.nytimes.com/2018/02/07/science/starfish-eyes.html',
        pubDate: 'Thu, 8 Feb 2018 11:53:53 +0000',
        content:
          '<a href="https://news.ycombinator.com/item?id=16331573">Comments</a>',
        contentSnippet: 'Comments',
        isoDate: '2018-02-08T11:53:53.000Z',
      },
      {
        title:
          "Backpackers, Don't Listen to Slate: Science Does Support Stream Water Treatment",
        link:
          'http://blogs.discovermagazine.com/science-sushi/2018/02/08/backpackers-dont-listen-to-slate-the-science-does-support-water-treatment/',
        pubDate: 'Sat, 10 Feb 2018 09:45:23 +0000',
        content:
          '<a href="https://news.ycombinator.com/item?id=16346615">Comments</a>',
        contentSnippet: 'Comments',
        isoDate: '2018-02-10T09:45:23.000Z',
      },
      {
        title:
          'Symbolic Assembly: Using Clojure to Meta-Program Bytecode (2017) [video]',
        link: 'https://www.youtube.com/watch?v=eDad1pvwX34',
        pubDate: 'Fri, 9 Feb 2018 19:13:37 +0000',
        content:
          '<a href="https://news.ycombinator.com/item?id=16343020">Comments</a>',
        contentSnippet: 'Comments',
        isoDate: '2018-02-09T19:13:37.000Z',
      },
      {
        title: 'Anatomy of a Ceph meltdown',
        link:
          'http://chneukirchen.org/blog/archive/2018/01/anatomy-of-a-ceph-meltdown.html',
        pubDate: 'Fri, 9 Feb 2018 19:19:50 +0000',
        content:
          '<a href="https://news.ycombinator.com/item?id=16343054">Comments</a>',
        contentSnippet: 'Comments',
        isoDate: '2018-02-09T19:19:50.000Z',
      },
      {
        title: 'Elderly Influencers in East Asia',
        link:
          'https://thesocietypages.org/cyborgology/2018/02/07/elderly-influencers-in-east-asia/',
        pubDate: 'Thu, 8 Feb 2018 07:08:43 +0000',
        content:
          '<a href="https://news.ycombinator.com/item?id=16330728">Comments</a>',
        contentSnippet: 'Comments',
        isoDate: '2018-02-08T07:08:43.000Z',
      },
      {
        title: 'The Birth of a Psychedelic Culture (2010)',
        link:
          'http://realitysandwich.com/34204/beginning_birth_psychedelic_culture/',
        pubDate: 'Wed, 7 Feb 2018 23:42:36 +0000',
        content:
          '<a href="https://news.ycombinator.com/item?id=16328988">Comments</a>',
        contentSnippet: 'Comments',
        isoDate: '2018-02-07T23:42:36.000Z',
      },
      {
        title: 'Postmortem of Service Outage at 3.4M Concurrent Users',
        link:
          'https://www.epicgames.com/fortnite/en-US/news/postmortem-of-service-outage-at-3-4m-ccu',
        pubDate: 'Fri, 9 Feb 2018 14:42:50 +0000',
        content:
          '<a href="https://news.ycombinator.com/item?id=16340462">Comments</a>',
        contentSnippet: 'Comments',
        isoDate: '2018-02-09T14:42:50.000Z',
      },
    ],
    markedAsRead: [],
    bookMarked: [],
    unreadCount: 30,
  },
};

module.exports = {
  config,
  data,
};
