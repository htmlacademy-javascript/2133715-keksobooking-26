import {getRandomArrayElement, getRandomPositiveFloat} from './util.js';

const avatars = [];
const getAvatar = randomNoRepeats(avatars);

function randomNoRepeats(array) { // случайный не повторяющийся элемент массива
  for (let i = 1; i <= 10 ; i++ ) {
    avatars.push(i < 10 ? (`img/avatars/user0${  i.toString()  }.png`) : `img/avatars/user${  i.toString()  }.png`);
  }
  let copy = array.slice(0);
  return function () {
    if (copy.length < 1) {
      copy = array.slice(0);
    }
    const index = Math.floor(Math.random() * copy.length);
    const item = copy[index];
    copy.splice(index, 1);
    return item;
  };
}

const TITLE = [
  'Уютная квартирка',
  'Милый дом',
  'Чистая комната',
  'Отличный отель',
  'Прекрасный дом',
  'Комфортное бунгало',
  'Суперская квартира',
  'Тихий дом',
  'Безупречный отель',
  'Раскошный дом',
];

const PRICE = [
  20000,
  25000,
  70000,
  150000,
  200000,
  90000,
  15000,
  65000,
  48000,
  86000,
];

const TYPE = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];

const ROOMS = [
  1,
  2,
  3,
  100,
];

const GUESTS = [
  1,
  2,
  3,
  4,
  5,
  6,
];

const CHECKIN = [
  '12:00',
  '13:00',
  '14:00',
];

const CHECKOUT = [
  '12:00',
  '13:00',
  '14:00',
];

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner'
];

const DESCRIPTION = [
  'Отель, который работает по системе все включено',
  'Шикарное место со всей необходимой техникой, баром, бассейном и сауной',
  'Прекрасное расположение, в шаговой доступности 2 ТЦ и море',
  'Уютное и тихое расположение в изолированном районе',
  'Предоставляются услуги консьержа и гида бесплатно',
];

// Генерация адреса по широте
function getLocationY() {
  // от 35.65000 до 35.70000
  return getRandomPositiveFloat(35.65000, 35.70000);
}

const LOCATIONY = getLocationY();

// Генерация адреса по долготе
function getLocationX() {
  // от 35.65000 до 35.70000
  return getRandomPositiveFloat(139.70000, 139.80000);
}

const LOCATIONX = getLocationX();

// Генерация массива с фотографиями объявления
function getOfferPhotos() {
  const offerPhotosArr = [
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
  ];
  const offerPhotos = [];
  for (let i = 0; i < Math.floor(Math.random() * (offerPhotosArr.length + 1)); i++) {
    offerPhotos[i] = offerPhotosArr[i];
  }
  return offerPhotos;
}

const SIMILAR_OBJECT_COUNT = 10;

const createObject = function () {
  return {
    author: {
      avatar: getAvatar(),
    },
    offer: {
      title: getRandomArrayElement(TITLE),
      address:`${LOCATIONY  } ${  LOCATIONX}`,
      price: getRandomArrayElement(PRICE),
      type: getRandomArrayElement(TYPE),
      rooms: getRandomArrayElement(ROOMS),
      guests: getRandomArrayElement(GUESTS),
      checkin: getRandomArrayElement(CHECKIN),
      checkout: getRandomArrayElement(CHECKOUT),
      features: getRandomArrayElement(FEATURES),
      description: getRandomArrayElement(DESCRIPTION),
      photos: getOfferPhotos()
    },
    location: {
      lat: LOCATIONY,
      lng: LOCATIONX,
    }
  };
};

Array.from({length: SIMILAR_OBJECT_COUNT}, createObject);
