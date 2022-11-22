'use strict';


// данные списик объектов наших товаров
const data = [
  {
    id: 11065,
    title: 'Смартфон RedME 15M 64GB',
    price: 100,
    description: 'представитель флагманской линейки выпущенной во второй',
    category: 'Смартфон',
    discont: true,
    discontPercent: 25,
    count: 1,
    units: 'шт',
    images: {
      small: 'img/smrtxiaomi11t-m.jpg',
      big: 'img/smrtxiaomi11t-b.jpg',
    },
  },
  {
    id: 1106515540,
    title: 'Смартфон Xiaomi 11T 8/128GB',
    price: 150,
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
    price: 400,
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
    price: 100,
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
    price: 20,
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
    count: 10,
    units: 'м',
    images: {
      small: 'img/lan_proconnect43-3-25.jpg',
      big: 'img/lan_proconnect43-3-25-b.jpg',
    },
  },
];


// * getRandomInt
const getRandomInt = (min, max) => {
  min = min < max ? min : max;
  max = min > max ? min : max;
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
};


// todo внутри modalControl()
const addGoods = document.querySelector('.panel__add-goods');
const tableBody = document.querySelector('.table__body');
const totalPrice = document.querySelector('.crm__total-price');

// * getCountTotalPrice
const getCountTotalPrice = (data) => {
  let total = 0;
  total = data.reduce((previousSumm, currentProduct) => {
    // сумма отдельного товара
    const sum = currentProduct.count * currentProduct.price;
    currentProduct.sum = sum;
    // return (previousSumm + currentProduct.count * currentProduct.price);
    return (previousSumm + sum);
  }, 0);
  return total;
};

// * countTotalPrice
const countTotalPrice = (data) => {
  const euroSymb = '&#8364;';
  const total = getCountTotalPrice(data);
  // totalPrice.textContent = '€ ' + total;
  totalPrice.innerHTML = euroSymb + ' ' + total;
};

// * getDataProduct
const getDataProduct = (data, id) => {
  // filter фильтрует элементы выдает массив контактов с данным id
  const product = data.filter(product => (product.id === id));
  return product[0];
};

// * deteleDataProduct
const deteleDataProduct = (data, id) => {
  // удалить этот элем из массива
  data.forEach((product, index) => {
    if (product.id === id) {
      data.splice(index, 1);
    }
  });
};

// * hashCode
const hashCode = (str) => {
  let hash = 0;
  for (let i = 0, len = str.length; i < len; i++) {
    const chr = str.charCodeAt(i);
    hash = (hash << 5) - hash + chr;
    hash |= 0; // Convert to 32bit integer
  }
  return Math.abs(hash);
};

// * makeDataIdHash
const makeDataIdHash = (data) => {
  data.forEach((product, index) => {
    const str = '' + index +
    Object.values(product).reduce((accum, curr) => (accum + curr), '');
    product.id = hashCode(str).toString();
  });
  return;
};

// * createElem функция создания элемента
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
      description,
      units,
      count,
      price,
    }) => {
  // генерируем динамически по элементам
  const euroSymb = '&#8364;';
  const row = createElem('tr');
  row.id = 'id' + id;
  row.classList.add('product');
  row.title = title;
  row.dataset.description = description;

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
          description: product.description,
          units: product.units,
          price: product.price,
          count: product.count,
        }),
      );
    });
  }
  return;
};


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

    if (confirm(`
Удалить товар?
  ID ${productID} 
  ${getDataProduct(data, productID)?.title}`)) {
      console.log('Удаляем товар');
      deteleDataProduct(data, productID);
      targetProduct.remove();
      console.log('data: ', data);
    } else {
      console.log('Отмена!\nТовар не удален');
    }
    return;
  }
});


// * modalControl
const modalControl = () => {
  // модальное окно с оверлеем
  // обработка событий окна и формы

  const overlay = document.querySelector('.overlay');
  const modal = overlay.querySelector('.modal');

  const vendorCodeID = modal.querySelector('.vendor-code__id');
  const modalClose = modal.querySelector('.modal__close');
  const modalTitle = modal.querySelector('.modal__title');

  const form = document.forms.main; // main modal form
  const productName = form.elements.name;
  const category = form.elements.category;
  const description = form.elements.description;
  const units = form.elements.units;
  const count = form.elements.count;
  const checkboxDiscount = form.elements.discount;
  let isDiscount = checkboxDiscount.checked; // true OR false
  const discountCount = form.elements.discount_count;
  const price = form.elements.price;
  const productImage = form.elements.image;


  const getVendorID = _ => {
    // todo randi or hash
    const randomID = getRandomInt(100000000, 999999999);
    // return 'ID' + randomID;
    return randomID;
  };

  let summ = 0;
  const totalSumm = form.elements.total; // сумма out

  const totalFormCount = () => {
    // пересчитываем общую сумму
    summ = parseInt(price.value) * parseInt(count.value);
    if (checkboxDiscount.checked) {
      // вычет скидки в %%
      summ -= summ * parseInt(discountCount.value) / 100;
    }
    // totalSumm.value = '€ ' + summ;
    totalSumm.value = summ ? '€ ' + summ : 0;
    return summ;
  };

  // * открываем модальное окно
  const openModal = (overlay) => {
    overlay.classList.add('active');
    // * при открытии формы автоматически создаем ID товара
    vendorCodeID.textContent = getVendorID();
    // * ставим некоторые поля в значения по умолчанию
    checkboxDiscount.checked = true;
    discountCount.disabled = false;
    discountCount.value = 0;

    count.value = 0;
    price.value = 0;

    // * общая сумма в окне
    totalFormCount();
    console.log('Open Modal');
  };

  // * закрываем модальное окно
  const closeModal = (overlay) => {
    overlay.classList.remove('active');
    // При открытии модального окна должен генерироваться случайный id
    // и заполняться span с классом vendor-code__id
    console.log('Close Modal');
  };

  // * клик по кнопке Добавить Товар
  addGoods.addEventListener('click', (e) => {
    openModal(overlay);
  });

  // * обработчик расфокуса
  const blurHandler = e => {
    const target = e.target;
    if (target === count ||
        target === price ||
        target === checkboxDiscount ||
        target === discountCount) {
      // totalSumm.value = 'Ru ' + summ;
      totalFormCount();
    }
  };

  // * событие теряет фокус
  productName.addEventListener('blur', blurHandler);
  category.addEventListener('blur', blurHandler);
  description.addEventListener('blur', blurHandler);
  units.addEventListener('blur', blurHandler);
  count.addEventListener('blur', blurHandler);
  discountCount.addEventListener('blur', blurHandler);
  price.addEventListener('blur', blurHandler);

  // * обработка формы SUBMIT
  form.addEventListener('submit', e => {
    e.preventDefault();
    console.log('form submit');
    const formData = new FormData(form);

    const product = Object.fromEntries(formData);
    product.discount = isDiscount; // checked
    // product.discount = !!product.discount; // true OR false
    // product.discount = product.discount ? true : false;
    product.discount_count = product.discount ? product.discount_count : 0;

    const newProduct = {
      id: vendorCodeID.textContent,
      title: product.name,
      category: product.category,
      description: product.description,
      units: product.units,
      count: product.count,
      price: product.price,
      discont: product.discount,
      discountCount: product.discount_count ? product.discount_count : 0,
      summ,
    };

    // * addProductData();
    data.push(newProduct);
    console.log('data: ', data);

    // * addProductPage();
    const nextRowNumber = data.length;
    tableBody.append(createRow(nextRowNumber, newProduct));
    countTotalPrice(data);
    form.reset();
    closeModal(overlay);
  });


  // * обработчик на оверлей
  overlay.addEventListener('click', e => {
    const target = e.target;
    if (target === overlay ||
        target.closest('.modal__close')) {
      console.log('click to close modal');
      closeModal(overlay);
    }
  });


  // * ставим чекбокс дискаунт
  checkboxDiscount.addEventListener('change', e => {
    isDiscount = checkboxDiscount.checked;
    const disabled = discountCount.disabled;
    if (disabled) {
      discountCount.disabled = false;
      discountCount.value = 0;
      console.log('Активирован дискаунт');
    } else {
      discountCount.disabled = true;
      discountCount.value = '';
      console.log('Дискаунт отключен');
    }
    totalFormCount();
  });

  // в самом начале закрыть overlay вместе с модальным окном
  closeModal(overlay);
};


// * INIT * //
// пересчитываем id hash у каждого товара
makeDataIdHash(data);

// функционал работы с модальным окном и формой
modalControl(data);

// в начале рендерим отрисовываем таблицу товаров
renderGoods(data);

// расчет полной суммы вверху таблицы ??? как лучше ???
countTotalPrice(data);
