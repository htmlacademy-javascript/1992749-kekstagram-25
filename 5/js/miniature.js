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
  cloneTemplate.querySelector('.picture__img').src = photo.url; // заполним шаблон информацией
  cloneTemplate.querySelector('.picture__likes').textContent = photo.likes; // заполним шаблон информацией
  cloneTemplate.querySelector('.picture__comments').textContent = photo.comments.length; // заполним шаблон информацией
  photoDocumentFragment.appendChild(cloneTemplate); // вставим шаблон в контейнер для изображений
});
pictures.appendChild(photoDocumentFragment);
//console.log(pictures); // рисует три правильных фото на странице

