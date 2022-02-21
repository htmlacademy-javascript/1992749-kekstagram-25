//Материалы сайта https://developer.mozilla.org/
//Функция, возвращающая случайное целое число из переданного диапазона включительно
function getRandomIntInclusive(min, max) {
  if (min < 0 || max < 0) {return "Укажите положительный диапазон"}
  if (min >= max) {return "Внимание: min должен быть меньше, чем max"}
   min = Math.ceil(min);
   max = Math.floor(max);
   return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
 }
 console.log(getRandomIntInclusive(-2, 4));

//Функция для проверки максимальной длины строки
function checkStringLength(str, max) {
  if (str.length <= max) {return true}
  return false;
  }
  console.log(checkStringLength('', 2));
