import {initialData} from './modules/dataGoods.js';

import {modalControl,
  countTotalPrice,
  tableControl,
} from './modules/control.js';

import {clearList, renderGoods} from './modules/render.js';

import {
  initStorage,
} from './modules/serviceStorage.js';
import { tableBody } from './modules/createElements.js';


// * INIT * //
const init = () => {
  // инициализируем данные в хранилище из массива
  const data = initStorage(initialData);
  // очищаем DOM таблицу
  clearList(tableBody);
  // в начале рендерим отрисовываем таблицу товаров
  renderGoods(data);
  // функционал работы с модальным окном и формой
  modalControl();
  // расчет полной суммы вверху таблицы
  countTotalPrice();


  // * обработчик для кнопок товаров
  // ? перенес tableBody.addEventListener(() => {}) в control.js
  tableControl(data);

  // ? storageEventControl()
  window.addEventListener('storage', event => {
    console.log('Данные обновились! обновите страницу');
    alert('Данные обновились! обновите страницу');
    const data = initStorage(initialData);
    clearList(tableBody);
    renderGoods(data);
    modalControl();
    countTotalPrice();
  });
};


// ? где лучше запускать init() // ?
init();
