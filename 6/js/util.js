//Функция для проверки максимальной длины строки
function checkStringLength(str, max) {
  if (str.length <= max) {
    return true;
  }
  return false;
}
checkStringLength('', 2);

//Материалы сайта https://developer.mozilla.org/
//Функция, возвращающая случайное целое число из переданного диапазона включительно
function getRandomNum(min, max) {
  if (min < 0 || max < 0) {
    return 'Укажите положительный диапазон';
  }
  if (min >= max) {
    return 'Внимание: min должен быть меньше, чем max';
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}
getRandomNum(-2, 4);

const isEscapeKey = (evt) => evt.key === 'Escape'; // короткая проверка для клавиши Escape

export { getRandomNum, isEscapeKey}; // экспорт в самом низу кода
