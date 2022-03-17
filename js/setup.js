// 1. Шаблон из * <li class="social__comment"> клонировать и вставить в нужное место для пробы. Алгоритм клонирования в части №1
//    Шаблон делать сразу на ДВА комментария ИБО у меня их два!!!
// 2. Засунуть данные в шаблон из коллекции в 25.

// Список комментариев под фотографией: комментарии должны вставляться в блок .social__comments. Это образец из ЗАДАНИЯ:
/* <li class="social__comment">
    <img
        class="social__picture"
        src="{{аватар}}"                // СОВПАДЕНИЕ 1
        alt="{{имя комментатора}}"      // СОВПАДЕНИЕ 2 ИМЯ
        width="35" height="35">
    <p class="social__text">{{текст комментария}}</p> СОВПАДЕНИЕ 3 КОММЕНТАРИЙ
</li> */
// Это разметка
// <!-- Комментарии к изображению -->
// <div class="social__comment-count">5 из <span class="comments-count">125</span> комментариев</div>
// <ul class="social__comments">
//   <li class="social__comment">
//     <img class="social__picture" src="img/avatar-4.svg" alt="Аватар комментатора фотографии" width="35" height="35">
//     <p class="social__text">Мега фото! Просто обалдеть. Как вам так удалось?</p>
//   </li>
//   <li class="social__comment">
//     <img class="social__picture" src="img/avatar-3.svg" alt="Аватар комментатора фотографии" width="35" height="35">
//      <p class="social__text">Да это фоташоп!!!!!!!!</p>
//   </li>
// </ul>


//Рабочие заготовки:
//console.log(similarPhoto[0].comments[0].avatar); // это полный доступ к комментариям: аватар, имя и текст комментария
//console.log(similarPhoto[0].comments); // это массив из двух вот таких объектов
/* <li class="social__comment">
    <img
        class="social__picture"
        src="{{аватар}}"                // СОВПАДЕНИЕ 1
        alt="{{имя комментатора}}"      // СОВПАДЕНИЕ 2 ИМЯ
        width="35" height="35">
    <p class="social__text">{{текст комментария}}</p> СОВПАДЕНИЕ 3 КОММЕНТАРИЙ
</li> */
// каждый из нихнужно вставить в готовое место в разметке: нужен ещё один photoСomments.addEventListener('click'
// который будет подставлять в шаблон в разметке нужные данные про фотографию как на превью
//console.log(document.querySelectorAll('.social__comment img')[0].src); // "{{аватар}}" первого элемента массива комментариев
//console.log(document.querySelectorAll('.social__comment img')[0].alt); // "{{имя комментатора}}" первого элемента массива комментариев
//console.log(document.querySelectorAll('.social__text')[0].textContent); // {{текст комментария}} первого элемента массива комментариев
//Массив.forEach((comment) => {})
//console.log(similarPhoto[0].comments[0].message);
//console.log(similarPhoto[0].description);
//if (document.querySelector('.social__caption').textContent === similarPhoto[0].description)))
