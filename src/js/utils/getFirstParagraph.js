export const getFirstParagraph = (text = '') =>
  text.match(/.+?(<\/p>)/) ? text.match(/.+?(<\/p>)/)[0] : text;
