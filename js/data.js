import {getRandomNum} from './util.js';

const descriptions = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty', 'twentyone','twentytwo', 'twentythree', 'twentyfour', 'twentyfive'];
const messages6 = ['Всё отлично!', 'В целом всё неплохо. Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.', 'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];
const names20 = ['Tyrion Lannister', 'Jon Snow', 'Daenerys Targaryen', 'Cersei Lannister', 'Sansa Stark', 'Arya Stark', 'Jaime Lannister', 'Jorah Mormont', 'Theon Greyjoy', 'Samwell Tarly', 'Varys', 'Davos Seaworth', 'Brienne of Tarth', 'Petyr Baelish', 'Bran Stark', 'Sandor Clegane', 'Missandei', 'Bronn Blackwater', 'Gray Worm', 'Tormund Giantdeath'];


const createСommentArchive  = function(amount) {
  const arr = [];
  for (let i = 1; i <= amount; i++) {
    const comment = {
      id: getRandomNum(150, 2000),
      avatar: `img/avatar-${ getRandomNum(1, 6) }.svg`,
      message: messages6[getRandomNum(0, 5)],
      name: names20[getRandomNum(0, 19)]
    };
    arr.push(comment);
  } return arr;
};
//console.log(createСommentArchive(3));

const createPhotoArchive  = function(amount) {
  const arr = [];
  for (let i = 1; i <= amount; i++) {
    const photo = {
      id: i,
      url: `photos/${ i }.jpg`,
      description: descriptions[i],
      likes: getRandomNum(15, 200),
      comments: createСommentArchive(3)
    };
    arr.push(photo);
  } return arr;
};
//console.log(createPhotoArchive(25));
export {createPhotoArchive}; // экспорт в самом низу кода

