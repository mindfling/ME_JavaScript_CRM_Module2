// it will make hash codes for ID

// * hash Code to String
const hashCode = (str) => {
  let hash = 0;
  for (let i = 0, len = str.length; i < len; i++) {
    const chr = str.charCodeAt(i);
    hash = (hash << 5) - hash + chr;
    hash |= 0; // Convert to 32bit integer
  }
  return Math.abs(hash).toString();
};

// * make Data ID Hash
export const makeDataIdHash = (data) => {
  data.forEach((product, index) => {
    const str = '' + index +
    Object.values(product).reduce((accum, curr) => (accum + curr), '');
    product.id = hashCode(str).toString();
  });
  return;
};
