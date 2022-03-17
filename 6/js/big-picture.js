import {similarPhoto} from './miniature.js';
const bigPicturePreview = document.querySelector('.big-picture__preview'); // большое фото
const bigPictureShow = document.querySelector('.big-picture'); // Здесь класс 'hidden' скрывает большое фото
const picture = document.querySelectorAll('.picture'); // коллекция 25 элементов
const socialCommentCount = document.querySelector('.social__comment-count'); // Блок счётчика комментариев
const commentsLoader = document.querySelector('.comments-loader'); // Блок счётчика загрузки новых комментариев


picture.forEach((photo) => {
  photo.addEventListener('click', () => {
    bigPictureShow.classList.remove('hidden');
    // Записываем в значение src='url' большого фото новое значение src='url' фото из 25 эл-тов коллекции:
    bigPicturePreview.querySelector('.big-picture__img img').src = photo.querySelector('.picture img').src;

    // Записываем в значение лайков большого фото новое значение лайков фото из 25 эл-тов коллекции:
    document.querySelector('.likes-count').textContent = photo.querySelector('.picture__likes').textContent;

    // Записываем в значение комментариев большого фото новое значение комментариев фото из 25 эл-тов коллекции:
    document.querySelector('.comments-count').textContent = photo.querySelector('.picture__comments').textContent;

    // Описание фотографии description вставьте строкой в блок .social__caption:
    document.querySelector('.social__caption').textContent = photo.querySelector('.picture img').alt;

    // добавил <body> класс modal-open, чтобы контейнер с фото позади не прокручивался при скролле.
    document.querySelector('body').classList.add('modal-open');
    socialCommentCount.classList.add('hidden'); // Блок счётчика комментариев спрятали временно
    commentsLoader.classList.add('hidden'); // Блок счётчика загрузки новых комментариев спрятали временно

    // Комментарии должны вставляться в блок .social__comments
    similarPhoto.forEach((words) => {

      if (document.querySelector('.social__caption').textContent === words.description) {
        const messages = document.querySelectorAll('.social__text'); // комментарии в большом фото
        messages[0].textContent  = words.comments[0].message;
        messages[1].textContent  = words.comments[1].message;

        const avatar = document.querySelectorAll('.social__comment img'); // аватар комментатора
        avatar[0].src = words.comments[0].avatar;
        avatar[1].src = words.comments[1].avatar;

        const names = document.querySelectorAll('.social__comment img'); // имя комментатора
        names[0].alt = words.comments[0].name;
        names[1].alt = words.comments[1].name;

      }
    });

  });

  // Код для закрытия окна большого фото
  const closeButtonBigPicture = document.querySelector('.big-picture__cancel');
  closeButtonBigPicture.addEventListener('click', () => {
    bigPictureShow.classList.add('hidden'); // Вернём класс 'hidden', спрячем большое фото
    document.querySelector('body').classList.remove('modal-open'); // вернём скролл на контейнер с фото позади большого фото
  });

  //Кнопка  Escape для закрытия окна большого фото
  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      bigPictureShow.classList.add('hidden'); // Вернём класс 'hidden', спрячем большое фото
      document.querySelector('body').classList.remove('modal-open'); // вернём скролл на контейнер с фото позади большого фото
    }
  });

});


