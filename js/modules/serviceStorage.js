// * service local Storage

// ключ доступа к данным из Хранилища
export const STORAGE_KEY = 'CRM'; // ?

/*
// получаем текущие данные из хранилища
export const getProductData = () => {
  const storageData = localStorage.getItem(STORAGE_KEY);
  return (storageData ? JSON.parse(storageData) : []);
};
*/

export const getProductData = () => (localStorage.getItem(KEY) ?
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

// * get Data Product
export const getDataProduct = (data, id) => {
  // eslint-disable-next-line eqeqeq
  const product = data.filter(item => (item.id == id));
  return product[0];
};

// // получаем данные о продуктах из Хранилища
// export const getStorage = () => {
//   const data = localStorage.getItem(STORAGE_KEY);
//   if (data) {
//     return JSON.parse(data);
//   }
//   return []; // если по ключу нет данных, возвращаем пустой массив
// };

// // сохраняем массив данных о продуктах в хранилище
// export const setStorage = (data) => {
//   data = JSON.stringify(data);
//   // console.log('stringify data: ', data);
//   localStorage.setItem(STORAGE_KEY, data);
// };

// // удаляем данные о продукте из хранилища по его id
// export const removeStorage = (/* key, data, */ id) => {
//   // получаем данные
//   const data = getStorage();
//   // модифицируем
//   data.forEach((product, index) => {
//     if (product?.id == id) {
//       data.splice(index, 1); // удаляем товар из массива
//     }
//   });
//   console.log('data after renew: ', data);
//   const newData = data.filter((product) => (product.id !== id));
//   console.log('newData: ', newData);
//   // сохраняем обратно в Хранилище
//   setStorage(newData);
// };

// // * detele Data Product
// export const deteleDataProduct = (id) => {
//   // читаем из хранилища
//   const data = getStorage();
//   // удалить этот элем из массива
//   data.forEach((product, index) => {
//     if (product.id === id) {
//       data.splice(index, 1);
//     }
//   });
//   // обновляем обратно данные в хранилище
//   setStorage(data);
//   console.log('update data in storage: ', data);
// };
