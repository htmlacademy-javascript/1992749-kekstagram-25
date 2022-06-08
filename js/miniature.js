
import {createPhotoArchive} from './data.js';
import {showBigImage} from './big-picture.js';
/*
ДЗ №11 из п.7.10. Отрисуй меня полностью (часть 1):

Отобразить фотографии других пользователей.
Заведите модуль, который будет отвечать за отрисовку миниатюр: miniature.js

На основе временных данных для разработки и шаблона #picture создайте DOM-элементы, соответствующие фотографиям, и заполните их данными:
- Адрес изображения url подставьте как атрибут src изображения.
- Количество лайков likes выведите в блок .picture__likes.
- Количество комментариев comments выведите в блок .picture__comments.
- Отрисуйте сгенерированные DOM-элементы в блок .pictures. Для вставки элементов используйте DocumentFragment.
Подключите модуль в проект.
*/

const templatePicture = document.querySelector('#picture').content.querySelector('.picture'); // Шаблон изображения случайного пользователя
const picturesContainer = document.querySelector('.pictures'); // Контейнер для изображений от других пользователей
const fragment = document.createDocumentFragment(); // Для вставки элементов используйте DocumentFragment
const photoArchive = createPhotoArchive(4);

const createImagesFromUsers = function() {
  photoArchive.forEach((element) => {
    const clone = templatePicture.cloneNode(true);

    clone.querySelector('.picture__img').src = element.url;             //Адрес изображения url подставьте как атрибут src изображения.
    clone.querySelector('.picture__likes').textContent = element.likes; //Количество лайков likes
    clone.querySelector('.picture__comments').textContent = element.comments.length; // Количество комментариев comments

    fragment.append(clone);
    clone.addEventListener('click', () => {showBigImage(element);}); // Обработчик события клика по текущему фото для big-picture.js
  });
  picturesContainer.append(fragment);
};
createImagesFromUsers();
