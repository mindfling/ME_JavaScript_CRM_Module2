// * All renders

import {createRow} from './createElements.js';

// clear list
export const clearList = (list) => {
  while (list.lastChild) {
    list.lastChild.remove();
  }
};

// render goods перебирает массив объектов товаров и рендерит строки
export const renderGoods = (list, productsData = []) => {
  // перебираем массив объектов
  if (Array.isArray(productsData)) {
    // вставляем ряды в таблицу
    productsData.forEach((product, index) => {
      list.append(
        createRow(index + 1, {
          id: product.id,
          title: product.title,
          category: product.category,
          description: product.description,
          units: product.units,
          price: product.price,
          count: product.count,
          images: {
            big: product?.images?.big,
            small: product?.images?.small,
          },
        }),
      );
    });
  }
  return;
};

