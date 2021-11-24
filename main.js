var addImageButton = document.querySelector('button');
var gallery = document.querySelector('main');
var imageUrlInput = document.querySelector('input');
var imageUrls = [];

addImageButton.addEventListener('click', pushImgUrlValue);

function pushImgUrlValue() {
  if (imageUrlInput.value !== '') {
    imageUrls.push(imageUrlInput.value);
  }
  imageUrlInput.value = '';
  updateGallery();
}

function updateGallery() {
  gallery.innerHTML = '';
  for (var i = 0; i < imageUrls.length; i++) {
    var imageElement = document.createElement('img');
    imageElement.className = 'gallery-image';
    imageElement.src = imageUrls[i];
    gallery.appendChild(imageElement);
  }
}
