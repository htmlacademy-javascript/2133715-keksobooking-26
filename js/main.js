function getRandomInt(min, max) {
  if (max <= min) {
    return 0;
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}

getRandomInt(0, 8);

function getRandomFloat(min, max) {
  const rand = min + Math.random() * (max + 1 - min);
  if (max <= min) {
    return 0;
  } else {
    return +Math.floor(rand).toFixed(2);
  }
}
getRandomFloat(4, 8);
