function millisecToHumanReadable(ms) {
  const date = new Date(ms);
  const seconds = date.getUTCSeconds();
  return `${date.getUTCMinutes()}:${seconds < 10 ? `0${seconds}` : seconds }`;
}

function releasedYear(albumDetail) {
  if (albumDetail && albumDetail.releasedAt) {
    return `${albumDetail.releasedAt.split('-')[0]}年`;
  } else {
    return '';
  }
}

export default Util = {
  millisecToHumanReadable,
  releasedYear,
};