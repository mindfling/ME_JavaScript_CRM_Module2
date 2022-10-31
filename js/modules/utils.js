// * get Random Int untils

const getRandomInt = (min, max) => {
  min = Math.ceil(min < max ? min : max);
  max = Math.floor(min > max ? min : max);
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export default getRandomInt;
