import {initialData} from './modules/dataGoods.js';
// todo make func initStorage(initialData)

import {tableBody} from './modules/createElements.js';
// import getRandomInt from './modules/utils.js';
// import {makeDataIdHash} from './modules/hash.js';
import {modalControl, countTotalPrice} from './modules/control.js';
// import {createRow} from './modules/createElements.js';
import {renderGoods} from './modules/render.js';
import {
  getProductData,
  setProductData,
  addProductData,
  removeProductData,
  getDataProduct,
} from './modules/serviceStorage.js';


// * INIT * //
const init = () => {
  // todo
  const storageData = getProductData();
  let data = [];

  if (storageData && storageData.length > 0) {
  // если в хранилище есть данные
    data = storageData;
    console.log('Загрузка списка товаров из хранилища', data);
  } else {
  // если в хранилище пусто
    data = initialData;
    setProductData(data);
    console.log('Инициализация списка продуктов из массива data', data);
  }
  // в начале рендерим отрисовываем таблицу товаров
  renderGoods(data);
  // функционал работы с модальным окном и формой
  modalControl(data);
  // расчет полной суммы вверху таблицы
  countTotalPrice(data);


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
        console.log('Удаляем товар');
        removeProductData(productId);
        targetProduct.remove();
        data = getProductData();
        countTotalPrice();
        console.log('data after delete: ', data);
        // todo
      } else {
        console.log('Отмена!\nТовар не удален');
      }
      return;
    }
  });
};


// * init start
init();
