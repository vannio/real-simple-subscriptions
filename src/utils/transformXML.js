import uuid from 'uuid/v5';
import omitBy from 'lodash/omitBy';

export const getFirstParagraph = text =>
  text.match(/.+?(<\/p>)/) ? text.match(/.+?(<\/p>)/)[0] : text;

const getNodeText = (node, selectors) => {
  const selected = node.querySelector(selectors);

  if (!selected) {
    return null;
  }

  return selected.firstChild ? selected.firstChild.nodeValue : null;
};

const getFeedLink = entryNode => {
  const links = entryNode.getElementsByTagName('link');

  if (links.length === 0) {
    const guids = entryNode.getElementsByTagName('guid');

    if (
      guids.length === 0 ||
      guids[0].getAttribute('ispermalink') === 'false'
    ) {
      return null;
    }

    return getNodeText(guids[0], null);
  }

  for (var i = 0; i < links.length; i++) {
    const link = links[i];
    const href = link.getAttribute('href');
    const rel = link.getAttribute('rel');
    const childNodes = link.childNodes;

    if (href !== null && (rel === 'alternate' || rel === null)) {
      return href;
    }

    if (
      childNodes.length === 1 &&
      (childNodes[0].nodeType === 3 || childNodes[0].nodeType === 4)
    ) {
      return childNodes[0].nodeValue;
    }
  }

  return null;
};

const transformNodes = nodes =>
  nodes.map(entryNode =>
    omitBy(
      {
        id: uuid(getFeedLink(entryNode), uuid.URL),
        url: getFeedLink(entryNode),
        title: getNodeText(entryNode, 'title'),
        description: getNodeText(entryNode, 'description, summary'),
        content: getNodeText(entryNode, 'content'),
        date: getNodeText(entryNode, 'pubDate, updated'),
      },
      val => !val,
    ),
  );

const xmlToNodes = xml => {
  const parser = new DOMParser();
  const parsedXML = parser.parseFromString(xml, 'text/xml');
  return Array.from(parsedXML.querySelectorAll('item, entry'));
};

const transformXML = xml => {
  const nodes = xmlToNodes(xml);
  return transformNodes(nodes);
};

export default transformXML;
