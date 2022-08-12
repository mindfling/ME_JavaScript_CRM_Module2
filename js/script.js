'use strict';

console.log('Hello crm');

// todo
const overlay = document.querySelector('.overlay');

// todo
const modal = overlay.querySelector('.overlay__modal');

// todo button close
// todo сделаем потом
const modalClose = modal.querySelector('.modal__close');
modalClose.addEventListener('click', (event) => {
  console.log('close');
  overlay.classList.remove('active');
});


// todo button submit
// todo сделаем потом
const modalSubmit = modal.querySelector('.modal__submit');

//! Заголовок
const modalTitle = modal.querySelector('.modal__title');
//! Форма
const modalForm = modal.querySelector('.modal__form');
//! Чекбокс
const modalCheckbox = modal.querySelector('.modal__checkbox');
//! Поле рябом с чекбоксом Скидка
const modalInputDiscount = modal.querySelector('.modal__input_discount');

console.log('modalTitle: ', modalTitle);
console.log('modalForm: ', modalForm);
console.log('modalCheckbox: ', modalCheckbox);
console.log('modalInputDiscount: ', modalInputDiscount);

