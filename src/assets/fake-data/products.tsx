// all images imported from images directory
import product_01_image_01 from "../images/COB.jpg";
import product_01_image_02 from "../images/led.jpg";
import product_01_image_03 from "../images/ovenstand.png";

import product_02_image_01 from "../images/food6.png";
import product_02_image_02 from "../images/food8.png";
import product_02_image_03 from "../images/product_09.jpg";

import product_03_image_01 from "../images/redonion.jpg";
import product_03_image_02 from "../images/mango.png";
import product_03_image_03 from "../images/brocoli.jpg";
import product_03_image_04 from "../images/eggplant.png";


import product_06_image_01 from "../images/macaroni.jpg";
import product_06_image_02 from "../images/pasta.jpg";
import product_06_image_03 from "../images/fruit.jpg";
import product_06_image_04 from "../images/coffee.jpg";
import product_06_image_05 from "../images/coffee2.jpg";

const products = [
  {
    id: "01",
    title: "COB",
    price: 300.0,
    image01: product_01_image_01,
    image02: product_01_image_02,
    image03: product_01_image_03,
    category: "Electronics",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque. ",
  },
  {
    id: "02",
    title: "Led",
    price: 250.0,
    image01: product_01_image_02,
    image02: product_01_image_01,
    image03: product_01_image_03,
    category: "Electronics",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque. ",
  },
  {
    id: "03",
    title: "Oven Stand",
    price: 180.0,
    image01: product_01_image_03,
    image02: product_01_image_01,
    image03: product_01_image_03,
    category: "Electronics",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque. ",
  },

  {
    id: "04",
    title: "Shekla Tibs(ሽክላ ጥብስ)",
    price: 200.0,
    image01: product_02_image_01,
    image02: product_02_image_02,
    image03: product_02_image_03,
    category: "Food",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },
  
  {
    id: "05",
    title: "Tibs(ጥብስ)",
    price: 115.0,
    image01: product_02_image_02,
    image02: product_02_image_01,
    image03: product_02_image_03,
    category: "Food",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "06",
    title: "Burger",
    price: 115.0,
    image01: product_02_image_03,
    image02: product_02_image_02,
    image03: product_02_image_01,
    category: "Food",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },
  
  {
    id: "08",
    title: "Red Onion",
    price: 359.0,
    image01: product_03_image_01,
    image02: product_03_image_02,
    image03: product_03_image_03,
    image04:product_03_image_04,
    category: "Vegitable",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },
  {
    id: "09",
    title: "Brocoli",
    price: 359.0,
    image01: product_03_image_03,
    image02: product_03_image_02,
    image03: product_03_image_01,
    image04:product_03_image_04,
    category: "Vegitable",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },
  


  {
    id: "11",
    title: "Mango",
    price: 35.0,
    image01: product_03_image_02,
    image02: product_03_image_01,
    image03: product_03_image_03,
    image04:product_03_image_04,
    category: "Vegitable",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "12",
    title: "Egg Plant ",
    price: 35.0,
    image01: product_03_image_04,
    image02: product_03_image_01,
    image03: product_06_image_03,
    image04:product_03_image_02,
    category: "Vegetable",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "13",
    title: "Macaroni",
    price: 35.0,
    image01: product_06_image_01,
    image02: product_06_image_02,
    image03: product_06_image_03,
    image04:product_06_image_05,
    image05: product_06_image_04,
    category: "Grocery",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },
  {
    id: "14",
    title: "Pasta ",
    price: 70.0,
    image01: product_06_image_02,
    image02: product_06_image_01,
    image03: product_06_image_03,
    image04:product_06_image_05,
    image05: product_06_image_04,
    category: "Grocery",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },
  {
    id: "15",
    title: "Fruit ",
    price: 400.0,
    image01: product_06_image_03,
    image02: product_06_image_02,
    image03: product_06_image_01,
    image04:product_06_image_05,
    image05: product_06_image_04,
    category: "Grocery",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },
  {
    id: "16",
    title: "Coffee",
    price: 135.0,
    image01: product_06_image_04,
    image02: product_06_image_02,
    image03: product_06_image_03,
    image04:product_06_image_05,
    image05:product_06_image_01,
    category: "Grocery",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },
];

export default products;
