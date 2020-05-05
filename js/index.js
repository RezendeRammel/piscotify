const albunsElement = document.querySelector('#render-albuns-ul');

albumData.map((item) => {
  const { artist, album, date, link, linkImg } = item;
  const albumItemElement = document.createElement('li');
  albumItemElement.setAttribute('class', 'col');

  const imgAlbumLink = document.createElement('a');
  imgAlbumLink.setAttribute('href', link);
  imgAlbumLink.setAttribute('target', 'blank');
  imgAlbumLink.setAttribute('rel', 'noopener noreferrer');
  imgAlbumLink.setAttribute('data-aos', 'zoom-in');
  
  const imgElement = document.createElement('img');
  imgElement.setAttribute('src', linkImg);
  imgElement.setAttribute('alt', album);

  const artistElement = document.createElement('p');
  const artistElementText = document.createTextNode(artist);
  artistElement.setAttribute('class', 'artist-element');
  artistElement.appendChild(artistElementText);

  const albumElement = document.createElement('p');
  const albumElementText = document.createTextNode(album);
  albumElement.setAttribute('class', 'album-element');
  albumElement.appendChild(albumElementText);

  const dateElement = document.createElement('p');
  const dateElementText = document.createTextNode(date);
  dateElement.setAttribute('class', 'date-element');
  dateElement.appendChild(dateElementText);

  imgAlbumLink.appendChild(imgElement);

  albumItemElement.appendChild(imgAlbumLink);
  albumItemElement.appendChild(artistElement);
  albumItemElement.appendChild(albumElement);
  albumItemElement.appendChild(dateElement);

  albunsElement.appendChild(albumItemElement);
});

{
  /* <li class="col">
  <img src="https://i.scdn.co/image/ab67616d00001e021eb5e996639036a49b09f1e5" alt="">
  <p>Legião Urbana</p>
  <p>Dois</p>
  <p>1986</p>
</li> */
}
