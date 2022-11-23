/* eslint-disable max-len */
// данные списик объектов наших товаров
export const initialData = [
  {
    id: '134177864407',
    title: 'Смартфон RedME 15M 64GB',
    price: 100,
    description: 'Представитель флагманской линейки выпущенной во второй половине 2022 года уже...',
    category: 'Смартфон',
    discont: true,
    discontPercent: 25,
    count: 1,
    units: 'шт',
    images: {
      small: 'http://dummy-images.com/business/dummy-400x300-Laptop.jpg',
      big: 'http://dummy-images.com/business/dummy-800x600-Laptop.jpg',
    },
  },
  {
    id: '173639347407',
    title: 'Смартфон Xiaomi 11T 8/128GB',
    price: 150,
    description: 'Смартфон Xiaomi 11T – это представитель флагманской линейки выпущенной во второй половине 2021 года. И он полностью соответствует такому позиционированию, предоставляя своим обладателям возможность пользоваться отличными камерами, ни в чем себя не ограничивать при запуске игр и других требовательных приложений.',
    category: 'Телефон',
    discont: false,
    count: 3,
    units: 'шт',
    images: {
      small: 'http://dummy-images.com/business/dummy-400x300-Laptop-plain.jpg',
      big: 'http://dummy-images.com/business/dummy-800x600-Laptop-plain.jpg',
    },
  },
  {
    id: '63818138507',
    title: 'Радиоуправляемый моторный автомобиль Motocross',
    price: 400,
    description: `Внедорожник на дистанционном управлении Радиоуправляемый автомобиль. Скорость 25км/час. Для детей возрастом 27 - 49 лет`,
    category: 'toys',
    discont: 5,
    count: 1,
    units: 'шт',
    images: {
      small: 'http://dummy-images.com/business/dummy-400x300-Laptop-plain.jpg',
      big: 'http://dummy-images.com/business/dummy-800x600-Laptop.jpg',
    },
  },
  {
    id: '92972231207',
    title: 'ТВ приставка MECOOL KI',
    price: 100,
    description: 'Всего лишь один шаг сделает ваш телевизор умным, Быстрый и умный MECOOL KI PRO, прекрасно спроектированный, сочетает в себе прочный процессор Cortex-A53 с чипом Amlogic S905D',
    category: 'tv-box',
    discont: 15,
    count: 4,
    units: 'шт',
    images: {
      small: 'http://dummy-images.com/business/dummy-400x300-Laptop.jpg',
      big: 'http://dummy-images.com/business/dummy-800x600-Laptop-plain.jpg',
    },
  },
  {
    id: '277470336507',
    title: 'Витая пара PROConnect 01-0043-3-25',
    price: 20,
    description: 'Витая пара Proconnect 01-0043-3-25 является сетевым кабелем с 4 парами проводов типа UTP, в качестве проводника в которых используется алюминий, плакированный медью CCA Такая неэкранированная витая пара с одножильными проводами диаметром 0.50 мм широко применяется в процессе сетевых монтажных работ. С ее помощью вы сможете обеспечить развертывание локальной сети в домашних условиях или на предприятии, объединить все необходимое вам оборудование в единую сеть.',
    category: 'кабели',
    discont: false,
    count: 10,
    units: 'метр',
    images: {
      small: 'http://dummy-images.com/business/dummy-400x300-Laptop.jpg',
      big: 'http://dummy-images.com/business/dummy-800x600-Laptop.jpg',
    },
  },
];

/* // данные списик объектов наших товаров
export const initialData = [
  {
    id: '134177864407',
    title: 'Смартфон RedME 15M 64GB',
    price: 100,
    description: 'представитель флагманской линейки выпущенной во второй',
    category: 'Смартфон',
    discont: true,
    discontPercent: 25,
    count: 1,
    units: 'шт',
    images: {
      small: 'http://dummy-images.com/business/dummy-336x280-Numbers.jpg',
      big: 'http://dummy-images.com/business/dummy-884x680-Numbers.jpg',
    },
  },
  {
    id: '173639347407',
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
      small: 'http://dummy-images.com/business/dummy-456x300-Tax.jpg',
      big: 'http://dummy-images.com/business/dummy-686x900-Tax.jpg',
    },
  },
  {
    id: '63818138507',
    title: 'Радиоуправляемый мото автомобиль Motocross',
    price: 400,
    description: `Внедорожник на дистанционном управлении. 
    Скорость 25км/ч. Возраст 27 - 44 лет`,
    category: 'toys',
    discont: 5,
    count: 1,
    units: 'шт',
    images: {
      small: 'http://dummy-images.com/sport/dummy-300x300-Motocross.jpg',
      big: 'http://dummy-images.com/sport/dummy-500x500-Motocross.jpg',
    },
  },
  {
    id: '92972231207',
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
      small: 'http://dummy-images.com/business/dummy-420x360-Laptop.jpg',
      big: 'http://dummy-images.com/business/dummy-920x560-Laptop.jpg',
    },
  },
  {
    id: '277470336507',
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
      small: 'http://dummy-images.com/abstract/dummy-454x280-Rope.jpg',
      big: 'http://dummy-images.com/abstract/dummy-628x860-Rope.jpg',
    },
  },
];

 */