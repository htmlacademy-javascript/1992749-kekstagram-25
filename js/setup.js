//Копия miniature.js: на 13-02 от 21 марта 2022
// - На основе временных данных для разработки и шаблона #picture создайте DOM-элементы, соответствующие фотографиям,
//   и заполните их данными:
// - Адрес изображения url подставьте как атрибут src изображения.
// - Количество лайков likes выведите в блок .picture__likes.
// - Количество комментариев comments выведите в блок .picture__comments.
// Отрисуйте сгенерированные DOM-элементы в блок .pictures. Для вставки элементов используйте DocumentFragment.

import {createPhoto} from './data.js'; // импортируем модуль для генерации данных
const pictures = document.querySelector('.pictures'); // Контейнер для изображений от других пользователей
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture'); // Шаблон для фотографий

const similarPhoto = createPhoto();
const photoDocumentFragment = document.createDocumentFragment(); // создадим DocumentFragment для изображений

similarPhoto.forEach((photo) => {
  const cloneTemplate = pictureTemplate.cloneNode(true); // клонируем шаблон
  cloneTemplate.querySelector('.picture__img').src = photo.url; // адрес url как атрибут src
  cloneTemplate.querySelector('.picture__likes').textContent = photo.likes; // количество лайков
  cloneTemplate.querySelector('.picture__comments').textContent = photo.comments.length; // количество комментариев
  // Добавим код с description в шаблон, ибо во второй части нужно наступило
  cloneTemplate.querySelector('.picture__img').alt = photo.description; // описание фотографии
  photoDocumentFragment.appendChild(cloneTemplate); // вставим шаблон в контейнер для изображений
});
pictures.appendChild(photoDocumentFragment);


//console.log(picture);
export {similarPhoto}; // экспорт в самом низу кода

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Копия big-pictur.js: на 13-03 от 21 марта 2022
import {similarPhoto} from './miniature.js';
import {isEscapeKey} from './util.js';
const bigPicturePreview = document.querySelector('.big-picture__preview'); // большое фото
const bigPictureShow = document.querySelector('.big-picture'); // Здесь класс 'hidden' скрывает большое фото
const picture = document.querySelectorAll('.picture'); // коллекция 25 элементов
const socialCommentCount = document.querySelector('.social__comment-count'); // Блок счётчика комментариев
const commentsLoader = document.querySelector('.comments-loader'); // Блок счётчика загрузки новых комментариев


const commentTemplate = document.querySelector('.social__comments li'); // Шаблон из Первого комментария от других пользователей
const commentDocumentFragment = document.createDocumentFragment(); // создадим DocumentFragment для комментариев
const boxForComments = document.querySelector('.social__comments'); // Коробка под комментарии
boxForComments.innerHTML = ''; // Пустая коробка - остаётся только <ul class="social__comments"></ul>


const onBigPictureShowEscKeydown = () => { // Кнопка  Escape для закрытия окна большого фото
  if (isEscapeKey) {
    bigPictureShow.classList.add('hidden'); // Вернём класс 'hidden', спрячем большое фото
    document.querySelector('body').classList.remove('modal-open'); // вернём скролл на контейнер с фото позади большого фото
    document.removeEventListener('keydown', onBigPictureShowEscKeydown); // Это удаление кнопки Escape
    boxForComments.innerHTML = ''; // Очистим коробку с комментариями
  }
};

picture.forEach((photo, i) => {
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

    // Код для закрытия окна большого фото
    const closeButtonBigPicture = document.querySelector('.big-picture__cancel');

    closeButtonBigPicture.addEventListener('click', () => {
      bigPictureShow.classList.add('hidden'); // Вернём класс 'hidden', спрячем большое фото
      document.querySelector('body').classList.remove('modal-open'); // вернём скролл на контейнер с фото позади большого фото
      boxForComments.innerHTML = ''; // Очистим коробку с комментариями
    }); // click

    document.addEventListener('keydown', onBigPictureShowEscKeydown); // Это вызов кнопки Escape

    // сравнение по значению адресов фотографий из массива для больших фото и массива миниатюр:
    if (photo.querySelector('.picture__img').src === `http://localhost:3000/${  similarPhoto[i].url}`) {

      for (let j = 0; j < similarPhoto[i].comments.length; j++) {
        const cloneTemplate = commentTemplate.cloneNode(true); // клонируем шаблон
        cloneTemplate.querySelector('.social__text').textContent = similarPhoto[i].comments[j].message; //  комментарии в большом фото
        cloneTemplate.querySelector('.social__comment img').src = similarPhoto[i].comments[j].avatar; // аватар комментатора
        cloneTemplate.querySelector('.social__comment img').alt = similarPhoto[i].comments[j].name; // имя комментатора

        commentDocumentFragment.appendChild(cloneTemplate); // сохраним шаблон
      }
      boxForComments.appendChild(commentDocumentFragment); // добавление комментария в блок .social__comments:
    }


  });// photo

});// picture

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Копия big-pictur.js: на 14-21 от 21 марта 2022 в одном файле миниатюры и большое фото. Работает пока всё, но отдельно.
// сейчас начну запихивать в один forEach

//import {similarPhoto} from './miniature.js'; отключил после переноса кода из miniature в этот файл
import {isEscapeKey} from './util.js';

import {createPhoto} from './data.js'; // импортируем модуль для генерации данных
const pictures = document.querySelector('.pictures'); // Контейнер для изображений от других пользователей
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture'); // Шаблон для фотографий

const similarPhoto = createPhoto();
const photoDocumentFragment = document.createDocumentFragment(); // создадим DocumentFragment для изображений

similarPhoto.forEach((photo) => {
  const cloneTemplate = pictureTemplate.cloneNode(true); // клонируем шаблон
  cloneTemplate.querySelector('.picture__img').src = photo.url; // адрес url как атрибут src
  cloneTemplate.querySelector('.picture__likes').textContent = photo.likes; // количество лайков
  cloneTemplate.querySelector('.picture__comments').textContent = photo.comments.length; // количество комментариев
  // Добавим код с description в шаблон, ибо во второй части нужно наступило
  cloneTemplate.querySelector('.picture__img').alt = photo.description; // описание фотографии
  photoDocumentFragment.appendChild(cloneTemplate); // вставим шаблон в контейнер для изображений
});
pictures.appendChild(photoDocumentFragment);

// Это блок const для большого фото
const bigPicturePreview = document.querySelector('.big-picture__preview'); // большое фото
const bigPictureShow = document.querySelector('.big-picture'); // Здесь класс 'hidden' скрывает большое фото
const picture = document.querySelectorAll('.picture'); // коллекция 25 элементов
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
// Это блок forEach для большого фото:
picture.forEach((photo, i) => {
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

    // Код для закрытия окна большого фото
    const closeButtonBigPicture = document.querySelector('.big-picture__cancel');

    closeButtonBigPicture.addEventListener('click', () => {
      bigPictureShow.classList.add('hidden'); // Вернём класс 'hidden', спрячем большое фото
      document.querySelector('body').classList.remove('modal-open'); // вернём скролл на контейнер с фото позади большого фото
      boxForComments.innerHTML = ''; // Очистим коробку с комментариями
    }); // click

    document.addEventListener('keydown', onBigPictureShowEscKeydown); // Это вызов кнопки Escape

    // сравнение по значению адресов фотографий из массива для больших фото и массива миниатюр:
    if (photo.querySelector('.picture__img').src === `http://localhost:3000/${  similarPhoto[i].url}`) {
    // подключаем комментарии к большому фото из коллекции 25
      for (let j = 0; j < similarPhoto[i].comments.length; j++) {
        const cloneTemplate = commentTemplate.cloneNode(true); // клонируем шаблон
        cloneTemplate.querySelector('.social__text').textContent = similarPhoto[i].comments[j].message; //  комментарии в большом фото
        cloneTemplate.querySelector('.social__comment img').src = similarPhoto[i].comments[j].avatar; // аватар комментатора
        cloneTemplate.querySelector('.social__comment img').alt = similarPhoto[i].comments[j].name; // имя комментатора

        commentDocumentFragment.appendChild(cloneTemplate); // сохраним шаблон
      }
      boxForComments.appendChild(commentDocumentFragment); // добавление комментария в блок .social__comments:
    }


  });// photo

});// picture

