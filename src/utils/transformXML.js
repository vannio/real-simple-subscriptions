import uuid from 'uuid/v5';
const parser = new DOMParser();

const getNodeText = (node, selectors) => {
  const selected = node.querySelector(selectors);

  if (!selected) {
    return '';
  }

  return selected.firstChild ? selected.firstChild.nodeValue : '';
};

const getFeedLink = entryNode => {
  const links = entryNode.getElementsByTagName('link');

  if (links.length === 0) {
    const guids = entryNode.getElementsByTagName('guid');

    if (guids.length === 0 || guids[0].getAttribute('ispermalink') === 'false') {
      return '';
    };

    return getNodeText(guids[0], '');
  }

  for (var i = 0; i < links.length; i++) {
    const link = links[i];
    const href = link.getAttribute('href');
    const rel = link.getAttribute('rel');
    const childNodes = link.childNodes;

    if (href !== null && (rel === 'alternate' || rel === null)) {
      return href;
    }

    if (childNodes.length === 1 && (childNodes[0].nodeType === 3 || childNodes[0].nodeType === 4)) {
      return childNodes[0].nodeValue;
    }
  }

  return '';
};

const transformXML = xml => {
  const parsedXML = parser.parseFromString(xml, 'text/xml');
  const entryNodes = Array.from(parsedXML.querySelectorAll('item, entry'));

  return entryNodes.map(entryNode => ({
    id: uuid(getFeedLink(entryNode), uuid.URL),
    url: getFeedLink(entryNode),
    title: getNodeText(entryNode, 'title'),
    description: getNodeText(entryNode, 'description, summary'),
    content: getNodeText(entryNode, 'content'),
    date: getNodeText(entryNode, 'pubDate, updated')
  }));
};

export const getFirstParagraph = text =>
	text.match(/.+?(<\/p>)/) ? text.match(/.+?(<\/p>)/)[0] : text;

export default transformXML;
