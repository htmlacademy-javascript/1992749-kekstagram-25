import { isEscapeKey } from './util.js'; // короткая проверка на true для клавиши Escape
import { createPhoto } from './data.js'; // импортируем модуль для генерации данных для коллекции миниатюр из 25 элементов

const pictures = document.querySelector('.pictures'); // Контейнер для изображений от других пользователей 25
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture'); // Шаблон для фотографий

const similarPhoto = createPhoto(); // создание коллекции 25 элементов
const photoDocumentFragment = document.createDocumentFragment(); // создадим DocumentFragment для изображений

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
const onBigPictureShowEscKeydown = () => {
  if (isEscapeKey) {
    bigPictureShow.classList.add('hidden'); // Вернём класс 'hidden', спрячем большое фото
    document.querySelector('body').classList.remove('modal-open'); // вернём скролл на контейнер с фото позади большого фото
    document.removeEventListener('keydown', onBigPictureShowEscKeydown); // Это удаление кнопки Escape
    boxForComments.innerHTML = ''; // Очистим коробку с комментариями
  }
};

// Блок миниатюр и большого фото
similarPhoto.forEach((photo, i) => {
  const cloneTemplateMiniature = pictureTemplate.cloneNode(true); // клонируем шаблон для миниатюр
  cloneTemplateMiniature.querySelector('.picture__img').src = photo.url; // адрес url как атрибут src для миниатюр
  cloneTemplateMiniature.querySelector('.picture__likes').textContent = photo.likes; // количество лайков для миниатюр
  cloneTemplateMiniature.querySelector('.picture__comments').textContent = photo.comments.length; // количество комментариев для миниатюр
  cloneTemplateMiniature.querySelector('.picture__img').alt = photo.description; // описание фотографии автора

  photoDocumentFragment.appendChild(cloneTemplateMiniature); // вставим шаблон в photoDocumentFragment
  pictures.appendChild(photoDocumentFragment); // вставим photoDocumentFragment в контейнер для изображений

  // Это блок кода для большого фото
  const picture = document.querySelectorAll('.picture'); // коллекция 25 элементов для большого фото

  picture[i].addEventListener('click', () => {

    bigPictureShow.classList.remove('hidden'); // показываем большое фото
    // Записываем в значение src='url' большого фото новое значение src='url' фото из 25 эл-тов коллекции:
    bigPicturePreview.querySelector('.big-picture__img img').src = picture[i].querySelector('.picture img').src;

    // Записываем в значение лайков большого фото новое значение лайков фото из 25 эл-тов коллекции:
    document.querySelector('.likes-count').textContent = picture[i].querySelector('.picture__likes').textContent;

    // Записываем в значение комментариев большого фото новое значение комментариев фото из 25 эл-тов коллекции:
    document.querySelector('.comments-count').textContent = picture[i].querySelector('.picture__comments').textContent;

    // Описание фотографии description вставьте строкой в блок .social__caption:
    document.querySelector('.social__caption').textContent = picture[i].querySelector('.picture img').alt;

    // добавил <body> класс modal-open, чтобы контейнер с фото позади не прокручивался при скролле.
    document.querySelector('body').classList.add('modal-open');
    socialCommentCount.classList.add('hidden'); // Блок счётчика комментариев спрятали временно
    commentsLoader.classList.add('hidden'); // Блок счётчика загрузки новых комментариев спрятали временно

    // Код для закрытия окна большого фото
    const closeButtonBigPicture = document.querySelector('.big-picture__cancel');

    closeButtonBigPicture.addEventListener('click', () => {
      bigPictureShow.classList.add('hidden'); // Вернём класс 'hidden', спрячем большое фото
      document.querySelector('body').classList.remove('modal-open'); // вернём скролл на контейнер с фото позади большого фото
      boxForComments.innerHTML = ''; // Очистим коробку с комментариями
    }); // click

    document.addEventListener('keydown', onBigPictureShowEscKeydown); // Это вызов кнопки Escape

    // Блок комментариев под большим фото
    // сравнение по значению адресов фотографий из массива для больших фото и массива миниатюр:
    if (picture[i].querySelector('.picture__img').src === `http://localhost:3000/${similarPhoto[i].url}`) {
      // подключаем комментарии к большому фото из коллекции 25
      for (let j = 0; j < similarPhoto[i].comments.length; j++) {
        const cloneTemplateComment = commentTemplate.cloneNode(true); // клонируем шаблон для большого фото
        cloneTemplateComment.querySelector('.social__text').textContent = similarPhoto[i].comments[j].message; //  комментарии в большом фото
        cloneTemplateComment.querySelector('.social__comment img').src = similarPhoto[i].comments[j].avatar; // аватар комментатора
        cloneTemplateComment.querySelector('.social__comment img').alt = similarPhoto[i].comments[j].name; // имя комментатора

        commentDocumentFragment.appendChild(cloneTemplateComment); // сохраним шаблон большого фото
      }
      boxForComments.appendChild(commentDocumentFragment); // добавление комментария в блок .social__comments
    }

  }); // click большого фото

}); // similarPhoto.forEach((photo, i)

