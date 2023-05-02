function makeImageMarkup({ hits }) {
  const markup = hits.map(
    ({
      largeImageURL,
      webformatURL,
      tags,
      likes,
      views,
      comments,
      downloads,
    }) => `<div class='photo-card'>
    <div class='container-card'>
      <a href='${largeImageURL}'><img src='${webformatURL}' alt='${tags}' loading='lazy' /></a>

    </div>
    <div class='info'>
      <p class='info-item'>
        <b>Likes ${likes}</b>
      </p>
      <p class='info-item'>
        <b>Views ${views}</b>
      </p>
      <p class='info-item'>
        <b>Comments ${comments}</b>
      </p>
      <p class='info-item'>
        <b>Downloads ${downloads}</b>
      </p>
    </div>
  </div> `
  );

  return markup.join('');
}

export { makeImageMarkup };
