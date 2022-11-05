// * All renders

import {tableBody, createRow} from './createElements.js';


// * render goods перебирает массив объектов товаров и рендерит строки
export const renderGoods = (productsData = []) => {
  // перебираем массив объектов
  if (Array.isArray(productsData)) {
    // вставляем ряды в таблицу
    productsData.forEach((product, index) => {
      tableBody.append(
        createRow(index + 1, {
          id: product.id,
          title: product.title,
          category: product.category,
          description: product.description,
          units: product.units,
          price: product.price,
          count: product.count,
        }),
      );
    });
  }
  return;
};

// * clear list
export const clearList = (list) => {
  while (list.lastChild) {
    list.lastChild.remove();
  }
};
