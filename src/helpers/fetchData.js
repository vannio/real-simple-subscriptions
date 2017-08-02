import transformXML from './transformXML';

const fetchData = url =>
  fetch(url)
    .then(response => response.text())
    .then(xml => transformXML(xml));

export default fetchData;
