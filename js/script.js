import {initialData} from './modules/dataGoods.js';

import {modalControl,
  countTotalPrice,
  tableControl,
} from './modules/control.js';

import {renderGoods} from './modules/render.js';

import {
  initStorage,
} from './modules/serviceStorage.js';


// * INIT * //
const init = () => {
  // инициализируем данные в хранилище из массива
  const data = initStorage(initialData);
  // в начале рендерим отрисовываем таблицу товаров
  renderGoods(data);
  // функционал работы с модальным окном и формой
  modalControl();
  // расчет полной суммы вверху таблицы
  countTotalPrice();


  // * обработчик для кнопок товаров
  // ? перенес tableBody.addEventListener(() => {}) в control.js
  tableControl(data);
};


// ? где лучше запускать init() // ?
init();
