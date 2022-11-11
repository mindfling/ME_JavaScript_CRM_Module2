// data service control

// * get Data Product
export const getDataProduct = (data, id) => {
  // filter фильтрует элементы выдает массив контактов с данным id
  const product = data.filter(product => (product.id + '' === '' + id));
  return product[0];
};

// * detele Data Product
export const deteleDataProduct = (data, id) => {
  // удалить этот элем из массива
  data.forEach((product, index) => {
    if (product.id.toString() === id.toString()) {
      data.splice(index, 1);
    }
  });
};
