export function imageTemplate({
  largeImageURL,
  tags,
  likes,
  views,
  comments,
  downloads,
  webformatURL,
}) {
  return `
      <a href="${largeImageURL}" class="gallery-item" data-lightbox="image-${largeImageURL}" data-title="${tags}">
        <div class="item-gallery">
          <img src="${webformatURL}" alt="${tags}" class="list-img">
          <figcaption class="figcaption">
            <div class="figcaption-item">
              <span>Likes</span>
              <span class="counter">${likes}</span>
            </div>
            <div class="figcaption-item">
              <span>Views</span>
              <span class="counter">${views}</span>
            </div>
            <div class="figcaption-item">
              <span>Comments</span>
              <span class="counter">${comments}</span>
            </div>
            <div class="figcaption-item">
              <span>Downloads</span>
              <span class="counter">${downloads}</span>
            </div>
          </figcaption>
        </div>
      </a>
    `;
}
