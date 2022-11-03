// * service local Storage
// ключ доступа к данным из Хранилища
const STORAGE_KEY = 'CRM';

// получаем данные о продуктах из Хранилища
export const getStorage = () => {
  const data = localStorage.getItem(STORAGE_KEY);
  if (data) {
    return JSON.parse(data);
  }
  return []; // если по ключу нет данных, возвращаем пустой массив
};

// сохраняем массив данных о продуктах в хранилище
export const setStorage = (data) => {
  data = JSON.stringify(data);
  console.log('stringify data: ', data);
  localStorage.setItem(STORAGE_KEY, data);
};

// удаляем данные о продукте из хранилища по его id
export const removeStorage = (/* key, data, */ ID) => {
  // by deteleDataProduct
  // получаем данные
  const data = getStorage();
  // модифицируем
  data.forEach((product, index) => {
    if (product?.id === ID) {
      data.splice(index, 1); // удаляем товар из массива
    }
  });
  console.log('data after renew: ', data);
  const newData = data.filter((product) => (product.id !== ID));
  console.log('newData: ', newData);
  // сохраняем обратно в Хранилище
  setStorage(newData);
};


// * getDataProduct
export const getDataProduct = (data, id) => {
  data = getStorage();
  // filter фильтрует элементы выдает массив продуктов с данным id
  const product = data.filter(product => (product.id === id));
  console.log('product: ', product[0]);
  return product[0];
};

// * deteleDataProduct
export const deteleDataProduct = (id) => {
  // читаем из хранилища
  const data = getStorage();
  // удалить этот элем из массива
  data.forEach((product, index) => {
    if (product.id === id) {
      data.splice(index, 1);
    }
  });
  // обновляем обратно данные в хранилище
  setStorage(data);
  console.log('update data in storage: ', data);
};
