const itemList = document.querySelector(".contact-list");
// Inserting pagination
itemList.insertAdjacentHTML('afterend', `<div class="pagination" id="yeet"><li></li></div>`);

const maxItemsPerPage = 10,
items = Array.from(document.querySelectorAll(".contact-item")), 
itemCount = items.length,  
pagination = document.querySelector(".pagination li"), 
numberOfPages = Math.ceil(itemCount / maxItemsPerPage);

// Displaying page numbers
for (var i = 1; i <= numberOfPages; i++) {
    pagination.insertAdjacentHTML('beforeend', `<a id="page-${i}">${i}</a>`);
    
    var pageItem = document.getElementById(`page-${i}`);
    pageItem.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent page reload
        displayItemsFromPageNumber(Number(e.target.text));
    });
}

function displayItemsFromPageNumber(pageNumber) {
    highlightPage(pageNumber);
    itemList.innerHTML = ""; // Emptying list

    const firstItemIndex = pageNumber * maxItemsPerPage - maxItemsPerPage;
    var lastItemIndex = firstItemIndex + maxItemsPerPage;
    if (lastItemIndex > itemCount) // If last index exceeds item count
        lastItemIndex = itemCount;

    // Adding items to list
    for (var i = firstItemIndex; i < lastItemIndex; i++)
        itemList.insertAdjacentElement('beforeend', items[i]);
} displayItemsFromPageNumber(1); // Display first page by default

function highlightPage(pageNumber) {
    // Un-highlighting all pages
    for (var i = 1; i <= numberOfPages; i++)
        document.getElementById(`page-${i}`).classList.remove("active");

    // Highlighting selected page
    document.getElementById(`page-${pageNumber}`).classList.add("active");
}
