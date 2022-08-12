'use strict';

const overlay = document.querySelector('.overlay');
const modal = overlay.querySelector('.overlay__modal');

// Заголовок
const modalTitle = modal.querySelector('.modal__title');
// Форма
const modalForm = modal.querySelector('.modal__form');
// Чекбокс
const modalCheckbox = modal.querySelector('.modal__checkbox');
// Поле рябом с чекбоксом Скидка
const modalInputDiscount = modal.querySelector('.modal__input_discount');

// проверка
console.log('modalTitle: ', modalTitle);
console.log('modalForm: ', modalForm);
console.log('modalCheckbox: ', modalCheckbox);
console.log('modalInputDiscount: ', modalInputDiscount);


// todo overlay
overlay.classList.remove('active');


// функция вставки ряда
// todo raw
const tableBody = document.querySelector('.table__body');

// * func createRow ver one
const createRow = ({
  rowNumber,
  dataID,
  productName,
  category,
  units,
  amount,
  price,
  sum,
}) => {
  const html = `
<tr>
  <td class="table__cell">${rowNumber}</td>
  <td class="table__cell table__cell_left table__cell_name" 
    data-id="${dataID}">
    <span class="table__cell-id">id: ${dataID}</span>
    ${productName}</td>
  <td class="table__cell table__cell_left">${category}</td>
  <td class="table__cell">${units}</td>
  <td class="table__cell">${amount}</td>
  <td class="table__cell">&#8364;${price}</td>
  <td class="table__cell">&#8364;${amount * price}</td>
  <td class="table__cell table__cell_btn-wrapper">
    <button class="table__btn table__btn_pic" title="Картинка"></button>
    <button class="table__btn table__btn_edit" title="Редактировать"></button>
    <button class="table__btn table__btn_del" title="Удалить"></button>
  </td>
</tr>
`;

  tableBody.insertAdjacentHTML('beforeend', html);
  return html;
};

// * func createRow ver two use createElement
const createRow = (table, obj = {}) => {
  // генерируем динамически по элементам
  const row = document.createElement('tr');

  const cellNumber = document.createElement('td');
  cellNumber.classList.add('table__cell');
  cellNumber.textContent = rowNumber;

  // todo all cells

  return;
}

// * func renderGoods
const renderGoods = (arr = []) => {
  console.log('перебираем массив объектов');
  return;
};


// todo test
createRow({
  rowNumber: 22,
  dataID: 1234567890,
  productName: 'Навигационный телевизор',
  category: 'Техника',
  units: 'единица',
  amount: 9,
  price: 100,
  sum: 200,
});
