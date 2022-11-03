// * DOM elements
export const overlay = document.querySelector('.overlay');
export const modal = overlay.querySelector('.modal');

export const vendorCodeID = modal.querySelector('.vendor-code__id');
export const modalClose = modal.querySelector('.modal__close');
export const modalTitle = modal.querySelector('.modal__title');

export const form = document.forms.main; // main modal form
export const productName = form.elements.name;
export const category = form.elements.category;
export const description = form.elements.description;
export const units = form.elements.units;
export const count = form.elements.count;
export const checkboxDiscount = form.elements.discount;
// export let isDiscount = checkboxDiscount.checked; // true OR false
export const discountCount = form.elements.discount_count;
export const price = form.elements.price;
export const productImage = form.elements.image;

export const addGoods = document.querySelector('.panel__add-goods');

export const tableBody = document.querySelector('.table__body');
export const totalPrice = document.querySelector('.crm__total-price');


// * create Elem функция создания элемента
// взята из интенсива
export const createElem = (tag, attr = {}, text) => {
  const elem = document.createElement(tag);
  Object.assign(elem, attr);
  if (text) {
    elem.textContent = text;
  }
  return elem;
};

// * create Row возвращает динамически созданый ряд row
export const createRow = (
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
  // row.id = 'id' + id;
  row.id = id;
  row.classList.add('product');
  row.title = title;
  row.dataset.description = description;

  const cellNumb = createElem(
    'td',
    {className: 'table__cell table__cell_number'},
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
