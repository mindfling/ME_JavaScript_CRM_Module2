import data from './modules/dataGoods.js';

import {tableBody} from './modules/createElements.js';

// import getRandomInt from './modules/utils.js';
import {makeDataIdHash} from './modules/hash.js';
import {modalControl, countTotalPrice} from './modules/control.js';
// import {createRow} from './modules/createElements.js';

import {renderGoods} from './modules/render.js';

console.log('initial products data: ', data);


// * getDataProduct
const getDataProduct = (data, id) => {
  // filter фильтрует элементы выдает массив контактов с данным id
  const product = data.filter(product => (product.id === id));
  console.log('product: ', product[0]);
  return product[0];
};

// * deteleDataProduct
const deteleDataProduct = (data, id) => {
  // удалить этот элем из массива
  data.forEach((product, index) => {
    if (product.id === id) {
      data.splice(index, 1);
    }
  });
};


// * обработчик для кнопок товаров
tableBody.addEventListener('click', (e) => {
  const target = e.target;

  if (target.classList.contains('table__btn_pic')) {
    console.log('кнопка Добавить картинку');
    return;
  }

  if (target.classList.contains('table__btn_edit')) {
    console.log('кнопка Редактировать товар');
    return;
  }

  // Клик по кнопке Удалить товар
  if (target.classList.contains('table__btn_del')) {
    const targetProduct = target.closest('.product');
    const productID = targetProduct?.id;

    if (confirm(`
Удалить товар?
  ID ${productID} 
  ${getDataProduct(data, productID)?.title}`)) {
      console.log('Удаляем товар');
      deteleDataProduct(data, productID);
      targetProduct.remove();
      console.log('data: ', data);
    } else {
      console.log('Отмена!\nТовар не удален');
    }
    return;
  }
});


// * INIT * //
const init = () => {
  // пересчитываем id hash у каждого товара
  makeDataIdHash(data);
  // в начале рендерим отрисовываем таблицу товаров
  renderGoods(data);
  // функционал работы с модальным окном и формой
  modalControl(data);
  // расчет полной суммы вверху таблицы
  countTotalPrice(data);
};

// * init start
init();
