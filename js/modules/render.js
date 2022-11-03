// * All renders

import {tableBody, createRow} from './createElements.js';


// * renderGoods перебирает массив объектов товаров и рендерит строки
export const renderGoods = (products = []) => {
  // перебираем массив объектов
  if (Array.isArray(products)) {
    // вставляем ряды в таблицу
    products.forEach((product, index) => {
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

export const rowsNumberRecount = () => {
  const allNumbers = tableBody.querySelectorAll('.table__cell_number');
  console.log('allNumbers: ', allNumbers);
  let cellCount = 0;
  allNumbers.forEach((cell) => {
    cell.textContent = ++cellCount;
  });
};
