import {data as initial} from './modules/dataGoods.js';

import {tableBody} from './modules/createElements.js';
// import getRandomInt from './modules/utils.js';
import {makeDataIdHash} from './modules/hash.js';
import {modalControl, countTotalPrice} from './modules/control.js';
// import {createRow} from './modules/createElements.js';
import {renderGoods} from './modules/render.js';
import {
  getStorage,
  setStorage,
  removeStorage,
  getDataProduct,
  deteleDataProduct,
} from './modules/serviceStorage.js';

const storageData = getStorage();
// todo
let data = [];
if (storageData) {
  data = storageData;
  console.log('storageData: ', storageData);
  console.log('data storage: ', data);
} else {
  data = initial;
  console.log('data initial: ', data);
}


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
      // переспрашиваем у пользователя
      if (confirm(`
Удалить товар?
  ID ${productID} 
  ${getDataProduct(data, productID)?.title}`)) {
        console.log('Удаляем товар');
        deteleDataProduct(productID);
        targetProduct.remove();
        console.log('data: ', data);
      } else {
        console.log('Отмена!\nТовар не удален');
      }
      return;
    }
  });
};


// * init start
init();
