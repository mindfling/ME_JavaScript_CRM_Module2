// * elements
// import elements from './elementsDOM.js';

// create Elem функция создания элемента
// взята из интенсива
export const createElem = (tag, attr = {}, text) => {
  const elem = document.createElement(tag);
  Object.assign(elem, attr);
  if (text) {
    elem.textContent = text;
  }
  return elem;
};

// create Row возвращает динамически созданый ряд row
export const createRow = (
    rowNumber, {
      id,
      title,
      category,
      description,
      units,
      count,
      price,
      images,
    }) => {
  // генерируем динамически по элементам
  console.log('images URL: ', id, images);

  const euroSymb = '&#8364;';
  const row = createElem('tr');
  row.id = id;
  row.classList.add('product');
  row.title = `${title}: ${description}`;
  row.dataset.description = description;

  const cellNumb = createElem(
    'td',
    {className: 'table__cell table__cell_index table__cell_numb'},
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
    className: 'table__cell table__cell_left table__cell_cat',
  },
  category,
  );

  const cellUnits = createElem('td',
    {className: 'table__cell table__cell_units'},
    units,
  );

  const cellCount = createElem('td',
    {className: 'table__cell table__cell_count'},
    count,
  );

  const cellPrice = createElem('td', {
    className: 'table__cell table__cell_price',
  });
  cellPrice.innerHTML = `${euroSymb} ${price}`;

  const cellSum = createElem('td', {
    className: 'table__cell table__cell_sum',
  });
  cellSum.innerHTML = `${euroSymb} ${count * price}`;

  const cellBtnsGroup = createElem('td', {
    className: 'table__cell table__cell_btn-wrapper',
  });

  const btnPic = createElem('button', {
    className: 'table__btn table__btn_pic',
    type: 'button',
    title: `Изображение товара: ${title}`,
  });
  btnPic.dataset.pic = images.big;

  const btnEdit = createElem('button', {
    className: 'table__btn table__btn_edit',
    type: 'button',
    title: `Редактировать: ${title}`,
  });

  const btnDel = createElem('button', {
    className: 'table__btn table__btn_del',
    type: 'button',
    title: `Удалить товар: ${title}`,
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
