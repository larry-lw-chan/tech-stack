const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

// Array and Object Destructuring
// const { title, author, pages, genres } = getBook(1);
// const [primaryGenre, secondaryGenre] = genres;
// console.log(title, author, pages);
// console.log(primaryGenre, secondaryGenre);

// // Rest and Spread Operators
// const { genres } = getBook(1);
// const [primaryGenre, secondaryGenre, ...others] = genres; // rest operator
// // console.log(others);

// const newGenres = ["headache", "sickness", "stuffed", ...genres]; // array spread operator
// // console.log(newGenres);

// const book = getBook(1);
// const updatedBook = {
//   ...book,
//   // add new properties
//   moviePublicationDate: "2001-12-19",
//   // override existing properties
//   pages: 1210,
// }; // obj spread operator
// console.log(updatedBook);

// Template Literals
// let book = getBook(1);
// let summary = `The book ${book.title} was written by ${book.author} in ${book.publicationDate}.`;

// Tenery Operator
// let book = getBook(1);
// let bookType = book.pages > 1000 ? "long book" : "short book";
// console.log(bookType);

// Arrow Functions
// (str) => {
//   str.split("-")[0];
// };

// Short Circuit Evaluation
// console.log(true && "hello"); // hello
// console.log(false && "hello"); // false

// console.log(true || "hello"); // hello
// console.log(false || "hello"); // false

// Optional Chaining (add ?)
// function getTotalReviewCount(book) {
//   const goodread = book.reviews.goodreads?.reviewsCount;
//   const libraryThing = book.reviews.librarything?.reviewsCount ?? 0;
//   return goodread + libraryThing;
// }

// console.log(getTotalReviewCount(getBook(3)));

// Map
// let books = getBooks();
// let titles = books.map((book) => book.title);
// // console.log(titles);

// let essential_data = books.map((book) => ({
//   title: book.title,
//   author: book.author,
// }));

// console.log(essential_data);

// Filter
// let books = getBooks();
// let longBooks = books
//   .filter((book) => book.pages > 500)
//   .filter((book) => book.hasMovieAdaptation);
// // console.log(longBooks);

// let adventureBooks = books
//   .filter((book) => book.genres.includes("adventure"))
//   .map((book) => book.title);
// console.log(adventureBooks);

// Reduce
// let books = getBooks();
// const pagesAllBooks = books.reduce((acc, book) => acc + book.pages, 0);
// console.log(pagesAllBooks);

// Sort
// const arr = [3, 7, 1, 9, 6];
// let sorted = arr.sort((a, b) => a - b);
// console.log(sorted);

// Immutable Array
// 1) Add book object to array
// const newBook = {
//   id: 6,
//   title: "The Lord of the Rings",
//   author: "J. R. R. Tolkien",
// };

// const booksAfterAdd = [...getBooks(), newBook]; // add new book to array
// // console.log(booksAfterAdd);
// const booksAfterDelete = booksAfterAdd.filter((book) => book.id !== 3); // delete book from array
// // console.log(booksAfterDelete);
// const booksAfterUpdate = booksAfterAdd.map((book) =>
//   book.id == 1 ? { ...book, pages: 1210 } : book
// ); // update book in array
// console.log(booksAfterUpdate);

// Promise Syntax
// fetch("https://jsonplaceholder.typicode.com/todos/")
//   .then((response) => response.json())
//   .then((json) => console.log(json));

// Async/Await Syntax
async function getTodos() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/");
  const json = await response.json();
  console.log(json);
}

getTodos();
