'use strict';

// данные списик объектов наших товаров
const data = [
  {
    id: 1111,
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
    id: 22,
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
    id: 13,
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
    id: 144,
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

// модальное окно с оверлеем
const overlay = document.querySelector('.overlay');
const modal = overlay.querySelector('.overlay__modal');

// Заголовок, Форма, Чекбокс, Поле рябом с чекбоксом Скидка
const modalTitle = modal.querySelector('.modal__title');
const modalForm = modal.querySelector('.modal__form');
const modalCheckbox = modal.querySelector('.modal__checkbox');
const modalInputDiscount = modal.querySelector('.modal__input_discount');
const modalClose = modal.querySelector('.modal__close');
const addGoods = document.querySelector('.panel__add-goods');


// закрывем модальное окно
const closeModalOverlay = (overlay) => {
  overlay.classList.remove('active');
};

// закрывем модальное окно
const openModalOverlay = (overlay) => {
  overlay.classList.add('active');
};

addGoods.addEventListener('click', (e) => {
  openModalOverlay(overlay);
});

overlay.addEventListener('click', (e) => {
  const target = e.target;

  if (target.closest('.modal')) {
    // отрабатывем клик по модальному окну
    console.log('target closest modal');
    return;
  }
  // закрываем модалку при клике мимо окна
  closeModalOverlay(overlay);
});

// отдельный клик по кнопке закрыть окно
modalClose.addEventListener('click', (event) => {
  closeModalOverlay(overlay);
});

// основное тело таблицы
const tableBody = document.querySelector('.table__body');


// функция создания элемента
// взята из интенсива
const createElem = (tag, attr = {}, text) => {
  const elem = document.createElement(tag);
  Object.assign(elem, attr);
  if (text) {
    elem.textContent = text;
  }
  return elem;
};

// createRow возвращает динамически созданый ряд row
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

// renderGoods перебирает массив объектов товаров и рендерит строки
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



// в самом начале закрыть overlay вместе с модальным окном
closeModalOverlay(overlay);

// в начале рендерим отрисовываем таблицу товаров
renderGoods(data);
