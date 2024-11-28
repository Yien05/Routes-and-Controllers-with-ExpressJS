const express = require("express");
const app = express();

let books = [
  {
    id: "b1",
    title: "Book One",
    description: "Description of book one",
    authorId: "a1",
  },
  {
    id: "b2",
    title: "Book Two",
    description: "Description of book two",
    authorId: "a2",
  },
];

let reviews = [
  { id: "r1", text: "Amazing book!", bookId: "b1" },
  { id: "r2", text: "Decent read.", bookId: "b2" },
];

let authors = [
  { id: "a1", name: "Author One", bio: "Bio of Author One" },
  { id: "a2", name: "Author Two", bio: "Bio of Author Two" },
];

// Your routing and controller code goes here

// get all the books
app.get("/books", (request, response) => {
  response.send(books);
});

// get books2,author2 only
app.get("/books/:book_id", (req, res) => {
  const book_id = req.params.book_id;
  const selected = books.find((p) => p.id === book_id);
  if (selected) {
    const author = authors.find((a) => a.id === selected.authorId);
    const answer = { ...selected, name: author.name, bio: author.bio };
    res.send(answer);
  }
});

// get all the reviews
app.get("/reviews", (request, response) => {
  response.send(reviews);
});

app.get("/reviews/:review_id", (req, res) => {
  const review_id = req.params.review_id;
  const selected = reviews.find((r) => r.id === review_id);
  if (selected) {
    const book = books.find((r) => r.id === selected.bookId);
    const answer = { ...selected, title: book.title };
    res.send(answer);
  }
});

// get all the authors
app.get("/authors", (request, response) => {
  response.send(authors);
});

app.get("/authors/:author_id", (req, res) => {
  const author_id = req.params.author_id;
  const selected = authors.find((a) => a.id === author_id);
  res.send(selected);
});

// start the app
app.listen(5000, () => {
  // to confirm the server is running
  console.log("the server is running at http://localhost:5000");
});
