// * DOM elements

const getElements = () => {
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
  // const isDiscount = checkboxDiscount.checked; // ???
  const discountCount = form.elements.discount_count;
  const price = form.elements.price;
  const productImage = form.elements.image;

  const addGoods = document.querySelector('.panel__add-goods');
  const tableBody = document.querySelector('.table__body');
  const totalPrice = document.querySelector('.crm__total-price');

  return {
    overlay,
    vendorCodeID,
    modalClose,
    modalTitle,
    form,
    productName,
    category,
    description,
    units,
    count,
    checkboxDiscount,
    // isDiscount,
    discountCount,
    price,
    productImage,
    addGoods,
    tableBody,
    totalPrice,
  };
};

export default getElements;
