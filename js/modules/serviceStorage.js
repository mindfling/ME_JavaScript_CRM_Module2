// * service local Storage

// ключ доступа к данным из Хранилища
const STORAGE_KEY = 'CRM'; // ?

/*
export const getProductData = () => {
  const storageData = localStorage.getItem(STORAGE_KEY);
  return (storageData ? JSON.parse(storageData) : []);
};
*/
// получаем текущие данные из хранилища m
export const getProductData = () => (localStorage.getItem(STORAGE_KEY) ?
  JSON.parse(localStorage.getItem(STORAGE_KEY)) : []);

// сохраняем данные обратно в хранилище
export const setProductData = (data) =>
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));

// добавляем контакт к данным
export const addProductData = (product) => {
  const data = getProductData();
  data.push(product);
  setProductData(data);
};

// удаляем контакт из хранилища по номеру телефона
export const removeProductData = id => {
  const data = getProductData();
  const newData = data.filter(product =>
    product.id.toString() !== id.toString()); // фильтруем по id
  setProductData(newData);
};

// get Data Product
export const getDataProduct = (data, id) => {
  // eslint-disable-next-line eqeqeq
  const products = data.filter(product => (product.id == id));
  return products[0];
};
