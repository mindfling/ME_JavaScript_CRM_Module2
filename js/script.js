import data from './modules/dataGoods.js';
import {tableBody} from './modules/createElements.js';
import {modalControl, countTotalPrice} from './modules/control.js';
import {renderGoods, rowsNumberRecount} from './modules/render.js';
import {getDataProduct, deteleDataProduct} from './modules/serviceData.js';

console.log('initial products data: ', data);


// * INIT * //
const init = () => {
  // в начале рендерим отрисовываем таблицу товаров
  renderGoods(data);
  rowsNumberRecount();
  // функционал работы с модальным окном и формой
  modalControl(data);
  // расчет полной суммы вверху таблицы
  countTotalPrice(data);

  // обработчик для кнопок товаров
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
      const productId = targetProduct?.id;
      if (confirm(`
  Удалить товар?
    ID ${productId} 
    ${getDataProduct(data, productId)?.title}`)) {
        console.log('Удаляем товар');
        deteleDataProduct(data, productId);
        targetProduct.remove();
        countTotalPrice(data);
        rowsNumberRecount();
      } else {
        console.log('Отмена!\nТовар не удален');
      }
      return;
    }
  });
};

// * init start
init();
