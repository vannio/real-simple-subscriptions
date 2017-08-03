# Really Simple Subscriptions

I've been using the [Slick RSS](https://chrome.google.com/webstore/detail/slick-rss/ealjoljnibpdkocmldliaoojpgdkcdob?hl=en) Chrome extension for ages because I like how simple, unobtrusive and self-contained it is, BUT it hasn't been updated since 2012! This is my attempt to build a similarly useful extension.

**Setup**

Clone, then run `yarn install` to install dependencies. Serve the app with `yarn start`.

**Build**

Run `yarn build`, then load the `/build` directory as an unpacked extension in Chrome.

---

**Features**

- [x] Replace the default newtab
- [x] View all subscriptions on homepage
- [x] Filter by subscription
- [x] Mark individual items as 'read'
- [x] Mark _all_ items as read
- [ ] Bookmark items to read later *
- [ ] Chrome badge with unread items count *
- [ ] Unmark as read

**Config Options**

- [x] RSS Subscriptions (obviously)
- [x] Limit item count on homepage
- [x] Mark as read upon clicking link
- [x] Accent colour
- [x] Interval to fetch data
- [ ] Custom date formats *
- [ ] Sort / Choose order of subscriptions
- [ ] Group / Tag subscriptions
- [ ] Block images and iframes from being displayed *
- [ ] Grey out _or_ hide read items *

---

**Maybe TODO**

- [ ] Imports/Exports OPML files into the manager, or your bookmark folder *
- [ ] Manage subscriptions with a bookmark folder *
- [ ] Social media share links
- [ ] Discover both RSS and Atom feeds within pages (with finder installed) *

\* features from the original app
