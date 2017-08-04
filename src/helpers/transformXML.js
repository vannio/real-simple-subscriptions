import uuid from 'uuid/v5';

const getNodeValue = (node, selectors) => {
	node = node.querySelectorAll(selectors)[0];
	const nodeValue = node && node.firstChild ? node.firstChild.nodeValue : '';
	const firstParagraph = nodeValue.match(/.+?(<\/p>)/);
	return firstParagraph ? firstParagraph[0] : nodeValue;
};

const getFeedLink = entryNode => {
  const links = entryNode.getElementsByTagName('link');
  if (links.length === 0) {
    const guids = entryNode.getElementsByTagName('guid');
    if (
      guids.length === 0 ||
      guids[0].getAttribute('ispermalink') === 'false'
    ) {
      return '';
    };
    return getNodeValue(guids[0], '');
  }

  for (var i = 0; i < links.length; i++) {
    const link = links[i];
    if (
      link.getAttribute('href') != null &&
      (
        link.getAttribute('rel') === 'alternate' ||
        link.getAttribute('rel') === null
      )
    ) {
      return link.getAttribute('href');
    }

    if (
      link.childNodes.length === 1 &&
      (
        link.childNodes[0].nodeType === 3 ||
        link.childNodes[0].nodeType === 4
      )
    ) {
      return link.childNodes[0].nodeValue;
    }
  }
  return '';
};

const transformXML = xml => {
  const xmlResponse = (new DOMParser()).parseFromString(xml, 'text/xml');
  const entryNodes = Array.prototype.slice.call(
    xmlResponse.querySelectorAll('item, entry'), 0
  );

  return entryNodes.map(entryNode => ({
    id: uuid(getFeedLink(entryNode), uuid.URL),
  	url: getFeedLink(entryNode),
  	title: getNodeValue(entryNode, 'title'),
  	content: getNodeValue(entryNode, 'description, content'),
    media: getNodeValue(entryNode, 'image, media'),
  	date: getNodeValue(entryNode, 'pubDate, updated')
  }));
};

export default transformXML;
