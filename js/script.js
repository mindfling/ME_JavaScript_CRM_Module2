import data from './modules/dataGoods.js';
console.log('initial products data: ', data);
import {tableBody} from './modules/createElements.js';
// import {makeDataIdHash} from './modules/hash.js';
import {modalControl, countTotalPrice} from './modules/control.js';
import {renderGoods, rowsNumberRecount} from './modules/render.js';
import {getDataProduct, deteleDataProduct} from './modules/serviceData.js';

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
    console.log('for remove targetProduct: ', targetProduct);
    const productId = targetProduct?.id;

    if (confirm(`
Удалить товар?
  ID ${productId} 
  ${getDataProduct(data, productId)?.title}`)) {
      console.log('Удаляем товар');
      console.log('data before remove: ', data);
      deteleDataProduct(data, productId);
      console.log('productId for remove: ', productId);
      targetProduct.remove();
      console.log('data after remove: ', data);
      rowsNumberRecount();
    } else {
      console.log('Отмена!\nТовар не удален');
    }
    return;
  }
});


// * INIT * //
const init = () => {
  // в начале рендерим отрисовываем таблицу товаров
  renderGoods(data);
  rowsNumberRecount();
  // функционал работы с модальным окном и формой
  modalControl(data);
  // расчет полной суммы вверху таблицы
  countTotalPrice(data);
};

// * init start
init();
