// it will make hash codes for ID

// * get Random Int untils for random ID form
export const getRandomInt = (min, max) => {
  min = Math.ceil(min < max ? min : max);
  max = Math.floor(min > max ? min : max);
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// * hash Code to String
/*
const hashCode = (str) => {
  let hash = 0;
  for (let i = 0, len = str.length; i < len; i++) {
    const chr = str.charCodeAt(i);
    hash = (hash << 5) - hash + chr;
    hash |= 0; // Convert to 32bit integer
  }
  return Math.abs(hash).toString();
};
*/

// * make Data ID Hash
/*
export const makeDataIdHash = (data) => {
  data.forEach((product, index) => {
    const str = '' + index +
    Object.values(product).reduce((accum, curr) => (accum + curr), '');
    product.id = hashCode(str).toString();
  });
  return;
};
 */
