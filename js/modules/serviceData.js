// data service control

// * get Data Product
export const getDataProduct = (data, id) => {
  // filter фильтрует элементы выдает массив контактов с данным id
  const product = data.filter(product => (product.id + '' === '' + id));
  console.log('product: ', product);
  console.log('product: ', product[0]);
  return product[0];
};

// * detele Data Product
export const deteleDataProduct = (data, id) => {
  console.log('data, for delete id: ', data, id);
  // удалить этот элем из массива
  data.forEach((product, index) => {
    console.log('product, index: ', product, index);
    if (product.id.toString() === id.toString()) {
      console.log('delete this product: ', product);
      data.splice(index, 1);
    }
  });
};
