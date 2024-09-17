document.addEventListener("DOMContentLoaded", function() {
    const reviewsPerPage = 10; // Number of reviews per page
    const reviewItems = document.querySelectorAll(".review-item");
    const paginationLinks = document.querySelectorAll(".pagination .page-number");
    const prevButton = document.querySelector(".pagination .prev");
    const nextButton = document.querySelector(".pagination .next");

    let currentPage = 1;

    function showPage(pageNumber) {
        // Ensure the page number is within bounds
        if (pageNumber < 1 || pageNumber > getTotalPages()) return;

        // Update the visibility of review items
        reviewItems.forEach((item, index) => {
            item.style.display = (Math.floor(index / reviewsPerPage) + 1 === pageNumber) ? 'flex' : 'none';
        });

        // Update active class for pagination links
        paginationLinks.forEach(link => link.classList.remove("active"));
        document.querySelector(`.pagination .page-number[data-page="${pageNumber}"]`).classList.add("active");

        // Update the current page
        currentPage = pageNumber;

        // Update the state of Previous and Next buttons
        updatePaginationButtons();
    }

    function getTotalPages() {
        return Math.ceil(reviewItems.length / reviewsPerPage);
    }

    function updatePaginationButtons() {
        prevButton.style.visibility = currentPage === 1 ? 'hidden' : 'visible';
        nextButton.style.visibility = currentPage === getTotalPages() ? 'hidden' : 'visible';
    }

    // Initial page load
    showPage(currentPage);

    // Pagination click events
    document.querySelectorAll(".pagination .page-number").forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const pageNumber = parseInt(this.getAttribute("data-page"), 10);
            if (pageNumber) {
                showPage(pageNumber);
            }
        });
    });

    // Previous button click event
    prevButton.addEventListener("click", function(e) {
        e.preventDefault();
        if (currentPage > 1) {
            showPage(currentPage - 1);
        }
    });

    // Next button click event
    nextButton.addEventListener("click", function(e) {
        e.preventDefault();
        if (currentPage < getTotalPages()) {
            showPage(currentPage + 1);
        }
    });
});
