document.addEventListener("DOMContentLoaded", function () {
    const viewDetailsButtons = document.querySelectorAll(".view-details");

    viewDetailsButtons.forEach((button) => {
        button.addEventListener("click", function () {
            const productId = this.getAttribute("data-id");
            const detailsElement = document.getElementById(`details-${productId}`);

            if (detailsElement.style.display === "none") {
                detailsElement.style.display = "block";
                this.textContent = "Ẩn bớt";
            } else {
                detailsElement.style.display = "none";
                this.textContent = "Xem thêm";
            }
        });
    });
});

