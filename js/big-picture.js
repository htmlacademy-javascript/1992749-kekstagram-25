
const bigPictureOverlay = document.querySelector('.big-picture'); // Полноэкранный показ изображения
const currentBigPicture = document.querySelector('.big-picture__img img'); // текущее изображение для полноэкранного показа
const likesCountPicture = document.querySelector('.likes-count'); // Количество лайков текущего изображения
const commentsCountPicture = document.querySelector('.comments-count'); // Количество комментариев текущего изображения
const descriptionCountPicture = document.querySelector('.social__caption'); // Описание фотографии текущего изображения
const blockCommentsCountPicture = document.querySelector('.social__comment-count'); // Блоки счётчика комментариев текущего изображения
const blockCommentsLoaderPicture = document.querySelector('.comments-loader'); // Блок загрузки новых комментариев текущего изображения
const modalOpenScroll = document.querySelector('body'); // Тег <body> для фиксации контейнера с фотографиями позади во время полноэкранного показа

const socialComments = document.querySelector('.social__comments'); // Блок комментариев под фотографией
//socialComments.innerHTML = ''; // чистим блок комментариев под фотографией для заполнения текущими комментариями
const templateComment = document.createElement('li'); // Готовим шаблон под комментарии от пользователей
templateComment.classList.add('social__comment');
const elementHTML = '<img class="social__picture" src="img/avatar-2.svg" alt="Аврелий" width="35" height="35"><p class="social__text"></p>';
templateComment.innerHTML = elementHTML;


const showBigImage = function(image) {
  bigPictureOverlay.classList.remove('hidden'); // Полноэкранный показ изображения открыть
  currentBigPicture.src = image.url; // Текущее изображение для полноэкранного показа
  likesCountPicture.textContent = image.likes; // Количество лайков текущего изображения
  commentsCountPicture.textContent = image.comments.length; // Количество комментариев текущего изображения
  descriptionCountPicture.textContent = image.description; // Описание фотографии текущего изображения
  blockCommentsCountPicture.classList.add('hidden'); // Блоки счётчика комментариев текущего изображения 'временно убираем'
  blockCommentsLoaderPicture.classList.add('hidden'); // Блок загрузки новых комментариев текущего изображения 'временно убираем'
  modalOpenScroll.classList.add('modal-open'); // Фиксируем контейнер с фотографиями позади во время полноэкранного показа

  socialComments.innerHTML = ''; // чистим блок комментариев под фотографией для заполнения текущими комментариями
  image.comments.forEach((element) => {

    const clone = templateComment.cloneNode(true);
    clone.querySelector('img').src = element.avatar;
    clone.querySelector('img').alt = element.name;
    clone.querySelector('p').textContent = element.message;
    socialComments.append(clone);

  });

};

const bigPictureClosed = document.querySelector('.big-picture__cancel'); // Кнопка для выхода из полноэкранного просмотра изображения
bigPictureClosed.addEventListener('click', () => {
  bigPictureOverlay.classList.add('hidden'); // Полноэкранный показ изображения закрыть
  modalOpenScroll.classList.remove('modal-open'); // Возвращаем скролл на экран
});
document.addEventListener('keydown', (evt) => { if (evt.keyCode === 27) { // ESC Полноэкранный показ изображения закрыть
  bigPictureOverlay.classList.add('hidden');
  modalOpenScroll.classList.remove('modal-open'); // Возвращаем скролл на экран
}
});

export { showBigImage }; // экспорт в самом низу кода

