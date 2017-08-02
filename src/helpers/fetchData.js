import transformXML from './transformXML';

const fetchData = url =>
  fetch(url)
    .then(response => response.text())
    .then(data => transformXML(data));

export default fetchData;
