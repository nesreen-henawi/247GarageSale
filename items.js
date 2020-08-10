/*********************************************************************************
 * WEB222 – Assignment 05
 * I declare that this assignment is my own work in accordance with Seneca Academic Policy. No part of
 * this assignment has been copied manually or electronically from any other source (including web sites)
 * or distributed to other students.
 *
 * Name: Nisrein Hinnawi   Student ID: 130223183    Date: 7/8/2020
 *
 ********************************************************************************/

var items = [
  {
    id: 1,
    title: 'Butterfly',
    description:
      'Baby Toy Rattles Teether, with bright color it helps your baby to discover new colores',
    brand: 'TUMAMA',
    price: 2.25,
    category: [1],
    condition: 0,
    images: ['images/toys/img_1_a.jpg', 'images/toys/img_1_b.jpg']
  },
  {
    id: 2,
    title: 'Tiny teddy bear',
    description:
      'Small soft teddy bear with heart shape in the middle, your baby can hold it easily with comfortably',
    brand: 'IKEA',
    price: 0.0,
    category: [1],
    condition: 1,
    images: ['images/toys/img_2_a.jpg', 'images/toys/img_2_b.jpg']
  },
  {
    id: 3,
    title: 'Piano',
    description:
      'Five light-up piano keys,and many musical settings that keep your little one rocking out for years',
    brand: 'Fisher-Price',
    price: 9.99,
    category: [1],
    condition: 2,
    images: ['images/toys/img_3_a.jpg', 'images/toys/img_3_b.jpg']
  },
  {
    id: 4,
    title: 'Tiny Car',
    description:
      'Small baby car toy, not heavy, removable four wheels , it is perfect for baby 10 months plus age',
    brand: 'Cabby Cat',
    price: 6.99,
    category: [1],
    condition: 3,
    images: [
      'images/toys/img_4_a.jpg',
      'images/toys/img_4_b.jpg',
      'images/toys/img_4_c.jpg',
      'images/toys/img_4_d.jpg'
    ]
  },
  {
    id: 5,
    title: 'Man Hat',
    description: 'Black winter hat with a logo tag  it is comfortable throughout the cold winter.',
    brand: 'Calvin Klein',
    price: 5.65,
    category: [2],
    condition: 3,
    images: ['images/clothing/item1_a.jpg', 'images/clothing/item1_b.jpg']
  },
  {
    id: 6,
    title: 'Women Hat',
    description: 'Breathable design enables you to wear it comfortably throughout the hot summer.',
    brand: 'N/A',
    price: 4.29,
    category: [2],
    condition: 0,
    images: [
      'images/clothing/item2_a.jpg',
      'images/clothing/item2_b.jpg',
      'images/clothing/item2_c.jpg',
      'images/clothing/item2_d.jpg'
    ]
  },
  {
    id: 7,
    title: 'Baby Pant',
    description: 'Baby Pant 100% Cotton and Machine Wash, it fit baby 6-9 months age',
    brand: "Simple Joys by Carter's",
    price: 6.99,
    category: [2],
    condition: 1,
    images: [
      'images/clothing/item3_a.jpg',
      'images/clothing/item3_b.jpg',
      'images/clothing/item3_c.jpg',
      'images/clothing/item3_d.jpg'
    ]
  },
  {
    id: 8,
    title: 'Man Shirt',
    description:
      'Shirt Perfect for everyday styling, provides plenty of comfort as well as elegance',
    brand: 'Ralph Lauren',
    price: 16.99,
    category: [2],
    condition: 3,
    images: [
      'images/clothing/item4_a.jpg',
      'images/clothing/item4_b.jpg',
      'images/clothing/item4_c.jpg',
      'images/clothing/item4_d.jpg'
    ]
  },
  {
    id: 9,
    title: 'Women Blouse',
    description:
      'Lightweight and non-elastic fabric louse provides plenty of comfort as well as elegance.',
    brand: 'H&M',
    price: 8.99,
    category: [2],
    condition: 2,
    images: [
      'images/clothing/item5_a.jpg',
      'images/clothing/item5_b.jpg',
      'images/clothing/item5_c.jpg',
      'images/clothing/item5_d.jpg'
    ]
  },
  {
    id: 10,
    title: 'Tea Cups',
    description:
      'Very sturdy and able to withstand high temperature,Made from durable, tempered borosilicate glass',
    brand: 'Adagio ',
    price: 4.62,
    category: [3],
    condition: 3,
    images: ['images/kitchen/item1_a.jpg', 'images/kitchen/item1_b.jpg']
  },
  {
    id: 11,
    title: 'Soup Bowl',
    description:
      'Mini roast ceramic soup bowl with lid pudding bowl small household roast tank,Oven and microwave save.',
    brand: 'PC',
    price: 15.36,
    category: [3],
    condition: 0,
    images: ['images/kitchen/item2_a.jpg', 'images/kitchen/item2_b.jpg']
  },
  {
    id: 12,
    title: 'Coffee Mug',
    description:
      'Ceramic cup with ergonomic handle provide you the most comfortable grip, stable base for safe using.',
    brand: 'Corelle',
    price: 1.85,
    category: [3, 4],
    condition: 0,
    images: ['images/kitchen/item3_a.jpg', 'images/kitchen/item3_b.jpg']
  },

  {
    id: 13,
    title: 'Office Chair',
    description:
      'Home Office Task Chair with Arms and Adjustable Height, Suitable for Computer Working and Meeting and Reception Plac.',
    brand: 'DJ·Wang ',
    price: 66.74,
    category: [4],
    condition: 1,
    images: [
      'images/office/item1_a.jpg',
      'images/office/item1_b.jpg',
      'images/office/item1_c.jpg',
      'images/office/item1_d.jpg'
    ]
  },
  {
    id: 14,
    title: 'USB',
    description:
      '32GB USB Flash Drive good for PC/Laptop/PS4/External Storage Data, Jump Drive, Photo Stick Digital.',
    brand: 'N/A',
    price: 6.99,
    category: [4],
    condition: 2,
    images: ['images/office/item2_a.jpg', 'images/office/item2_b.jpg', 'images/office/item2_c.jpg']
  },
  {
    id: 15,
    title: 'Table Lamp ',
    description: ' Cute Fairy Table Lamp Desk Fabric Shade 3-Way Dimmable for perfect Home Decor ',
    brand: 'N/A',
    price: 18.77,
    category: [5],
    condition: 2,
    images: [
      'images/decoration/item1_a.jpg',
      'images/decoration/item1_b.jpg',
      'images/decoration/item1_c.jpg'
    ]
  },
  {
    id: 16,
    title: 'Mirror',
    description: 'Wall and Table Decorative Mirror, Rustic Wood Frame Heart with stand ',
    brand: 'HomeTrends',
    price: 14.15,
    category: [5],
    condition: 0,
    images: ['images/decoration/item2_a.jpg', 'images/decoration/item2_b.jpg']
  },
  {
    id: 17,
    title: 'Pillow',
    description: 'Throw Pillow Cases Decorative Soft Square Geometric Style',
    brand: 'Ashley',
    price: 26.99,
    category: [5],
    condition: 0,
    images: ['images/decoration/item3_a.jpg', 'images/decoration/item3_b.jpg']
  },
  {
    id: 18,
    title: 'Candle Holders',
    description: 'Candle Holder Glass Votive for Wedding, Birthday, Holiday & Home Decoration',
    brand: 'IKEA',
    price: 2.35,
    category: [5],
    condition: 1,
    images: ['images/decoration/item4_a.jpg', 'images/decoration/item4_b.jpg']
  },
  {
    id: 19,
    title: 'Vintage Duck',
    description: 'Small Mallard wooden duck figurine, this Cute little duck fits in your hand',
    brand: 'N/A',
    price: 0,
    category: [5],
    condition: 4,
    images: ['images/decoration/item5_a.jpg', 'images/decoration/item5_b.jpg']
  },
  {
    id: 20,
    title: 'Candle',
    description: 'Starfish Candle with lid, Burn for up to 2 hours at a time with perfect smell',
    brand: 'Clair de Lune',
    price: 6.99,
    category: [5],
    condition: 0,
    images: [
      'images/decoration/item6_a.jpg',
      'images/decoration/item6_b.jpg',
      'images/decoration/item6_c.jpg',
      'images/decoration/item6_d.jpg'
    ]
  },
  {
    id: 21,
    title: 'Baby Monitor',
    description: 'Color Video Monitor you can get a great view of baby day or night',
    brand: 'Summer',
    price: 29.99,
    category: [6],
    condition: 3,
    images: [
      'images/electronics/item1_a.jpg',
      'images/electronics/item1_b.jpg',
      'images/electronics/item1_c.jpg',
      'images/electronics/item1_d.jpg',
      ' images/electronics/item1_e.jpg'
    ]
  },
  {
    id: 22,
    title: 'fitbit charge 3',
    description: 'Better measure calorie burn,  track understand resting heart rate',
    brand: 'Fitbit',
    price: 75.95,
    category: [6],
    condition: 1,
    images: [
      'images/electronics/item2_a.jpg',
      'images/electronics/item2_b.jpg',
      'images/electronics/item2_c.jpg'
    ]
  },
  {
    id: 23,
    title: 'Thermometer',
    description: 'Forehead and Ear Digital Infrared Thermometer with Fever Alarm',
    brand: 'Elera',
    price: 6.99,
    category: [6],
    condition: 0,
    images: [
      'images/electronics/item3_a.jpg',
      'images/electronics/item3_b.jpg',
      'images/electronics/item3_c.jpg',
      'images/electronics/item3_d.jpg'
    ]
  },
  {
    id: 24,
    title: 'Head Phones',
    description: 'On-Ear Headphones, you can customize your fit for all-day listening comfort.',
    brand: 'Beats',
    price: 35.99,
    category: [4, 6],
    condition: 0,
    images: [
      'images/electronics/item4_a.jpg',
      'images/electronics/item4_b.jpg',
      'images/electronics/item4_c.jpg',
      'images/electronics/item4_d.jpg'
    ]
  },
  {
    id: 25,
    title: 'Coffee Grinder',
    description: 'Stainless steel bowl with stainless steel coffee grinder blade, clear top cover.',
    brand: 'KitchenAid',
    price: 22.79,
    category: [3, 6],
    condition: 2,
    images: [
      'images/electronics/item5_a.jpg',
      'images/electronics/item5_b.jpg',
      'images/electronics/item5_c.jpg'
    ]
  }
];
