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
    console.log('hash product.id: ', product.id);
  });
  return;
};


// * get Random Int untils for random form id generate
export const getRandomInt = (min, max) => {
  min = Math.ceil(min < max ? min : max);
  max = Math.floor(min > max ? min : max);
  return Math.floor(Math.random() * (max - min + 1) + min);
};


// * get Vendor random Id in form submit
// export const getVendorRandomID = () => getRandomInt(100000000, 999999999);
export const getVendorRandomID = () => getRandomInt(1e8, (10e8 - 1));


// * use it for get Vendor Id of product
export const getVendorID = () => Math.random().toString().substring(2, 14);
