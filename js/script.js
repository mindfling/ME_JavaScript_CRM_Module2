// * data [{}, {}, ...]
import {initialData} from './modules/dataGoods.js';
console.log('initialData: ', initialData);

import getElements from './modules/elementsDOM.js';

import {
  modalControl,
  countTotalPrice,
  tableControl,
} from './modules/control.js';

import {clearList, renderGoods} from './modules/render.js';

import {initStorage} from './modules/serviceStorage.js';


// * INIT * //
const init = () => {
  // объект DOM элементов на странице
  const elements = getElements();
  const list = elements.tableBody;
  // инициализируем данные в хранилище из массива
  const data = initStorage(initialData);
  clearList(list);
  renderGoods(list, data);
  modalControl(elements);
  countTotalPrice(elements.totalPrice);

  // * обработчик для кнопок товаров
  // ? перенес tableBody.addEventListener(() => {}) в control.js
  tableControl(list, data, elements.totalPrice);

  // ? storageEventControl()
  window.addEventListener('storage', event => {
    console.log('Данные обновились! обновите страницу');
    alert('Данные обновились! обновите страницу');
    const data = initStorage(initialData);
    clearList(list);
    renderGoods(list, data);
    modalControl(elements);
    countTotalPrice(elements.totalPrice);
  });
};

init();
