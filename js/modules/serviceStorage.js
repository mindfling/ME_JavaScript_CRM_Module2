// * service local Storage

// ключ доступа к данным из Хранилища
const STORAGE_KEY = 'CRM';
// ? хранилище в localStorage

/*
export const getProductData = () => {
  const storageData = localStorage.getItem(STORAGE_KEY);
  return (storageData ? JSON.parse(storageData) : []);
};
*/
// ? какой вариант лучше ??
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

export const initStorage = (initialData) => {
  const storageData = getProductData();
  let data = [];

  if (storageData && storageData.length > 0) {
  // если в хранилище есть данные
    data = storageData;
    console.log('Загрузка списка товаров из хранилища', data);
  } else {
  // если в хранилище пусто
    // ? здесь при пустом хранилище инициализируем localStorage из массива data
    data = initialData;
    setProductData(data);
    console.log('Инициализация списка продуктов из массива data', data);
  }

  return data;
};
