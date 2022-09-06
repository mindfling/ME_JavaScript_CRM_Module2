'use strict';

// данные списик объектов наших товаров
const data = [
  {
    id: 1106515540,
    title: 'Смартфон Xiaomi 11T 8/128GB',
    price: 27000,
    description: 'Смартфон Xiaomi 11T – это представитель флагманской линейки' +
      ' выпущенной во второй половине 2021 года. И он полностью соответствует' +
      ' такому позиционированию, предоставляя своим обладателям возможность' +
      ' пользоваться отличными камерами, ни в чем себя не ограничивать при' +
      ' запуске игр и других требовательных приложений.',
    category: 'mobile-phone',
    discont: false,
    count: 3,
    units: 'шт',
    images: {
      small: 'img/smrtxiaomi11t-m.jpg',
      big: 'img/smrtxiaomi11t-b.jpg',
    },
  },
  {
    id: 'ID1472328480',
    title: 'Радиоуправляемый автомобиль Cheetan',
    price: 4000,
    description: `Внедорожник на дистанционном управлении. 
    Скорость 25км/ч. Возраст 7 - 14 лет`,
    category: 'toys',
    discont: 5,
    count: 1,
    units: 'шт',
    images: {
      small: 'img/cheetancar-m.jpg',
      big: 'img/cheetancar-b.jpg',
    },
  },
  {
    id: '333076611',
    title: 'ТВ приставка MECOOL KI',
    price: 12400,
    description: 'Всего лишь один шаг сделает ваш телевизор умным, ' +
      'Быстрый и умный MECOOL KI PRO, прекрасно спроектированный, сочетает ' +
      'в себе прочный процессор Cortex-A53 с чипом Amlogic S905D',
    category: 'tv-box',
    discont: 15,
    count: 4,
    units: 'шт',
    images: {
      small: 'img/tvboxmecool-m.jpg',
      big: 'img/tvboxmecool-b.jpg',
    },
  },
  {
    id: 1352840121,
    title: 'Витая пара PROConnect 01-0043-3-25',
    price: 22,
    description: 'Витая пара Proconnect 01-0043-3-25 является сетевым кабелем' +
      ' с 4 парами проводов типа UTP, в качестве проводника в которых' +
      ' используется алюминий, плакированный медью CCA Такая неэкранированная' +
      ' витая пара с одножильными проводами диаметром 0.50 мм широко' +
      ' применяется в процессе сетевых монтажных работ. С ее помощью вы' +
      ' сможете обеспечить развертывание локальной сети в домашних условиях' +
      ' или на предприятии, объединить все необходимое вам' +
      ' оборудование в единую сеть.',
    category: 'cables',
    discont: false,
    count: 420,
    units: 'Volts',
    images: {
      small: 'img/lan_proconnect43-3-25.jpg',
      big: 'img/lan_proconnect43-3-25-b.jpg',
    },
  },
];
console.log('data: ', data);

// модальное окно с оверлеем
const overlay = document.querySelector('.overlay');
const modal = overlay.querySelector('.modal');

// Заголовок, Форма, Чекбокс, Поле рябом с чекбоксом Скидка
const modalTitle = modal.querySelector('.modal__title');
const modalForm = modal.querySelector('.modal__form');
const modalCheckbox = modal.querySelector('.modal__checkbox');
const modalInputDiscount = modal.querySelector('.modal__input_discount');
const modalClose = modal.querySelector('.modal__close');
const addGoods = document.querySelector('.panel__add-goods');

// сюда рендерим строки товаров
const tableBody = document.querySelector('.table__body');

console.log('overlay: ', overlay);
console.log('modal: ', modal);
console.log('modalTitle: ', modalTitle);
console.log('modalForm: ', modalForm);
console.log('modalCheckbox: ', modalCheckbox);
console.log('modalInputDiscount: ', modalInputDiscount);
console.log('modalClose: ', modalClose);
console.log('addGoods: ', addGoods);
console.log('tableBody: ', tableBody);


// * getDataContact
const getDataProduct = (data, id) => {
  // filter фильтрует элементы выдает массив контактов с данным id
  const product = data.filter(product => (product.id === id));
  console.log('product: ', product);
  return product[0];
};

// * deteleDataContact
const deteleDataProduct = (data, id) => {
  // удалить этот элем из массива
  data.forEach((product, index) => {
    if (product.id === id) {
      data.splice(index, 1);
    }
  });
};

/* * Returns a hash code from a string use it for hosh contocts */
const hashCode = (str) => {
  let hash = 0;
  for (let i = 0, len = str.length; i < len; i++) {
    const chr = str.charCodeAt(i);
    hash = (hash << 5) - hash + chr;
    hash |= 0; // Convert to 32bit integer
  }
  return Math.abs(hash);
};

// todo func makeDataIdHash
const makeDataIdHash = (data) => {
  data.forEach((product, index) => {
    const str = '' + index +
    Object.values(product).reduce((accum, curr) => (accum + curr), '');
    // product.id = 'id' + hashCode(str);
    product.id = hashCode(str).toString();
  });
  return;
};

// * закрывем модальное окно
const openModalOverlay = (overlay) => {
  overlay.classList.add('active');
  console.log('Open Modal');
};

// * закрывем модальное окно
const closeModalOverlay = (overlay) => {
  overlay.classList.remove('active');
  console.log('Close Modal');
};

// * клик по кнопке Добавить Товар
addGoods.addEventListener('click', (e) => {
  openModalOverlay(overlay);
});

// * обработчик на оверлей
overlay.addEventListener('click', (e) => {
  const target = e.target;
  if (target.closest('.modal') && !target.closest('.modal__close')) {
    console.log('close it');
    return;
  }
  // закрываем модалку при клике мимо окна
  closeModalOverlay(overlay);
});

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

  // todo Клик по кнопке Удалить товар
  if (target.classList.contains('table__btn_del')) {
    const targetProduct = target.closest('.product');
    const productID = targetProduct?.id;

    if (confirm(`
Удалить товар?
  ID ${productID} 
  ${getDataProduct(data, productID).title}`)) {
      console.log('Удаляем товар');
      // удаляем product из массива data
      deteleDataProduct(data, productID);
      // удаляем DOM елемент ряд таблицы
      targetProduct.remove();
      // выводим в консоль все что осталось
      console.log('data: ', data);
    } else {
      console.log('Отмена!\nТовар не удален');
    }
    return;
  }
});

// * функция создания элемента
// взята из интенсива
const createElem = (tag, attr = {}, text) => {
  const elem = document.createElement(tag);
  Object.assign(elem, attr);
  if (text) {
    elem.textContent = text;
  }
  return elem;
};

// * createRow возвращает динамически созданый ряд row
const createRow = (
    rowNumber, {
      id,
      title,
      category,
      units,
      count,
      price,
    }) => {
  // генерируем динамически по элементам
  const euroSymb = '&#8364;';
  const row = createElem('tr');
  row.id = id;
  row.classList.add('product');

  const cellNumb = createElem(
    'td',
    {className: 'table__cell'},
    rowNumber,
  );

  const cellID = createElem(
    'td',
    {className: 'table__cell table__cell_left table__cell_name'},
    title,
  );
  cellID.prepend(
    createElem(
      'span',
      {className: 'table__cell-id'},
      `id: ${id}`,
    ),
  );

  const cellCategory = createElem('td', {
    className: 'table__cell table__cell_left',
  },
  category,
  );

  const cellUnits = createElem('td',
    {className: 'table__cell'},
    units,
  );

  const cellCount = createElem('td',
    {className: 'table__cell'},
    count,
  );

  const cellPrice = createElem('td', {
    className: 'table__cell',
  });
  cellPrice.innerHTML = `${euroSymb} ${price}`;

  const cellSum = createElem('td', {
    className: 'table__cell',
  });
  cellSum.innerHTML = `${euroSymb} ${count * price}`;

  const cellBtnsGroup = createElem('td', {
    className: 'table__cell table__cell_btn-wrapper',
  });
  const btnPic = createElem('button', {
    className: 'table__btn table__btn_pic',
    type: 'button',
    title: 'Изображение товара',
  });
  const btnEdit = createElem('button', {
    className: 'table__btn table__btn_edit',
    type: 'button',
    title: 'Редактировать товар',
  });
  const btnDel = createElem('button', {
    className: 'table__btn table__btn_del',
    type: 'button',
    title: 'Удалить товар',
  });
  cellBtnsGroup.append(btnPic, btnEdit, btnDel);

  row.append(
    cellNumb,
    cellID,
    cellCategory,
    cellUnits,
    cellCount,
    cellPrice,
    cellSum,
    cellBtnsGroup,
  );

  return row;
};

// * renderGoods перебирает массив объектов товаров и рендерит строки
const renderGoods = (products = []) => {
  // перебираем массив объектов
  if (Array.isArray(products)) {
    // вставляем ряды в таблицу
    products.forEach((product, index) => {
      tableBody.append(
        createRow(index + 1, {
          id: product.id,
          title: product.title,
          category: product.category,
          units: product.units,
          count: product.count,
          price: product.price,
        }),
      );
    });
  }
  return;
};


// * INIT * //
// пересчитываем id hash у каждого товара
makeDataIdHash(data);

// в самом начале закрыть overlay вместе с модальным окном
closeModalOverlay(overlay);

// в начале рендерим отрисовываем таблицу товаров
renderGoods(data);
