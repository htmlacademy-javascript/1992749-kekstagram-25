//
import { isEscapeKey } from './util.js'; // короткая проверка на true для клавиши Escape

// Это блок const для большого фото
const bigPicturePreview = document.querySelector('.big-picture__preview'); // большое фото
const bigPictureShow = document.querySelector('.big-picture'); // Здесь класс 'hidden' скрывает большое фото
const socialCommentCount = document.querySelector('.social__comment-count'); // Блок счётчика комментариев
const commentsLoader = document.querySelector('.comments-loader'); // Блок счётчика загрузки новых комментариев

// Это блок const для комментариев на большом фото:
const commentTemplate = document.querySelector('.social__comments li'); // Шаблон из Первого комментария от других пользователей
const commentDocumentFragment = document.createDocumentFragment(); // создадим DocumentFragment для комментариев
const boxForComments = document.querySelector('.social__comments'); // Коробка под комментарии
boxForComments.innerHTML = ''; // Пустая коробка - остаётся только <ul class="social__comments"></ul>

// Это кнопка  Escape для закрытия окна большого фото
const onBigPictureShowEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    bigPictureShow.classList.add('hidden'); // Вернём класс 'hidden', спрячем большое фото
    document.querySelector('body').classList.remove('modal-open'); // вернём скролл на контейнер с фото позади большого фото
    //document.removeEventListener('keydown', onBigPictureShowEscKeydown); // Это удаление кнопки Escape
    boxForComments.innerHTML = ''; // Очистим коробку с комментариями
  }
};
document.addEventListener('keydown', onBigPictureShowEscKeydown); // Это вызов кнопки Escape

// Код для закрытия окна большого фото
const closeButtonBigPicture = document.querySelector('.big-picture__cancel'); //

closeButtonBigPicture.addEventListener('click', () => {
  bigPictureShow.classList.add('hidden'); // Вернём класс 'hidden', спрячем большое фото
  document.querySelector('body').classList.remove('modal-open'); // вернём скролл на контейнер с фото позади большого фото
  boxForComments.innerHTML = ''; // Очистим коробку с комментариями
}); // click

// openBigPhoto работает в модуле miniature.js внутри цикла cloneTemplate.addEventListener('click', () => {openBigPhoto(photo);});
const openBigPhoto = (photo) => {
  bigPictureShow.classList.remove('hidden'); // показываем большое фото

  // Записываем в значение src='url' большого фото новое значение src='url' фото из 25 эл-тов коллекции:
  bigPicturePreview.querySelector('.big-picture__img img').src = photo.url;

  // Записываем в значение лайков большого фото новое значение лайков фото из 25 эл-тов коллекции:
  document.querySelector('.likes-count').textContent = photo.likes;

  // Записываем в значение комментариев большого фото новое значение комментариев фото из 25 эл-тов коллекции:
  document.querySelector('.comments-count').textContent = photo.comments.length;

  // Описание фотографии description вставьте строкой в блок .social__caption:
  document.querySelector('.social__caption').textContent = photo.description;

  // добавил <body> класс modal-open, чтобы контейнер с фото позади не прокручивался при скролле.
  document.querySelector('body').classList.add('modal-open');

  socialCommentCount.classList.add('hidden'); // Блок счётчика комментариев спрятали временно
  commentsLoader.classList.add('hidden'); // Блок счётчика загрузки новых комментариев спрятали временно

  // Блок комментариев под большим фото
  for (let j = 0; j < photo.comments.length; j++) {
    const cloneTemplateComment = commentTemplate.cloneNode(true); // клонируем шаблон для большого фото
    cloneTemplateComment.querySelector('.social__text').textContent = photo.comments[j].message; //  комментарии в большом фото
    cloneTemplateComment.querySelector('.social__comment img').src = photo.comments[j].avatar; // аватар комментатора
    cloneTemplateComment.querySelector('.social__comment img').alt = photo.comments[j].name; // имя комментатора

    commentDocumentFragment.appendChild(cloneTemplateComment); // сохраним шаблон большого фото
  }
  boxForComments.appendChild(commentDocumentFragment); // добавление комментария в блок .social__comments
};

export { openBigPhoto }; // экспорт в самом низу кода
