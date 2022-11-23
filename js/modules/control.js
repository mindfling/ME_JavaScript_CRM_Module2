/* eslint-disable max-len */
import {getRandomInt} from './hash.js';

import {createRow} from './createElements.js';

import {
  addProductData,
  getDataProduct,
  getProductData,
  removeProductData,
} from './serviceStorage.js';

import {clearList, renderGoods} from './render.js';

import {pictureWindow} from './pictureModal.js';


// get Count Total Price
const getCountTotalPrice = (data) => {
  let total = 0;
  total = data.reduce((previousSumm, currentProduct) => {
    const sum = currentProduct.count * currentProduct.price;
    currentProduct.sum = sum;
    // return (previousSumm + currentProduct.count * currentProduct.price);
    return (previousSumm + sum);
  }, 0);
  return total.toFixed(2);
};

// count Total Price всей таблицы
export const countTotalPrice = (total) => {
  // eslint-disable-next-line no-unused-vars
  const euroSymb = '&#8364;';
  const rubSymb = '&#8381;';
  const data = getProductData();
  total.innerHTML = `${rubSymb} ${getCountTotalPrice(data)}`;
};

const addProductPage = (list, product) => {
  const data = getProductData();
  // следующий номер товара в таблице ?
  const nextRowNumber = data.length;
  list.append(createRow(nextRowNumber, product));
};

// modal Control обработка событий модального окна с оверлеем
export const modalControl = ({
  overlay,
  vendorCodeID,
  form,
  productName,
  category,
  description,
  units,
  count,
  checkboxDiscount,
  discountCount,
  price,
  addGoods,
  tableBody,
  totalPrice: total,
}) => {
  // eslint-disable-next-line no-unused-vars
  const getVendorRandomID = () => {
    const randomID = getRandomInt(100000000, 999999999);
    return randomID;
  };

  const getVendorID = () => Math.random().toString().substring(2, 14);

  let summ = 0;
  const totalFormCount = () => {
    // пересчитываем общую сумму
    const totalSumm = form.elements.total; // сумма out
    summ = (parseFloat(price.value) * parseInt(count.value)).toFixed(2);
    // вычет скидки в %%
    if (checkboxDiscount.checked) {
      summ = (summ * (1 - parseFloat(discountCount.value) / 100)).toFixed(2);
    }
    totalSumm.value = summ ? `€ ${summ}` : '0.00';
    return summ;
  };

  // открываем модальное окно
  const openModal = (overlay) => {
    overlay.classList.add('active');
    //  при открытии формы создаем ID товара и ставим поля по умолчанию
    vendorCodeID.textContent = getVendorID();
    checkboxDiscount.checked = true;
    discountCount.disabled = false;
    discountCount.value = 0;
    count.value = 0;
    price.value = 0;
    totalFormCount(); // 0
    console.log('Open Modal');
  };

  // закрываем модальное окно
  const closeModal = (overlay) => {
    overlay.classList.remove('active');
    console.log('Close Modal');
  };

  // клик по кнопке Добавить Товар
  addGoods.addEventListener('click', (e) => {
    openModal(overlay);
  });

  // обработчик расфокуса blur
  const blurHandler = e => {
    const target = e.target;
    if (target === count ||
        target === price ||
        target === checkboxDiscount ||
        target === discountCount) {
      totalFormCount();
    }
  };

  // событие когда поле теряет фокус
  productName.addEventListener('blur', blurHandler);
  category.addEventListener('blur', blurHandler);
  description.addEventListener('blur', blurHandler);
  units.addEventListener('blur', blurHandler);
  count.addEventListener('blur', blurHandler);
  discountCount.addEventListener('blur', blurHandler);
  price.addEventListener('blur', blurHandler);


  // обработка события ввода формы submit
  form.addEventListener('submit', e => {
    e.preventDefault();
    console.log('form submit');
    const formData = new FormData(form);
    const product = Object.fromEntries(formData);
    const isDiscount = checkboxDiscount.checked; // ???
    product.discount = isDiscount; // checked
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
    console.log('Добавляем товар');
    // ?? можно ли обединить
    addProductData(newProduct); // добавляем данные в хранилище
    addProductPage(tableBody, newProduct); // дабавляем строку товара в таблицу

    countTotalPrice(total);
    form.reset();
    closeModal(overlay);
  });


  // обработчик на оверлей
  overlay.addEventListener('click', e => {
    const target = e.target;
    if (target === overlay ||
        target.closest('.modal__close')) {
      closeModal(overlay);
    }
  });


  // ставим чекбокс дискаунт
  checkboxDiscount.addEventListener('change', e => {
    // eslint-disable-next-line no-unused-vars
    const isDiscount = checkboxDiscount.checked;
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

// обработчик для кнопок товаров
export const tableControl = (list, data, total) => {
  list.addEventListener('click', (e) => {
    const target = e.target;
    // Клик по кнопке Изображение товара
    if (target.classList.contains('table__btn_pic')) {
      console.log('кнопка Добавить картинку');

      const url = target.dataset?.pic;
      const WIN_WIDTH = 800;
      const WIN_HEIGHT = 600;
      pictureWindow(WIN_WIDTH, WIN_HEIGHT, url);
      return;
    }
    // Клик по кнопке Редактировать товар
    if (target.classList.contains('table__btn_edit')) {
      console.log('кнопка Редактировать товар');
      return;
    }
    // Клик по кнопке Удалить товар
    if (target.classList.contains('table__btn_del')) {
      const targetProduct = target.closest('.product'); // row product
      const productId = targetProduct?.id;
      // переспрашиваем у пользователя
      if (confirm(`
    Удалить товар?
    ID ${productId} 
    ${getDataProduct(data, productId)?.title}`)) {
        removeProductData(productId);
        clearList(list);
        data = getProductData();
        renderGoods(list, data);
        countTotalPrice(total);
        console.log('Удалили товар');
      } else {
        console.log('Отмена!\nТовар не удален');
      }
      return;
    }
  });
};
