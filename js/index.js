const albunsElement = document.querySelector('#render-albuns-ul');

// Com está incrivel funcão economizei +30 linhas, foi de 40 para 70, parabéns pedro do passado :)
function createElement(element, attributes, textNode) {
  const newElement = document.createElement(element);

  for (const attribute in attributes) {
    if (attributes.hasOwnProperty(attribute)) {
      const value = attributes[attribute];
      newElement.setAttribute(attribute, value);
    }
  }

  if (textNode) {
    const newTextNode = document.createTextNode(textNode);
    newElement.appendChild(newTextNode);
  }

  return newElement;
}

albumData.map((item) => {
  const { artist, album, date, link, linkImg } = item;

  const albumItemElement = createElement('li', {
    class: 'col',
    'data-aos': 'zoom-in-up',
  });

  const imgAlbumLink = createElement('a', {
    href: link,
    target: 'blank',
    rel: 'noopener noreferrer',
  });

  const imgElement = createElement('img', {
    src: linkImg,
    alt: album,
  });

  const artistElement = createElement(
    'p',
    {
      class: 'artist-element',
    },
    artist
  );

  const albumElement = createElement(
    'p',
    {
      class: 'album-element',
    },
    album
  );

  const dateElement = createElement(
    'p',
    {
      class: 'date-element',
    },
    date
  );

  imgAlbumLink.appendChild(imgElement);
  albumItemElement.appendChild(imgAlbumLink);
  albumItemElement.appendChild(artistElement);
  albumItemElement.appendChild(albumElement);
  albumItemElement.appendChild(dateElement);
  albunsElement.appendChild(albumItemElement);
});
