import {getRandomNum} from './util.js';

const descriptionsList = ['zero', 'one',	'two',	'three',	'four',	'five',	'six',	'seven',	'eight',	'nine',	'ten',	'eleven',	'twelve',	'thirteen',	'fourteen',	'fifteen',	'sixteen',	'seventeen',	'eighteen',	'nineteen',	'twenty',	'twenty-one',	'twenty-two', 'twenty-three', 'twenty-four', 'twenty-five'];

const messagesList = ['Всё отлично!', 'В целом всё неплохо. Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.', 'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];

const nameList = ['Хуан', 'Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита','Вашингтон'];

const createComment = () => {
  const arr = [];
  for (let i = 0; i < 2; i++) {
    const comment = {
      id: getRandomNum(1, 200), //"Это случайное число от 1 до 200"
      avatar: `img/avatar-${  getRandomNum(1, 6)  }.svg`,
      message: messagesList[getRandomNum(0, 5)],
      name: nameList[getRandomNum(0, 7)]
    };
    arr.push(comment);
  }
  return arr;
};
//console.log(createComment());

const createPhoto = () => {
  const arr = [];
  let currentDescription;
  for (let i = 1; i <= 25; i++) { //
    currentDescription = descriptionsList[i];
    const photo = {
      id: i, //"Это число от 1 до 25"
      url: `photos/${  i  }.jpg`, //"photos/{{i}}.jpg, где {{i}} — это число от 1 до 25"
      description: currentDescription, //"Описание придумайте самостоятельно"
      likes: getRandomNum(15, 200), // лайки от 15 до 200
      comments: createComment()
    };
    arr.push(photo);
  }
  return arr;
};
createPhoto();
export {createPhoto}; // экспорт в самом низу кода

//console.log(descriptionsList);
