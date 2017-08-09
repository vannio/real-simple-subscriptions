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
- [x] Unmark as read
- [x] Bookmark items to read later
- [ ] Memoize
- [ ] Clear items after a week<sup>^3</sup>

**Config Options**

- [x] RSS Subscriptions (obviously)
- [x] Limit item count on homepage
- [x] Mark as read upon clicking link
- [x] Accent colour
- [x] Interval to fetch data
- [ ] Custom date formats<sup>* ^1</sup>
- [ ] Sort / Choose order of subscriptions<sup>^2</sup>
- [ ] Textbox input to add multiple subscriptions, separated by newlines/whitespace/commas<sup>^4</sup>
- [x] Choose to hide images from display<sup>*</sup>
- [x] Grey out _or_ hide read items<sup>*</sup>
- [ ] Per subscription config for displaying images, summary, content etc.
- [ ] Random accent colour

---

**Maybe TODO**

- [ ] Imports/Exports OPML files into the manager, or your bookmark folder<sup>*</sup>
- [ ] Manage subscriptions with a bookmark folder<sup>*</sup>
- [ ] Social media share links
- [ ] Discover both RSS and Atom feeds within pages (with finder installed)<sup>*</sup>
- [ ] Chrome badge with unread items count<sup>*</sup>
- [ ] Group / Tag subscriptions

<sup>*</sup> features from the original app
<br>
<sup>^</sup> Order of priority
