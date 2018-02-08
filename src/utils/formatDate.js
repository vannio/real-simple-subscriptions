const formatDate = date => {
  if (date.length > 0) {
    var options = {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    };
    var d = new Date(date.toString());
    return d.toLocaleTimeString('en-gb', options);
  }
  return date;
};

export default formatDate;
