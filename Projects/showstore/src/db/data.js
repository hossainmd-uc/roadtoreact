import { AiFillStar } from "react-icons/ai";

const data = [
  {
    img: "https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg",
    title: "Nike Air Monarch IV",
    star: 1,
    reviews: 177,
    prevPrice: 120.00,
    newPrice: 99.00,
    company: "Nike",
    color: "white",
    category: "sneakers",
  },
  {
    img: "https://m.media-amazon.com/images/I/519MRhRKGFL._AC_UX575_.jpg",
    title: "Nike Air Vapormax Plus",
    star: 2,
    reviews: 89,
    prevPrice: 180.00,
    newPrice: 150.00,
    company: "Nike",
    color: "red",
    category: "sneakers",
  },
  {
    img: "https://m.media-amazon.com/images/I/51+P9uAvb1L._AC_UY695_.jpg",
    title: "Nike Waffle One Sneaker",
    star: 3,
    reviews: 123,
    prevPrice: 100.00,
    newPrice: 85.00,
    company: "Nike",
    color: "green",
    category: "sneakers",
  },
  {
    img: "https://m.media-amazon.com/images/I/71oEKkghg-L._AC_UX575_.jpg",
    title: "Nike Running Shoe",
    star: 3,
    reviews: 99,
    prevPrice: 130.00,
    newPrice: 110.00,
    company: "Adidas",
    color: "black",
    category: "sneakers",
  },
  {
    img: "https://m.media-amazon.com/images/I/41M54ztS6IL._AC_SY625._SX._UX._SY._UY_.jpg",
    title: "Flat Slip On Pumps",
    star: 4,
    reviews: 87,
    prevPrice: 75.00,
    newPrice: 60.00,
    company: "Vans",
    color: "green",
    category: "flats",
  },
  {
    img: "https://m.media-amazon.com/images/I/71zKuNICJAL._AC_UX625_.jpg",
    title: "Knit Ballet Flat",
    star: 5,
    reviews: 210,
    prevPrice: 80.00,
    newPrice: 65.00,
    company: "Adidas",
    color: "black",
    category: "flats",
  },
  {
    img: "https://m.media-amazon.com/images/I/61V9APfz97L._AC_UY695_.jpg",
    title: "Loafer Flats",
    star: 5,
    reviews: 153,
    prevPrice: 90.00,
    newPrice: 70.00,
    company: "Vans",
    color: "white",
    category: "flats",
  },
  {
    img: "https://m.media-amazon.com/images/I/71VaQ+V6XnL._AC_UY695_.jpg",
    title: "Nike Zoom Freak",
    star: 5,
    reviews: 178,
    prevPrice: 160.00,
    newPrice: 130.00,
    company: "Nike",
    color: "green",
    category: "sneakers",
  },
  {
    img: "https://m.media-amazon.com/images/I/61-cBsLhJHL._AC_UY695_.jpg",
    title: "Nike Men's Sneaker",
    star: 5,
    reviews: 134,
    prevPrice: 125.00,
    newPrice: 100.00,
    company: "Adidas",
    color: "blue",
    category: "sneakers",
  },
  {
    img: "https://m.media-amazon.com/images/I/81xXDjojYKS._AC_UX575_.jpg",
    title: "PUMA BLACK-OCE",
    star: 4,
    reviews: 112,
    prevPrice: 110.00,
    newPrice: 85.00,
    company: "Puma",
    color: "green",
    category: "sneakers",
  },
  {
    img: "https://m.media-amazon.com/images/I/71E75yRwCDL._AC_UY575_.jpg",
    title: "Pacer Future Sneaker",
    star: 3,
    reviews: 105,
    prevPrice: 100.00,
    newPrice: 80.00,
    company: "Puma",
    color: "red",
    category: "sneakers",
  },
  {
    img: "https://m.media-amazon.com/images/I/71jeoX0rMBL._AC_UX575_.jpg",
    title: "Unisex-Adult Super",
    star: 5,
    reviews: 198,
    prevPrice: 140.00,
    newPrice: 100.00,
    company: "Puma",
    color: "black",
    category: "sneakers",
  },
  {
    img: "https://m.media-amazon.com/images/I/61TM6Q9dvxL._AC_UX575_.jpg",
    title: "Roma Basic Sneaker",
    star: 3,
    reviews: 92,
    prevPrice: 100.00,
    newPrice: 75.00,
    company: "Puma",
    color: "white",
    category: "sneakers",
  },
  {
    img: "https://m.media-amazon.com/images/I/7128-af7joL._AC_UY575_.jpg",
    title: "Pacer Future Doubleknit",
    star: 3,
    reviews: 76,
    prevPrice: 120.00,
    newPrice: 90.00,
    company: "Puma",
    color: "black",
    category: "sneakers",
  },
  {
    img: "https://m.media-amazon.com/images/I/81xXDjojYKS._AC_UX575_.jpg",
    title: "Fusion Evo Golf Shoe",
    star: 4,
    reviews: 140,
    prevPrice: 150.00,
    newPrice: 120.00,
    company: "Puma",
    color: "green",
    category: "sneakers",
  },
  {
    img: "https://m.media-amazon.com/images/I/719gdz8lsTS._AC_UX575_.jpg",
    title: "Rainbow Chex Skate",
    star: 2,
    reviews: 58,
    prevPrice: 60.00,
    newPrice: 45.00,
    company: "Vans",
    color: "red",
    category: "flats",
  },
  {
    img: "https://m.media-amazon.com/images/I/71gpFHJlnoL._AC_UX575_.jpg",
    title: "Low-Top Trainers",
    star: 4,
    reviews: 111,
    prevPrice: 70.00,
    newPrice: 55.00,
    company: "Vans",
    color: "white",
    category: "sandals",
  },
  {
    img: "https://m.media-amazon.com/images/I/71pf7VFs9CL._AC_UX575_.jpg",
    title: "Vans Unisex Low-Top",
    star: 4,
    reviews: 127,
    prevPrice: 65.00,
    newPrice: 50.00,
    company: "Vans",
    color: "blue",
    category: "sandals",
  },
  {
    img: "https://m.media-amazon.com/images/I/61N4GyWcHPL._AC_UY575_.jpg",
    title: "Classic Bandana Sneakers",
    star: 5,
    reviews: 190,
    prevPrice: 95.00,
    newPrice: 80.00,
    company: "Nike",
    color: "black",
    category: "sandals",
  },
  {
    img: "https://m.media-amazon.com/images/I/61bncQ44yML._AC_UX695_.jpg",
    title: "Chunky High Heel",
    star: 4,
    reviews: 75,
    prevPrice: 85.00,
    newPrice: 65.00,
    company: "Vans",
    color: "black",
    category: "heels",
  },
  {
    img: "https://m.media-amazon.com/images/I/71czu7WgGuL._AC_UY695_.jpg",
    title: "Slip On Stiletto High Heel",
    star: 3,
    reviews: 82,
    prevPrice: 90.00,
    newPrice: 70.00,
    company: "puma",
    color: "black",
    category: "heels",
  },
  {
    img: "https://m.media-amazon.com/images/I/61men05KRxL._AC_UY625_.jpg",
    title: "DREAM PAIRS Court Shoes",
    star: 4,
    reviews: 108,
    prevPrice: 120.00,
    newPrice: 95.00,
    company: "Nike",
    color: "red",
    category: "heels",
  },
  {
    img: "https://m.media-amazon.com/images/I/519MRhRKGFL._AC_UX575_.jpg",
    title: "Nike Air Vapormax Plus",
    star: 5,
    reviews: 229,
    prevPrice: 180.00,
    newPrice: 150.00,
    company: "Nike",
    color: "red",
    category: "sneakers",
  },
  {
    img: "https://m.media-amazon.com/images/I/51PGWTXgf-L._AC_UY625_.jpg",
    title: "Low Mid Block Heels",
    star: 4,
    reviews: 93,
    prevPrice: 80.00,
    newPrice: 60.00,
    company: "Nike",
    color: "black",
    category: "heels",
  },
  {
    img: "https://m.media-amazon.com/images/I/616sA5XUKtL._AC_UY675_.jpg",
    title: "Chunky High Heel",
    star: 4,
    reviews: 84,
    prevPrice: 85.00,
    newPrice: 65.00,
    company: "Adidas",
    color: "black",
    category: "heels",
  },
  {
    img: "https://m.media-amazon.com/images/I/71h5+MbEK7L._AC_UY625_.jpg",
    title: "Amore Fashion Stilettos",
    star: 1,
    reviews: 66,
    prevPrice: 100.00,
    newPrice: 75.00,
    company: "Adidas",
    color: "white",
    category: "heels",
  },
  {
    img: "https://m.media-amazon.com/images/I/61uw5RDxKQL._AC_UY625_.jpg",
    title: "Bridal Sandals Glitter",
    star: 4,
    reviews: 114,
    prevPrice: 120.00,
    newPrice: 90.00,
    company: "Adidas",
    color: "black",
    category: "heels",
  },
  {
    img: "https://m.media-amazon.com/images/I/71yhoZP0l6L._AC_UY695_.jpg",
    title: "Wedding Prom Bridal",
    star: 4,
    reviews: 101,
    prevPrice: 110.00,
    newPrice: 85.00,
    company: "Adidas",
    color: "black",
    category: "flats",
  },
];

export default data;