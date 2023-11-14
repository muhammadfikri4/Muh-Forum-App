const timestamp = (date) => {
    const now = new Date();
    const posted = new Date(date);
    const time = now - posted;
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor(time / (1000 * 60 * 60));
    const minutes = Math.floor(time / (1000 * 60));
    const seconds = Math.floor(time / 1000);

  if (days > 0) {
    return `${days} Days Ago`;
  } if (hours > 0) {
    return `${hours} Hours Ago`;
  } if (minutes > 0) {
    return `${minutes} Minutes Ago`;
  } if (seconds > 0) {
    return `${seconds} Seconds Ago`;
  }
  return 'Just Now';
}

const month = []

export default timestamp;