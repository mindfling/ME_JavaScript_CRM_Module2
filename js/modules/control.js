import data from './dataGoods.js';
import {getRandomInt} from './hash.js';
import {createRow} from './createElements.js';
import * as domElemenst from './createElements.js';
const {
  overlay,
  // modal,
  vendorCodeID,
  // modalClose,
  // modalTitle,
  form,
  productName,
  category,
  description,
  units,
  count,
  checkboxDiscount,
  discountCount,
  price,
  // productImage,
  addGoods,
  tableBody,
  totalPrice,
} = domElemenst;

import {rowsNumberRecount} from './render.js';

// let {isDiscount} = domElemenst;
let isDiscount = checkboxDiscount.checked;


// * get Count Total Price
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

// * count Total Price
export const countTotalPrice = (data) => {
  const euroSymb = '&#8364;';
  const total = getCountTotalPrice(data);
  // totalPrice.textContent = '€ ' + total;
  totalPrice.innerHTML = euroSymb + ' ' + total;
};

// * modal Control
export const modalControl = () => {
  // модальное окно с оверлеем
  // обработка событий окна и формы

  const getVendorID = () => {
    const randomID = getRandomInt(100000000, 999999999);
    // return 'ID' + randomID;
    return randomID;
  };
  // count product total sum
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
    //  при открытии формы автоматически создаем ID товара
    vendorCodeID.textContent = getVendorID();
    console.log('vendor Code ID ', vendorCodeID.textContent);
    //  ставим некоторые поля в значения по умолчанию
    checkboxDiscount.checked = true;
    discountCount.disabled = false;
    discountCount.value = 0;

    count.value = 0;
    price.value = 0;

    //  общая сумма в окне
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


  // * обработка события ввода формы SUBMIT
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
    console.log('new Product: ', newProduct);
    console.log('pushed data: ', data);

    // * addProductPage();
    // const nextRowNumber = data.length;
    // tableBody.append(createRow(nextRowNumber, newProduct));
    tableBody.append(createRow(0, newProduct));
    rowsNumberRecount();
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
