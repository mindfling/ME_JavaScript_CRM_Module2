'use strict';

const overlay = document.querySelector('.overlay');
const modal = overlay.querySelector('.overlay__modal');

// Заголовок, Форма, Чекбокс, Поле рябом с чекбоксом Скидка
const modalTitle = modal.querySelector('.modal__title');
const modalForm = modal.querySelector('.modal__form');
const modalCheckbox = modal.querySelector('.modal__checkbox');
const modalInputDiscount = modal.querySelector('.modal__input_discount');

// // проверка
// console.log('modalTitle: ', modalTitle);
// console.log('modalForm: ', modalForm);
// console.log('modalCheckbox: ', modalCheckbox);
// console.log('modalInputDiscount: ', modalInputDiscount);

// todo overlay
overlay.classList.remove('active');

const tableBody = document.querySelector('.table__body');

// функция вставки ряда
// * func createRow ver one
const createRowHTML = (row, {
  id,
  title,
  category,
  units,
  count,
  price,
}) => {
  const tr = document.createElement('tr');
  tr.innerHTML = `
  <td class="table__cell">${row}</td>
  <td class="table__cell table__cell_left table__cell_name" 
    data-id="${id}">
    <span class="table__cell-id">id: ${id}</span>
    ${title}</td>
  <td class="table__cell table__cell_left">${category}</td>
  <td class="table__cell">${units}</td>
  <td class="table__cell">${count}</td>
  <td class="table__cell">&#8364; ${price}</td>
  <td class="table__cell">&#8364; ${count * price}</td>
  <td class="table__cell table__cell_btn-wrapper">
    <button class="table__btn table__btn_pic" title="Картинка"></button>
    <button class="table__btn table__btn_edit" title="Редактировать"></button>
    <button class="table__btn table__btn_del" title="Удалить"></button>
  </td>
`;
  // tr.insertAdjacentHTML('afterbegin', html);
  return tr;
};

// // * func createRow ver two use createElement
// const createRowMore = (table, obj = {}) => {
//   // генерируем динамически по элементам
//   const row = document.createElement('tr');

//   const cellNumber = document.createElement('td');
//   cellNumber.classList.add('table__cell');
//   cellNumber.textContent = row;

//   // todo all cells

//   return;
// };

// // * func renderGoods
// const renderGoods = (arr = []) => {
//   console.log('перебираем массив объектов');
//   return;
// };


// todo test вставка ряда в таблицу
tableBody.append(
  createRowHTML(25, {
    id: 1234567890,
    title: 'Навигационный телевизор',
    category: 'Техника',
    units: 'единица',
    count: 9,
    price: 100,
  }),
);

tableBody.append(createRowHTML(26, {
  'id': 1,
  'title': 'Смартфон Xiaomi 11T 8/128GB',
  'price': 2700,
  'description': 'Смартфон Xiaomi 11T – это представитель флагманской линейки, выпущенной во второй половине 2021 года. И он полностью соответствует такому позиционированию, предоставляя своим обладателям возможность пользоваться отличными камерами, ни в чем себя не ограничивать при запуске игр и других требовательных приложений.',
  'category': 'mobile-phone',
  'discont': false,
  'count': 3,
  'units': 'шт',
  'images': {
    'small': 'img/smrtxiaomi11t-m.jpg',
    'big': 'img/smrtxiaomi11t-b.jpg',
  },
}));
