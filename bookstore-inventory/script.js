const bookstoreInventory = [
    {
        title: "The Great Gatsby",
        author: { firstName: "F. Scott", lastName: "Fitzgerald" },
        publicationYear: 1925,
        details: { publisher: "Charles Scribner's Sons", pageCount: 218 },
        available: true
    },
    {
        title: "To Kill a Mockingbird",
        author: { firstName: "Harper", lastName: "Lee" },
        publicationYear: 1960,
        details: { publisher: "J.B. Lippincott & Co.", pageCount: 281 },
        available: true
    },
    {
        title: "1984",
        author: { firstName: "George", lastName: "Orwell" },
        publicationYear: 1949,
        details: { publisher: "Secker & Warburg", pageCount: 328 },
        available: false
    }
];

function displayBooks() {
    const bookList = document.getElementById("book-list");

    bookstoreInventory.forEach(book => {
        const listItem = document.createElement("li");
        listItem.textContent = book.title;

        const details = document.createElement("div");
        details.classList.add("book-details");

        details.innerHTML = `
            Author: ${book.author.firstName} ${book.author.lastName} <br>
            Publication Year: ${book.publicationYear} <br>
            Publisher: ${book.details.publisher} <br>
            Page Count: ${book.details.pageCount} <br>
            Available: ${book.available ? "Yes" : "No"}
        `;

        listItem.appendChild(details);
        bookList.appendChild(listItem);
    });
}

document.addEventListener("DOMContentLoaded", displayBooks);
