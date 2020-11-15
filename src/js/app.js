const books = await fetch(".netlify/functions/books").then((response) => {
  response.json();
});

const container = document.getElementById("books");
const template = document.getElementById("template");

for (book in books) {
  const book = template.content.cloneNode(true);

  book.getElementByClass("title").textContent = book.title;
  book.getElementByClass("subtitle").textContent = book.subtitle;
  book.getElementByClass("cover").src = book.cover;
  book.getElementByClass("cover").alt = book.title;

  container.appendChild(book);
}
