/*
    This exercise includes an array of objects. You can read more about objects here: https://javascript.info/object

    Imagine you're working for an online store selling books (like Amazon).
    Below, we have an array of book objects.
    Each object contains the title of the book, the genre, and a rating based on user reviews.
    
    We want to find the title of the highest rated book in each genre to showcase on our home page.
    Implement a function which takes the array of books as a parameter, and returns an array of book titles.
    Each title in the resulting array should be the highest rated book in its genre.
*/

function getHighestRatedInEachGenre(books) {
  const children = [];
  const nonFiction = [];
  const cooking = [];
  const ChildrenRatingArr = [];
  const nonFictionRatingArr = [];
  const cookingRatingArr = [];
  let bookNames = [];
  for (let book of books) {
    if (book.genre == "children") {
      children.push(book);
    } else if (book.genre == "non-fiction") {
      nonFiction.push(book);
    } else if (book.genre == "cooking") {
      cooking.push(book);
    }
  }
  for (let i = 0; i < nonFiction.length; i++) {
    nonFictionRatingArr.push(nonFiction[i].rating);
  }
  let maxRatingOfNonFiction = Math.max(...nonFictionRatingArr);
  let placeOfMaxNonFiction = nonFictionRatingArr.indexOf(maxRatingOfNonFiction);
  bookNames.push(nonFiction[placeOfMaxNonFiction].title);

  for (let i = 0; i < children.length; i++) {
    ChildrenRatingArr.push(children[i].rating);
  }
  let maxRatingOfChildren = Math.max(...ChildrenRatingArr);
  let placeOfMaxChildren = ChildrenRatingArr.indexOf(maxRatingOfChildren);
  bookNames.push(children[placeOfMaxChildren].title);

  for (let i = 0; i < cooking.length; i++) {
    cookingRatingArr.push(cooking[i].rating);
  }
  let maxRatingOfCooking = Math.max(...cookingRatingArr);
  let placeOfMaxCooking = cookingRatingArr.indexOf(maxRatingOfCooking);
  bookNames.push(cooking[placeOfMaxCooking].title);

  return bookNames;
}
/* ======= Book data - DO NOT MODIFY ===== */

const BOOKS = [
  {
    title: "The Lion, the Witch and the Wardrobe",
    genre: "children",
    rating: 4.7,
  },
  {
    title: "Sapiens: A Brief History of Humankind",
    genre: "non-fiction",
    rating: 4.7,
  },
  {
    title: "Nadiya's Fast Flavours",
    genre: "cooking",
    rating: 4.7,
  },
  {
    title: "Harry Potter and the Philosopher's Stone",
    genre: "children",
    rating: 4.8,
  },
  {
    title: "A Life on Our Planet",
    genre: "non-fiction",
    rating: 4.8,
  },
  {
    title:
      "Dishoom: The first ever cookbook from the much-loved Indian restaurant",
    genre: "cooking",
    rating: 4.85,
  },
  {
    title: "Gangsta Granny Strikes Again!",
    genre: "children",
    rating: 4.9,
  },
  {
    title: "Diary of a Wimpy Kid",
    genre: "children",
    rating: 4.6,
  },
  {
    title: "BOSH!: Simple recipes. Unbelievable results. All plants.",
    genre: "cooking",
    rating: 4.6,
  },
  {
    title: "The Book Your Dog Wishes You Would Read",
    genre: "non-fiction",
    rating: 4.85,
  },
];

/* ======= TESTS - DO NOT MODIFY ===== */
test("should return the highest rated book in each genre", () => {
  expect(new Set(getHighestRatedInEachGenre(BOOKS))).toEqual(
    new Set([
      "The Book Your Dog Wishes You Would Read",
      "Gangsta Granny Strikes Again!",
      "Dishoom: The first ever cookbook from the much-loved Indian restaurant",
    ])
  );
});
