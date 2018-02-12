const formatDate = date => {
  if (!date) {
    return;
  }

  const options = {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  };

  const d = new Date(date.toString());
  return d.toLocaleTimeString('en-gb', options);
};

export default formatDate;
