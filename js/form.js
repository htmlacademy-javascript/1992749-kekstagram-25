
const imageEditingForm = document.querySelector('.img-upload__overlay'); // Форма редактирования изображения
const buttonToCloseEditing = document.querySelector('#upload-cancel'); // Кнопка для закрытия формы редактирования изображения
const uploadFile = document.querySelector('#upload-file'); // Поле выбора контрола загрузки файла #upload-file
const commentInputField = document.querySelector('#text__description'); // Поле ввода комментария к изображению

const onCloseButtonEscKeydown = function(evt) { // ESC Скрываем форму редактирования изображения
  if (evt.key === 'Escape') {
    imageEditingForm.classList.add('hidden'); // Скрываем форму редактирования изображения
    document.querySelector('body').classList.remove('modal-open'); // У элемента body удаляется класс modal-open
    uploadFile.value = ''; // Сбрасываем значение поля выбора файла #upload-file или type="reset" для кнопки закрытия формы???
    document.removeEventListener('keydown', onCloseButtonEscKeydown); // Удалим обработчик ESC
  }
};

commentInputField.addEventListener('focus', (evt) => { // Обработчик события, если фокус находится в поле ввода комментария
  evt.target.style.background = '#ffe753'; // Обозначим фокус цветом
  document.removeEventListener('keydown', onCloseButtonEscKeydown); // Удалим ESC, чтобы исключить закрытие формы редактирования изображения
});

commentInputField.addEventListener('blur', (evt) => { // Обработчик на событие при потере фокуса при вводе комментария
  evt.target.style.background = ''; // Удалим цвет при потере фокуса
  document.addEventListener('keydown', onCloseButtonEscKeydown); // Добавим обработчик ESC при потере фокуса
});

uploadFile.addEventListener('change', () => { // Обработчик на форму редактирования изображения
  imageEditingForm.classList.remove('hidden'); // Показываем форму редактирования изображения
  document.querySelector('body').classList.add('modal-open'); // Элементу body задаётся класс modal-open
  document.addEventListener('keydown', onCloseButtonEscKeydown); // Добавим обработчик ESC
});

buttonToCloseEditing.addEventListener('click', () => { // Обработчик для закрытия формы редактирования изображения
  imageEditingForm.classList.add('hidden'); // Скрываем форму редактирования изображения
  document.querySelector('body').classList.remove('modal-open'); // У элемента body удаляется класс modal-open
  uploadFile.value = ''; // Сбрасываем значение поля выбора файла #upload-file (или type="reset" для кнопки закрытия формы?)
  document.removeEventListener('keydown', onCloseButtonEscKeydown); // Удалим обработчик ESC
});


/*
Вопросы по 8.13. Правда или действие (часть 1):
1.В задании сказано:
Обратите внимание, что при закрытии формы дополнительно необходимо сбрасывать значение поля выбора файла #upload-file.
Я пробовал установить type="reset" на кнопку <!-- Кнопка для закрытия формы редактирования изображения -->
<button type="reset" class="img-upload__cancel  cancel" id="upload-cancel">Закрыть</button>
работает 50/50. Почему?
Поставил uploadFile.value = ''; - Почему пустую строку могу записать значением, а число или непустую строку нет?

2. В задании сказано:
Как отменить обработчик Esc при фокусе?
Задача не имеет одного верного решения, однако намекнём на самый простой —
использовать stopPropagation для события нажатия клавиш в поле при фокусе.

Так и не смог придумать, как использовать stopPropagation. Думаю, что в теле функции:
commentInputField.addEventListener('focus', (evt) => { // Обработчик события, если фокус находится в поле ввода комментария
  ????? Но ведь stopPropagation() навешивается непосредственно на само событие, которое отменяется т.е. на:
  document.addEventListener('keydown', onCloseButtonEscKeydown); ???? Но так не работает.
});
На что мне обратить внимание, чтобы разобраться с stopPropagation?
*/

