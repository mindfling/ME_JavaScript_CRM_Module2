import {initialData} from './modules/dataGoods.js';

import {tableBody} from './modules/createElements.js';
// import getRandomInt from './modules/utils.js';
// import {makeDataIdHash} from './modules/hash.js';
import {modalControl, countTotalPrice} from './modules/control.js';
// import {createRow} from './modules/createElements.js';
import {clearList, renderGoods} from './modules/render.js';
import {
  getProductData,
  // setProductData,
  // addProductData,
  removeProductData,
  getDataProduct,
  initStorage,
} from './modules/serviceStorage.js';


// * INIT * //
const init = () => {
  // инициализируем данные в хранилище из массива
  let data = initStorage(initialData);
  // в начале рендерим отрисовываем таблицу товаров
  renderGoods(data);
  // функционал работы с модальным окном и формой
  modalControl();
  // расчет полной суммы вверху таблицы
  countTotalPrice();


  // * обработчик для кнопок товаров
  tableBody.addEventListener('click', (e) => {
    const target = e.target;
    // Клик по кнопке Изображение товара
    if (target.classList.contains('table__btn_pic')) {
      console.log('кнопка Добавить картинку');
      return;
    }
    // Клик по кнопке Редактировать товар
    if (target.classList.contains('table__btn_edit')) {
      console.log('кнопка Редактировать товар');
      return;
    }
    // Клик по кнопке Удалить товар
    if (target.classList.contains('table__btn_del')) {
      const targetProduct = target.closest('.product'); // row product
      const productId = targetProduct?.id;
      // переспрашиваем у пользователя
      if (confirm(`
Удалить товар?
  ID ${productId} 
  ${getDataProduct(data, productId)?.title}`)) {
        removeProductData(productId);
        clearList(tableBody);
        data = getProductData();
        renderGoods(data);
        countTotalPrice();
        console.log('Удалили товар');
      } else {
        console.log('Отмена!\nТовар не удален');
      }
      return;
    }
  });
};


// * init start
init();
